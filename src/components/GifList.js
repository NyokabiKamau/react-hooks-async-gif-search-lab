
import React,{} from "react";

function GifList({giphy}){

    const gifList = giphy.map((gif,index)=>(
        <li key={`giphy_` + index} >
            <img src={gif} alt="giphy" />
        </li>
    ))

    return(
        <ul >
            {gifList}
        </ul>
    )
}

export default GifList