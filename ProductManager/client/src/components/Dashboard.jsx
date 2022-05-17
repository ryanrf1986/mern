import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from "react-router-dom"


const Dashboard = (props) => {
  const [allProducts, setAllProducts] = useState([]);
  const {refreshState, refresh} = props;

  useEffect(() => {
    axios.get("http://localhost:8000/api/products")
      .then(res=> setAllProducts(res.data))
        // console.log("SUCCESS", successResponse.data.results);
        // setAPIState(successResponse.data.results)
        .catch((err => console.log(err)))
  }, [refreshState])

  const deleteHandler = (id) => {
    axios.delete("http://localhost:8000/api/products/" +id)
    .then (res => refresh())
    .catch (err => console.log(err))
}

  return (
    <fieldset style={{ textAlign: 'center' }}>
        <legend>Dashboard.jsx</legend>
        {
          allProducts.map((product, index) =>{
            return(
              <div key ={index}>
                <Link to ={"/" + product._id}>
                  <h1>{product.title}</h1>
                </Link>
                <Link to={"/" + product._id + "/edit"}>
                  <p>Edit</p>
                </Link>
                <button onClick={(e)=> deleteHandler(product._id)}>Delete</button>
              </div>
            )
          })
        }

    </fieldset>
  )
}

export default Dashboard
