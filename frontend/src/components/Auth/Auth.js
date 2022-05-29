import React from "react";
import { useState } from "react";
import { ReactDOM } from "react";
import './Auth.css';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';

import { login, signup } from "../../actions/login.js";

const initialState = {username: "", email: "", password: "", password1: "", password2: ""};

const Auth = (props) => {

    const dispatch = useDispatch();
    const history = useNavigate();

    const [inputs, setInputs] = useState(initialState);
    const [isSignup, setIsSignup] = useState(false);


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name] : value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if(isSignup){
            dispatch(signup(inputs, history));
        }
        else{
            dispatch(login(inputs, history));
        }
    }

    const switchMode = () => {
        setInputs(initialState);
        setIsSignup((prevIsSignup) => !prevIsSignup);
    }

    const googleSuccess = async(res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;

        try{
            dispatch({type: Auth, data: {result, token}});
            
            history('/');
        } catch (error){
            console.log(error);
        }
    };

    const googleError = () => alert('Google login was unsuccessful. Try again later');

    return(
        <div>
            <form onSubmit={handleSubmit} class = "signin-form">
            {
                isSignup && (
                    <label>
                        Username:
                        <input 
                            type="text" 
                            name="username" 
                            value={inputs.username || ""} 
                            onChange={handleChange} />
                    </label>
                )
            }
            <label>
                Email:
                <input
                    type="text"
                    name="email"
                    value={inputs.email || ""}
                    onChange = {handleChange}
                />
            </label>
            {
                !isSignup && (
                    <label>
                        Password:
                        <input
                            type="password"
                            name="password"
                            value={inputs.password || ""}
                            onChange = {handleChange}
                        />
                    </label>
                )
            }
            {
                isSignup && (
                    <label>
                        Password:
                        <input 
                            type="password" 
                            name="password1" 
                            value={inputs.password1 || ""} 
                            onChange = {handleChange} 
                        />
                    </label>
                )
            }
            {
                isSignup && (
                    <label>
                        Confirm Password:
                        <input 
                            type="password" 
                            name="password2" 
                            value={inputs.password2 || ""} 
                            onChange = {handleChange} 
                        />
                    </label>
                )
            }
            <button type="submit">{isSignup ? 'Sign Up' : "Login"}</button>
            </form>
            <button onClick={switchMode}>
                {isSignup ? 'Already have an account? Log in!' : "Don't have an account? Sign Up!"}
            </button>
        </div>
    );

}

export default Auth;