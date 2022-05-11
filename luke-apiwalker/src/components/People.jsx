import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "./Form";
import { useParams } from "react-router-dom";

const GetPeople = () => {
    const { id } = useParams();
    const [apiState, setAPIState] = useState();

    useEffect(() => {
        axios
        .get(`https://swapi.dev/api/people/${id}`)
        .then((successResponse) => {
            setAPIState(successResponse.data.results);
        })
        .catch((errorResponse) => console.log("ERROR", errorResponse));
    }, []);

    return (
        <fieldset>
            <legend>FetchPeople.jsx</legend>
            {apiState ? <h1>apiState.name</h1> : null}
        </fieldset>
    );
};



export default People
