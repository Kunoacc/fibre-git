import React, { useEffect, useState } from "react"

import Api from "../api/api"
import RepositoryCard from "../components/repositoryCard"
import RepoLoader from "../components/repoLoader"

const Repositories = ({source}) => {
    const [isloading, setIsLoading] = useState(true)
    const [repositories, setRepositories] = useState(null)

    useEffect(() => {
        const handleRepositoriesUpdate = (repos) => setRepositories(repos)
        const handleLoadingStateChange = () => setIsLoading(!isloading)
        const getRepositories = async () => {
            let response = await Api.getResource(source)
            if (response.data !== null) {
                handleRepositoriesUpdate(response.data)
            }
            handleLoadingStateChange()
        }
        getRepositories()
    }, [])

    return (
        <div className="col-12">
            {
                isloading ? <div className="my-3"><RepoLoader></RepoLoader></div> :
                repositories.map(repository =>
                    <RepositoryCard description={repository.description} name={repository.name}
                    forks={repository.forks_count} stars={repository.stargazers_count} watchers={repository.watchers_count}
                    key={repositories.indexOf(repository)}
                    />
                )
            }
        </div>
    )
}

export default Repositories