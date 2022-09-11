import React from 'react'
import '../css/Login.css';
import digitalpalikalogoicon from "../icons/digital_palika.png"
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {useDispatch } from 'react-redux';
import { login } from '../features/user/userSlice';
import Alert from "../components/Alert"

export default function Login() {
    const dispatch = useDispatch()
    const[userData,setUserData]=useState({
        userName:"admin@admin.com",
        password:"admin123",
        role:"admin",
        name:"Prajjwal"
    })
    const [alert, setAlert] = useState({
        status: "",
        message: ""
    });

    const handleChange=(e)=>{
        setUserData({...userData, [e.target.name]:e.target.value})
    }
    function handleSubmit(e) {
        e.preventDefault();
        if(userData.userName===""||userData.password===""){
            setAlert({
                status: "danger",
                message: "please enter all credentials"
            })
        }
        else{

            dispatch(login(userData))
        }
        
    }
  return (
    
       <div class="wrapper">
        <div class="logo">
            <img src={digitalpalikalogoicon} alt=""/>
        </div>
        <div class="text-center mt-2 name">
        डिजिटल पालिका
        </div>
        {
                    alert.message
                    &&
                    <Alert
                        status={alert.status}
                        message={alert.message}
                    />
                }
        <form class="p-3 mt-3">

            <div class="form-field d-flex align-items-center">
                <span class="far fa-user"></span>
                <input type="text" name="userName" id="userName" placeholder="प्रयोगकर्ताको नाम​" value={userData.userName} onChange={handleChange}/>
            </div>
            <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <input type="password" name="password" id="pwd" placeholder="पासवर्ड"  value={userData.password} onChange={handleChange}/>
            </div>
            <button class="btn mt-3" onClick={handleSubmit}>लगइन</button>
        </form>
        <div class="text-center fs-6">
            <Link to="forgetpassword">पासवर्ड बिर्सनुभयो?</Link>
        </div>
    </div>
   
  )
}
