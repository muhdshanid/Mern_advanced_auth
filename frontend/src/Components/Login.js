import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { authActions } from '../store';
const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const sendRequest = async () =>{
        const res =await axios.post("http://localhost:5000/api/login",{
            email:inputs.email,
            password:inputs.password
        }).catch((err)=> console.log(err))
        const data = await res.data;
        return data
    }
    const handleSubmit = (e) => {
        e.preventDefault();
       // console.log(inputs);
        // send http request
        sendRequest().then(() => dispatch(authActions.login())).then(() => navigate("/user"))
    }
    const [inputs, setInputs] = useState({
        email:"",
        password:""
    })
    const handleChange = (e) => {
        setInputs((prev) => ({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }
  return (
    <div>
       
        <form onSubmit={handleSubmit} action="">
            <Box marginLeft={"auto"} marginRight="auto" width={"300px"} display={"flex"} 
            justifyContent='center' alignItems={"center"} flexDirection='column'>
                 <Typography variant='h2'>Login</Typography>
                <TextField name='email' onChange={handleChange} type={"email"} value={inputs.email} variant='outlined' placeholder='Email'  margin='normal'/>
                <TextField name='password' onChange={handleChange} type={"password"} value={inputs.password} variant='outlined' placeholder='Password'  margin='normal'/>
                <Button variant='contained' type='submit'>Login</Button>
            </Box>
        </form>
    </div>
  )
}

export default Login