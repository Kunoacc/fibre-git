import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import Api from "../api/api"
import UserCard from "../components/userCard"
import UserLoader from "../components/loader"

const Following = ({source}) => {
    const [isloading, setIsLoading] = useState(true)
    const [followings, setFollowings] = useState(null)

    useEffect(() => {
        const handleLoadingStateChange = () => setIsLoading(!isloading)
        const handleSetFollowings = (fetched) => setFollowings(fetched)
        const getFollowings = async () => {
            let response = await Api.getResource(source)
            if (response.data !== null) {
                console.log(response)
                handleSetFollowings(response.data)
            }
            handleLoadingStateChange()
        }
        getFollowings()
    }, [])

    return (
        <div className="col-12">
            {
                isloading ? <div className="my-3"><UserLoader></UserLoader></div> :
                <div className="row">
                    {
                        followings.map(following =>
                            <Link to={`/user/${following.login}`} className="col-6 col-md-4">
                                <UserCard avatar={following.avatar_url} name={following.login}/>
                            </Link>
                        )
                    }
                </div>
            }
        </div>
    )
}

export default Following