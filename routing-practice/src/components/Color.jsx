import React from "react";
import { useParams } from "react-router";

const Color = () => {
    const { word, color, bgColor } = useParams();

    return <h1 style={{textAlign:'center', color:color, backgroundColor: bgColor}}>{word}</h1>;
};

export default Color;