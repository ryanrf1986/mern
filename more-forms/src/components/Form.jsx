import React, { useState } from  'react';
    
    
const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");  
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
// Validation
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const firstNameHandler =(event) => {
        setFirstName(event.target.value);
        if (event.target.value.length>0){
            if (event.target.value.length < 2){
                setFirstNameError("First Name must be at least 2 characters")
            }
            else {
                setFirstNameError("")
            }
        }
        else {
            setFirstNameError("")
        }
    }

    const lastNameHandler = (event) => {
        setLastName(event.target.value);
        if (event.target.value.length>0){
            if (event.target.value.length < 2){
                setLastNameError("Last Name must be at least 2 characters")
            }
            else {
                setLastNameError("")
            }
        }
        else {
            setLastNameError("")
        }

    }

    const emailHandler = (event) => {
        setEmail(event.target.value);
        if (event.target.value.length>0){
            if (event.target.value.length < 2){
                setEmailError("Email must be at least 2 characters")
            }
            else {
                setEmailError("")
            }
        }
        else {
            setEmailError("")
        }
    }

    const passwordHandler = (event) => {
        setPassword(event.target.value);
        if (event.target.value.length>0){
            if (event.target.value.length < 8){
                setPasswordError("Password must be at least 8 characters")
            }
            else {
                setPasswordError("")
            }
        }
        else {
            setPasswordError("")
        }
    }


    const confirmHandler = (event) => {
        setConfirmPassword(event.target.value);
        if (event.target.value !== password){
            setConfirmPasswordError("Password must match");
        }
        else{
            setConfirmPasswordError("")
        }

    }
    
    return(
        <div>
            <p>First Name:
                <input onChange={firstNameHandler} type="text" name="firstName"/>
            
                {firstNameError ? <p style={{color:'red'}}>{firstNameError}</p> : null}
            
            </p>
            <p>Last Name:
                <input onChange={lastNameHandler} type="text" name="lastName"/>

                {lastNameError ? <p style={{color:'red'}}>{lastNameError}</p> : null}
            </p>
            <p>Email:
                <input onChange={emailHandler} type="text" name="Email"/>

                {emailError ? <p style={{color:'red'}}>{emailError}</p> : null}
            </p>
            <p>Password:
                <input onChange={passwordHandler} type="password" name="password"/>

                {passwordError ? <p style={{color:'red'}}>{passwordError}</p> : null}
            </p>
            <p>Confirm Password:
                <input onChange={confirmHandler} type="password" name="confirmPassword"/>

                {confirmPasswordError ? <p style={{color:'red'}}>{confirmPasswordError}</p> : null}
            </p>
        </div>
    );
};
    
export default Form;