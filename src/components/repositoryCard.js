import React from "react"

const RepositoryCard = ({name, description, forks, stars, watchers, date = null}) => (
    <div className="col-12 my-3">
        <div className="card card-body shadow-sm">
            <h5>
                <i className="fab fa-git-square"></i> {name}
            </h5>
            <span className="text-secondary">{description}</span>
            <div className="mt-3">
                    <div>
                        <span className="mr-2"><i className="fas fa-code-branch mr-1"></i> {forks}</span>
                        <span className="mr-2"><i className="fas fa-star mr-1"></i> {stars}</span>
                        <span className="mr-2"><i className="fas fa-eye mr-1"></i> {watchers}</span>
                    </div>
            </div>
        </div>
    </div>
)

export default RepositoryCard