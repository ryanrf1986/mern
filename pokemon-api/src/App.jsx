import "./App.css";
import React, { useState } from "react";
import axios from "axios";

const Main = (props) => {
  const [apiState, setAPIState] = useState([]);

  const pokemonHandler = () => {
    // fetch("https://pokeapi.co/api/v2/pokemon/?limit=807")
    //     .then(response => response.json())
    //     .then(response => setPeople(response.results))
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=807")
      .then((successResponse) => {
        console.log("SUCCESS", successResponse.data.results);
        setAPIState(successResponse.data.results);
      })
      .catch((errorResponse) => console.log("ERROR", errorResponse));
  };

    return (
        <div className="container">
        <div className="row mt-3 justify-content-center">
            {/* <legend>App.js</legend> */}
            <div className="col-6">
            <button className="btn btn-primary mb-3" onClick={pokemonHandler}>
                Fetch Pokemon
            </button>
            <table className="table table-striped table-hover">
                <tbody>
                    {apiState &&
                    apiState.map((poke, index) => {
                        return (
                        <h1>
                            <tr>

                        </h1>
                            <td key={index}>{poke.name}</td>
                        </tr>
                        );
                    })}
                </tbody>
            </table>
            </div>
        </div>
        </div>
    );
};
export default Main;
