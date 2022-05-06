import './App.css';
import React, { useState } from "react";
import Form from './components/Form';
import Display from './components/Display';

function App() {
    // OUR 'DATABASE' INFORMATION

    // ------------------ BOX GEN -----------------//
    // COLORS STATE
    
    const [colors, setColors] = useState([])
    // const [dimensions, setDimensions] = useState([])

    // CREATE A FUNCTION THAT HANDLES ADDING A COLOR
    const addColor = (newColor) => {
        // ADD newColor TO THE LIST OF COLORS
        setColors([...colors, newColor,])
        // setDimensions([...dimensions, newDimensions])
    }

    return (
        <div>
            {/* <legend>App.js</legend> */}
            {/* {
                users.map((person, index) => <PersonCard key={index} user={person} />)
            } */}
            <Form addColor={addColor}/>
            <Display allColors={colors}/>
        </div>
    );
}

export default App;