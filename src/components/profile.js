import React from "react"

const Profile = ({name, username, location, link, bio, avatar, email = null, blog  = null}) => (
    <div className="col-12 col-lg-4 col-xl-3 d-flex flex-column d-lg-block">
        <img src={avatar} width="150" className="mb-3 mr-3 mr-lg-0"/>
        <div className="col px-0">
            <h3 className="font-weight-bold text-capitalize">{name}</h3>
            <a href={link} target="_blank"><span>@{username}</span></a>
        </div>
        <div className="col px-0 mt-1 mt-md-2">
            <p className="text-secondary">{bio}</p>
            <div className="d-flex flex-column flex-md-row justify-content-between d-lg-block">
                {location ? <p>
                    <i className="fas fa-location-arrow mr-3"></i> {location}
                </p> : null}
                {email ? <p>
                    <i className="fas fa-inbox mr-3"></i> <a target="_blank" href={`mailto:${email}`}>{email}</a>
                </p> : null}
                {blog ? <p>
                    <i className="fas fa-link mr-3"></i> <a target="_blank" href={`http://${blog}`}>{blog}</a>
                </p> : null}
            </div>
        </div>
    </div>
)

export default Profile