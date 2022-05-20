import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Dashboard =(props) => {
    const [authors, setAuthors] =useState([]);
    const {refreshState, refresh} = props

    useEffect(() => {
        axios.get('http://localhost:8000/api/author')
        .then((res) => {
            console.log(res.data)
            setAuthors(res.data);
        })
        .catch((err) => console.log(err))
    }, [refreshState]);

    const deleteHandler = (author_id) => {
        axios.delete('http://localhost:8000/api/author/'+author_id)
        .then((res) => {
            console.log("Its Gone(deleted)")
            refresh();
        })
        .catch((err) => console.log(err))
    }

    return(
        <div>
            <h1>Favorite Authors</h1>
            <div>
                <Link to={"/new"}>
                    <h3>
                        Add an Author
                    </h3>
                </Link>
                <h2>We have quotes by:</h2>
                <table>
                    <tr>
                        <th>Author</th>
                        <th>Actions available</th>
                    </tr>
                    {
                        authors.map((author, index) => {
                            return (
                                <tr>
                                    <td key={index}>
                                        <Link to={"/" + author._id}>
                                        <h2>{author.name}</h2>
                                        </Link>
                                    </td>
                                    <td>
                                        <Link to={"/" + author._id + "/edit"}>
                                        <button>Edit</button>
                                        </Link>
                                        <button onclick={(e)=>{deleteHandler(author._id)}}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        </div>
    )
}


export default Dashboard