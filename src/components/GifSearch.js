import React,{ useState } from "react";


function GifSearch({handleSearches}){

    const [search, setSearch] = useState("");

    function handleSubmit(e) {
            e.preventDefault()
            handleSearches(search, setSearch)
        }
    function handleSearch(e) {
        setSearch(()=>e.target.value)
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="searchBar">Search Gifs</label>
            <input id="searchBar" placeholder="Search..." className="form-control" onChange={handleSearch} value={search} />
            <button type="submit" className="btn btn-success">Search</button>
        </form>
    )
}

export default GifSearch