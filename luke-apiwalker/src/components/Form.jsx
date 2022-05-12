import React, {useEffect, useState} from 'react';
import axios from 'axios';
import People from './People'
import {Outlet, useNavigate} from 'react-router-dom'
import Planets from './Planets'

const Form = () => {
    
    const [category, setCategory]= useState("people");
    const [id, setId]= useState();
    const navigate = useNavigate()

    const submitHandler = (e) =>{
        e.preventDefault();
        navigate(`/${category}/${id}`)

    }


    return(
        <div style={{textAlign:'center', marginTop:'25px'}}>
            <form onSubmit={submitHandler}>
                <strong>Search for:  </strong>
                <select name="category" id="" onChange={(event) => setCategory(event.target.value)}  >
                    <option value="planets">Planets</option>
                    <option value="people">People</option>
                </select>
                <label style={{marginLeft: '20px'}}>
                    <strong>       Id:   </strong>
                    <input type="numbers" name="id" onChange={(event) => setId(event.target.value)} />
                </label>
                <button style={{backgroundColor:'blue', color:'white', borderRadius:'10px', marginLeft:'10px'}}>Search</button>
            </form>
            <Outlet/>
        </div>
    )
}

export default Form