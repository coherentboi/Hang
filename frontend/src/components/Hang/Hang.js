/*
Author: Ethan Qiu
Filename: Hang.js
Last Modified: June 7, 2023
Description: Display details of Hang
*/

import React, {useEffect} from "react";
import {Route, Routes, useNavigate} from "react-router-dom";

import Hangs from "./Hangs/Hangs";
import Create from "./Create/Create";
import Join from "./Hangs/Join/Join";

//Hang component
const Hang = ({currentPage, setCurrentPage}) => {

    //Define navigation variable
    const navigate = useNavigate();

    //On render
    useEffect(() => {
        //If not logged in, go to auth
        if(JSON.parse(localStorage.getItem("profile")) === null){
            navigate("/auth");
        }
    }, [localStorage.getItem("profile")]);

    //Render components
    return (
        <Routes>
            <Route path="/" element={<Hangs currentPage={currentPage} setCurrentPage={setCurrentPage}/>}/>
            <Route path="/create" element={<Create currentPage={currentPage} setCurrentPage={setCurrentPage}/>}/>
            <Route path="/join" element={<Join/>}/>
        </Routes> 
    );
}

export default Hang;