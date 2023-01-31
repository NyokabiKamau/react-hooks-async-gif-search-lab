import React,{ useEffect, useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";
import "bootstrap/dist/css/bootstrap.css";
import './App.css';


const API = "https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=DCAQNHcZK0h3uLSMMKxWad2YPGQJ7Yia&rating=g"


function GifListContainer() {

    const [giphy, setGiphy] = useState([])

    useEffect( () => {
        fetch(API)
        .then(response => response.json())
        .then((item) => {
           setGiphy(() => item.data.map((gif) => gif.images.original.url))
        })
    }, [])



    function handleSearches(text, setText) {
        let query = text
        const SEARCH_API = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=DCAQNHcZK0h3uLSMMKxWad2YPGQJ7Yia&limit=3&rating=g`
        fetch(SEARCH_API)
        .then(response=>response.json())
        .then(item=>{
            setGiphy(() => item.data.map((gif) => gif.images.original.url))
        })

        setText(()=>"")
    }

    
    return (
       <div className="container">
        <div>
            <GifList giphy={giphy}/>
        </div>
        <div id="search">
            <GifSearch handleSearch={handleSearches}/>
        </div>
       </div>
    )
}

export default GifListContainer

