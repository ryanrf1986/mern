import "./App.css";
import React, { useState } from "react";
import axios from "axios";

const Main = (props) => {
    const [apiState, setAPIState] = useState([]);

    const pokemonHandler = () => {
    // fetch("https://pokeapi.co/api/v2/pokemon/?limit=807")
    //     .then(response => response.json())
    //     .then(response => setPeople(response.results))
        axios.get("https://pokeapi.co/api/v2/pokemon/?limit=807")
            .then((successResponse) => {
            console.log("SUCCESS", successResponse.data.results);
            setAPIState(successResponse.data.results);
        })
        .catch((errorResponse) => console.log("ERROR", errorResponse));
    };

    return (
    <fieldset style={{ textAlign: "center" }}>
        <div>
            <legend>App.js</legend>
            <button onClick={pokemonHandler}>Fetch Pokemon</button>
              {
                apiState &&
                
                apiState.map(poke => {
                    return(
                      <h1>{poke.name}</h1>
                  )
                })
                
              }
        </div>
    </fieldset>
    );
};
export default Main