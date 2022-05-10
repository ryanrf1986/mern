import React, {useState}from 'react';
import axios from 'axios'

const MainUseEffect = (props) => {
    const [apiState, setAPIState] = useState();

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/?limit807")
            .then(successResponse => {
            console.log("SUCCESS", successResponse.data)
            setAPIState(successResponse.data)
        })
            .catch(errorResponse => console.log("Error", errorResponse))
    }, [apiState])

    return (
        <fieldset style={{textAlign:'center'}}>
            <div>
                <legend>Main.jsx</legend>
                {/* {TERNARY OPERATOR} */}
                {apiState ? (
                    <>
                        <h1>Name: {apiState.name}</h1>
                        <h1>Location: {apiState.location}</h1>
                        <h1>Bio: {apiState.bio}</h1>
                    </>
                    ) : (<h1>Loading.....</h1>)
                }
            </div>
        </fieldset>
    )
}
export default MainUseEffect;