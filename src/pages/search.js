import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";

import Loader from "../components/loader"
import UserCard from "../components/userCard"
import Api from "../api/api";

const Search = ({ location }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [results, setResults] = useState(null)
    console.log(location.search)
    const query = new URLSearchParams(location.search)

    useEffect(() => {
        const handleResultChanges = ({ data }) => setResults(data)
        const handleLoadingStateChange = () => setIsLoading(!isLoading)
        const getData = async () => {
            let response = await Api.getUsers(query.get('q'))
            console.log(response)
            if (response.data !== null) {
                handleResultChanges(response)
                console.log(response.data)
            }
            handleLoadingStateChange()
        }
        getData()
    }, [])

    return (
        <div className="container my-5">
            {isLoading ? (<Loader/>) : (
                <div>
                    <h2 className="my-5">Search Results for "<b>{query.get('q')}</b>"</h2>
                    <div className="row">
                        {results.items.map((result) =>
                            <Link to={`/user/${result.login}`} className="col-6 col-md-4">
                                <UserCard avatar={result.avatar_url} name={result.login} key={results.items.indexOf(result)} />
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Search