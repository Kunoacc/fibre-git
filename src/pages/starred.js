import React, { useEffect, useState } from "react"

import Api from "../api/api"
import RepositoryCard from "../components/repositoryCard"
import RepoLoader from "../components/repoLoader"

const Starred = ({source}) => {
    const [isloading, setIsLoading] = useState(true)
    const [starred, setStarred] = useState(null)

    useEffect(() => {
        const handleStarredRepos = (stars) => setStarred(stars)
        const handleLoadingStateChange = () => setIsLoading(!isloading)
        const getStarredRepos = async () => {
            let response = await Api.getResource(source)
            if (response.data !== null) {
                console.log(response)
                handleStarredRepos(response.data)
            }
            handleLoadingStateChange()
        }
        getStarredRepos()
    }, [])

    return (
        <div className="col-12">
            {
                isloading ? <div className="my-3"><RepoLoader></RepoLoader></div> :
                starred.map(star =>
                    <RepositoryCard description={star.description} name={star.name}
                    forks={star.forks_count} stars={star.stargazers_count} watchers={star.watchers_count}
                    key={starred.indexOf(star)}
                    />
                )
            }
        </div>
    )
}

export default Starred