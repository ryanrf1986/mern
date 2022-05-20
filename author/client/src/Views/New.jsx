import React, {useState} from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'

const New = () => {
    const [name, setName] = useState("")
    const [err,setErr]= useState([])
    const navigate = useNavigate()
    const [errorObj, setErrorObj]= useState({})
    
    const submitHandler = (e) =>{
        e.preventDefault();
        const authObj ={
            name
        };
        axios.post("http://localhost:8000/api/author/new", authObj)
        .then((res) =>{
            console.log(res);
            navigate("/")
        })
        .catch((err) =>{
            console.log(err)
            setErrorObj(err.response.data.errors)
        })
        };

        return (
            <div style={{textAlign:'center'}}>
                <h1>Favorite Authors</h1>
                <Link to={"/"}>
                    <h3>Home</h3>
                </Link>
                <h2>Add a new author:</h2>
                <form onSubmit={submitHandler}>
                    <p>Name:
                    <input type='text' name="name" onChange={(e)=> setName(e.target.value)} value={name} />
                    </p>
                    {
                        errorObj.name
                        &&
                        <small style={{color:'red'}}>{errorObj.name.message}</small>
                    }
                    <button style={{color:'white', backgroundColor:'blue'}}>Submit</button>
                    <button onClick={()=>navigate("/")}>Cancel</button>
                </form>
            </div>
        )
}

export default New