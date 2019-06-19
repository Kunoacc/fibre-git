import React from "react"

const errorImg = require('../../assets/img/404.svg')

const Error404 = ({history}) => (
    <div className="container">
        <div className="col-12 col-md-8 col-xl-6 center text-center">
            <img src={errorImg} width="50%"/>
            <h2 className="my-5">The requested page wasn't found</h2>
            <button className="btn btn-outline-dark btn-lg" onClick={
                () => history.goBack()
            }>Go Back</button>
        </div>
    </div>
)

export default Error404