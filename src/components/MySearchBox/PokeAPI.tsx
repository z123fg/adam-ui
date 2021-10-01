import React, { useState, useEffect } from "react";
import axios from "axios";


const BASEURL = "https://pokeapi.co/api/v2/pokemon/?limit=100";

const PokeAPI = () => {
    const [pokeData, setPokeData] = useState([]);

    useEffect(() => {
        axios.get(BASEURL)
            .then((response) => {
                let result = response.data.results
                console.log(result)
                setPokeData(result)
            })
            .catch((error: any) => {
                console.log(error)
            })
    }, [])

    console.log(typeof pokeData)

    return(
        <>  
            <div>{pokeData.map((v:any) => v.name)}</div>
        </>
    )
};

export default PokeAPI;

