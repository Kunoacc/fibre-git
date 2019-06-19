import React from "react"
import { NavLink, Route } from "react-router-dom"

import Profile from "../components/profile"
import Repositories from "./repositories"
import Starred from "./starred"
import Followers from "./followers"
import Followings from "./following"

const User = ({match, data}) => {
    console.log(match)
    console.log(data)
    return (
        <div className="container mt-2 mt-lg-4">
            <div className="row pt-5">
                <Profile avatar={data.avatar_url} username={data.login} link={data.html_url}
                    bio={data.bio} location={data.location} blog={data.blog} email={data.email}
                />
                <div className="col-12 d-lg-none">
                    <hr/>
                </div>
                <div className="col-12 col-lg-8 col-xl-9 ml-auto">
                    <div className="col-12 d-flex flex-row justify-content-between align-items-baseline" id="profileTabs" role="tablist">
                            <NavLink to={match.url} className="profile-header">
                                <h3 className="font-weight-bold">
                                    Repositories
                                    <span className=" ml-2 font-weight-light text-white badge badge-dark" style={{fontSize: '1rem'}}>
                                        {`${data.public_repos}`}
                                    </span>
                                </h3>
                            </NavLink>
                            <div className="links d-flex flex-row">
                                <NavLink to={`${match.url}/starred`} className="profile-tab" activeClassName="profile-tab-active">
                                    <p className="text-secondary px-3 py-2 mb-0">
                                        <b className="text-dark">Starred</b>
                                    </p>
                                </NavLink>
                                <NavLink to={`${match.url}/followers`} className="profile-tab" activeClassName="profile-tab-active">
                                    <p className="text-secondary px-3 py-2 mb-0">
                                        <b className="text-dark">Followers</b> {data.followers}
                                    </p>
                                </NavLink>
                                <NavLink to={`${match.url}/following`} className="profile-tab" activeClassName="profile-tab-active">
                                   <p className="text-secondary px-3 py-2 mb-0">
                                        <b className="text-dark">Following</b> {data.following}
                                    </p>
                                </NavLink>
                            </div>
                    </div>
                    <Route exact path={`${match.url}`} render={
                        () => <Repositories source={data.repos_url}/>
                    }/>
                    <Route exact path={`${match.url}/starred`} render={
                        () => <Starred source={data.starred_url}/>
                    }/>
                    <Route exact path={`${match.url}/followers`} render={
                        () => <Followers source={data.followers_url}/>
                    }/>
                    <Route exact path={`${match.url}/following`} render={
                        () => <Followings source={data.following_url}/>
                    }/>
                </div>
            </div>
          </div>
    )
}

export default User