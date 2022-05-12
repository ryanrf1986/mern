import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "./Form";
import { useParams } from "react-router";

const Planets = () => {
    const { id } = useParams();
    const [apiState, setAPIState] = useState();
    const [err, setErr] = useState(null)
    
    
    useEffect(() => {
        axios
        .get(`https://swapi.dev/api/planets/${id}`)
        .then((successResponse) => {
            console.log(successResponse.data)
            setAPIState(successResponse.data);
            setErr(null)
        })
        .catch(err => {
            setAPIState("")
            setErr("these are not the droids you are looking for")
        })
    }, [id]);

    
    const showPlanets = () => {
    return (
        <div style={{textAlign:'center'}}>
            {apiState ?
                <div> 
                    <h1>{apiState.name}</h1>
                    <p>  <strong>  Climate:  </strong>  {apiState.climate}</p>
                    <p>  <strong>  Terrain:  </strong>  {apiState.terrain}</p>
                    <p>  <strong>  Surface Water:  </strong>  {apiState.surface_water}</p>
                    <p>  <strong>  Population:  </strong>  {apiState.population}</p>
                </div>
            : <h1>Loading...</h1>
            }
        </div>
        );
    };

    const showError = () => {
        return (
            <div>
                <p>{err}</p>
                <img src="https://static.independent.co.uk/2020/09/13/13/ewan-mcgregor-star-wars-1.jpg?quality=75&width=982&height=726&auto=webp"/>
            </div>
        )
    }


    return (
        <div>
            {/* <legend>People.jsx</legend> */}
            {
                err ?
                    showError() : showPlanets()
            }
        </div>
    )
}

export default Planets
