import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
    const [search, setSearch] = useState('')
    const handleSearchUpdate = (event) => setSearch(event.target.value)

    const handleSearch = (event) => {
        event.preventDefault()
        return props.history.push(`/search?q=${search}`)
    }

    return (<nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">Fibre Git</Link>
        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#menu" aria-controls="menu"
            aria-expanded="false" aria-label="Toggle navigation"></button>
        <div className="collapse navbar-collapse" id="menu">
            <form className="form-inline my-2 my-lg-0 ml-auto">
                <input className="form-control mr-sm-2" type="text" placeholder="Search" value={search} onChange={handleSearchUpdate}></input>
                <button className="btn btn-outline-light my-2 my-sm-0" type="submit" onClick={handleSearch}>Search</button>
            </form>
        </div>
</nav>)
}

export default Nav