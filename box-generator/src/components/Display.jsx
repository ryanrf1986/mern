import React from 'react'

const Display = (props) => {

    const {allColors} = props

    return (
    <div style={{display: 'flex', flexwrap: 'wrap', justifyContent: 'space-evenly'}}>
        {/* <legend>Display.jsx</legend> */}
        {
            allColors.map((color, index) => {
                return(
                    <div key={index}>
                        <p style={{backgroundColor: color, width:"125px", height:"125px"}}></p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Display