import "./App.css";
import React, { useState } from "react";
import axios from "axios";

const Main = (props) => {
    const [apiState, setAPIState] = useState([]);

    const pokemonHandler = () => {
    // fetch("https://pokeapi.co/api/v2/pokemon/?limit=807")
    //     .then(response => response.json())
    //     .then(response => setPeople(response.results))
        axios.get("https://pokeapi.co/api/v2/pokemon/?limit807")
            .then((successResponse) => {
            console.log("SUCCESS", successResponse.data);
            setAPIState(successResponse.data);
        })
        .catch((errorResponse) => console.log("ERROR", errorResponse));
    };

    return (
    <fieldset style={{ textAlign: "center" }}>
        <div>
            <legend>App.js</legend>
            <button onClick={pokemonHandler}>Fetch Pokemon</button>
            {/* {people.length > 0 && people.map((person, index)=>{
            return (<li key={index}>{index}: {person.name}</li>)
            })} */}
            {/* {
            apiState &&
            <>
            <h1>Name: {apiState.name}</h1>
            <h1>Location: {apiState.location}</h1>
            <h1>Bio: {apiState.bio}</h1>
            </>
            } */}

            {apiState ? (
            <>
                <h1>Name: {apiState.name}</h1>
                <h1>Location: {apiState.location}</h1>
                <h1>Bio: {apiState.bio}</h1>
            </>
            ) : (<h1>Loading.....</h1>)}
        </div>
    </fieldset>
    );
};
export default Main;
