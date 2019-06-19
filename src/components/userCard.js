import React from "react"

const ResultCard = ({ avatar, name }) => (
    <div className="col my-3">
        <div className="card card-body shadow-sm px-3 user-card">
        <div className="row py-3 px-4 text-center">
            <div className="col-12">
               <img src={avatar} className="rounded-circle" alt="" width={100}></img>
            </div>
            <div className="col-12 py-3">
                <h5 className="text-capitalize font-weight-bold">{name}</h5>
            </div>
        </div>
        </div>
    </div>
)

export default ResultCard