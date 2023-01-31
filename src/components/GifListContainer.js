import React,{ useEffect, useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";
import "bootstrap/dist/css/bootstrap.css";
import './App.css';


const API = `https://api.giphy.com/v1/gifs/trending?api_key=DCAQNHcZK0h3uLSMMKxWad2YPGQJ7Yia&limit=6&rating=g`


function GifListContainer() {

    const [giphy, setGiphy] = useState([])

    useEffect( () => {
        fetch(API)
        .then(response => response.json())
        .then((item) => {
           setGiphy(() => item.data.map((gif) => gif.images.original.url))
        })
    }, [])



    function handleSearches(query) {
        const SEARCH_API = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=DCAQNHcZK0h3uLSMMKxWad2YPGQJ7Yia&limit=6&rating=g`
        fetch(SEARCH_API)
        .then(response=>response.json())
        .then(item=>{
            setGiphy(() => item.data.map((gif) => gif.images.original.url))
        })
    }

    
    return (
       <div className="container">
        
        <div>
            <GifList giphy={giphy}/>
        </div>
        <div id="search">
            <GifSearch handleSearches={handleSearches}/>
        </div>
       </div>
    )
}

export default GifListContainer