import React, {useState} from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'

const Edit = () => {
    const [name, setName] = useState("")
    const [err,setErr]= useState([])
    const navigate = useNavigate()
    const [errorObj, setErrorObj]= useState({})
    
    const submitHandler = (e) =>{
        e.preventDefault();
        const authObj ={
            name
        };
        axios.post("http://localhost:8000/api/author/edit", authObj)
        .then((res) =>{
            console.log(res);
            navigate("/")
        })
        .catch((err) =>{
            const errorResponse= err.response.data.errors;
            const errorArr = [];
            const errorObj = {};
            for (const key of Object.keys(errorResponse)) {
                errorArr.push(errorResponse[key].message)
                errorObj[key] = errorResponse[key].message
            }
            console.log(errorObj)
            setErr(errorArr)
            setErrorObj(errorObj)
        })
        };

        return (
            <div style={{textAlign:'center'}}>
                <h1>Favorite Authors</h1>
                <Link to={"/"}>
                    <h3>Home</h3>
                </Link>
                <h2>Edit this author:</h2>
                <form onSubmit={submitHandler}>
                    <p>Name:
                    <input type='text' name="name" onChange={(e)=> setName(e.target.value)} value={name} />
                    </p>
                    <button onClick={()=>navigate("/")}>Cancel</button>
                    <button style={{color:'white', backgroundColor:'blue'}}>Submit</button>
                </form>
            </div>
        )
}

export default Edit