import React, { useState } from  'react';

const Form = (props) => {
    const [color, setColor] = useState("");
    

    const submitHandler = (event) => {
        event.preventDefault();
        props.addColor(color);
        setColor("")
    }
    const inputHandler = (event) => {
        setColor(event.target.value)

    }

    return (
        <div style={{textAlign: 'center'}}>
            {/* <legend>Form.jsx</legend> */}
            <form onSubmit={submitHandler}>
                <p>
                    Color:
                    <input onChange={inputHandler} type="text" name="color" value={color}/>
                <button >Add</button>
                </p>
            </form>
        </div>
    )
}

export default Form