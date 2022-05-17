import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link, useParams, useNavigate} from 'react-router-dom'

const Detail =() => {
    const [product, setProduct] = useState()
    const {product_id}= useParams()
    const navigate = useNavigate()

    useEffect(() =>{
        axios.get(`http://localhost:8000/api/products/${product_id}`)
        .then(res => setProduct(res.data))
        .catch(err => console.log(err))
    }, [])

    const deleteHandler = (id) => {
        axios.delete("http://localhost:8000/api/products/" +id)
        .then (res => navigate("/"))
        .catch (err => console.log(err))
    }

    return(
        <fieldset>
            <legend>Detail.jsx</legend>
            {
            (product) ?
                <div>
                    <h1>Tile: {product.title}</h1>
                    <h1>Price: {product.price}</h1>
                    <h1>Description: {product.description}</h1>
                    <Link to={"/" + product._id + "/edit"}>
                    Edit
                    </Link>
                    <button onClick={(e)=> deleteHandler(product._id)}>Delete</button>
                </div> : <h1>Loading...</h1>
            }
        </fieldset >
    )
}

export default Detail