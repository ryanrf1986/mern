import React from "react";
import { useParams } from "react-router";

const Number = () => {
  const { num } = useParams();
  let content;

  console.log(`Num is ${num}, with type ${typeof num}`);
  isNaN(num) ? content=`The word is: ${num}` : content=`The number is: ${num}`;

  return <h1 style={{textAlign:'center'}}>{content}</h1>;
};

export default Number;