import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import Api from "../api/api"
import UserCard from "../components/userCard"
import UserLoader from "../components/loader"

const Followers = ({source}) => {
    const [isloading, setIsLoading] = useState(true)
    const [followers, setFollowers] = useState(null)

    useEffect(() => {
        const handleLoadingStateChange = () => setIsLoading(!isloading)
        const handleSetFollowers = (fetched) => setFollowers(fetched)
        const getFollowers = async () => {
            let response = await Api.getResource(source)
            if (response.data !== null) {
                console.log(response)
                handleSetFollowers(response.data)
            }
            handleLoadingStateChange()
        }
        getFollowers()
    }, [])

    return (
        <div className="col-12">
            {
                isloading ? <div className="my-3"><UserLoader></UserLoader></div> :
                <div className="row">
                    {
                        followers.map(follower =>
                            <Link to={`/user/${follower.login}`} className="col-6 col-md-4">
                                <UserCard avatar={follower.avatar_url} name={follower.login}/>
                            </Link>
                        )
                    }
                </div>
            }
        </div>
    )
}

export default Followers