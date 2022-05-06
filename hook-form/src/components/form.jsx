import React, { useState } from  'react';
    
    
const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");  
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    
    
    return(
        <div>
            <p>First Name:
                <input onChange={(e) => setFirstName(e.target.value)} type="text" name="firstName"/>
            </p>
            <p>Last Name:
                <input onChange={(e) => setLastName(e.target.value)} type="text" name="lastName"/>
            </p>
            <p>Email:
                <input onChange={(e) => setEmail(e.target.value)} type="text" name="Email"/>
            </p>
            <p>Password:
                <input onChange={(e) => setPassword(e.target.value)} type="password" name="password"/>
            </p>
            <p>Confirm Password:
                <input onChange={(e) => setConfirmPassword(e.target.value)} type="password" name="confirmPassword"/>
            </p>
            <h2> Your Form Data</h2>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {password}</p>
        </div>
    );
};
    
export default Form;