import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from "react-router-dom"


const Dashboard = (props) => {
  const [allProducts, setAllProducts] = useState([]);
  const {refreshState} = props;

  useEffect(() => {
    axios.get("http://localhost:8000/api/products")
      .then(res=> setAllProducts(res.data))
        // console.log("SUCCESS", successResponse.data.results);
        // setAPIState(successResponse.data.results)
        .catch((err => console.log(err)))
  }, [refreshState])

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
              </div>
            )
          })
        }

    </fieldset>
  )
}

export default Dashboard
