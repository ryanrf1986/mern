import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';


const Example = (props) => {
  const [people, setPeople] = useState([]);

  const pokemonHandler = () => {
      fetch("https://pokeapi.co/api/v2/pokemon/?limit=807")
          .then(response => response.json())
          .then(response => setPeople(response.results))
      // axios.get("https://pokeapi.co/api/v2/pokemon/?limit807")
      //     .then(successResponse => console.log("SUCCESS", successResponse.data))
      //     .catch(errorResponse => console.log("Error", errorResponse))
  };

  return (
    <fieldset style={{textAlign:'center'}}>
      <div>
        <legend>App.js</legend>
        <button onClick={pokemonHandler}>Fetch Pokemon</button>
        {people.length > 0 && people.map((person, index)=>{
          return (<li key={index}>{index}: {person.name}</li>)
        })}
      </div>
    </fieldset>
  );
}
export default Example;
