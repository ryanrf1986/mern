import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Display from './People'
import fetchPeople from './People'
import {Outlet, useNavigate} from 'react-router-dom'

const Search = () => {
    const navigate = useNavigate()

    const [category, setCategory]= useState("people");
    const [id, setId]= useState();

    const submitHandler = (e) =>{
        e.preventDefault();
        navigate(`/${category}/${id}`)

    }


    return(
        <div>
            <form onSubmit={submitHandler}>
                Search for: 
                <select onChange={(event) => setCategory(event.target.value)}  name="category" id="">
                    <option value="planets">Planets</option>
                    <option value="people">People</option>
                </select>
                <label>
                    Id:
                    <input onChange={(event) => setCategory(event.target.value)} type="number" name="index"/>
                </label>
                <button>Search</button>
            </form>
            <Outlet/>
        </div>
    )
}

export default Form