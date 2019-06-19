import React, { useState } from "react"

const Home = (props) => {
    const [search, setSearch] = useState('')

    const handleSearchUpdate = (event) => setSearch(event.target.value)

    const handleEnterPress = (event) => {
        if (event.key === 'Enter') {
            return props.history.push(`/search?q=${search}`)
        }
    }

    return (
        <div className="container">
        <div className="col-12 center text-center">
            <h1>Git User Search</h1>
            <span className="text-secondary">Type below to get started!</span>
            <div className="col-8 mx-auto mt-4">
                <input className="form-control form-control-lg shadow-sm mt-4"
                placeholder="Press enter to search..." value={search} onChange={handleSearchUpdate} onKeyUp={handleEnterPress}/>
            </div>
        </div>
    </div>
    )
}

export default Home