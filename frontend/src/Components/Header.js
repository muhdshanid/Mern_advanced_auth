import React, { useState } from 'react'
import {AppBar,Tabs, Tab, Toolbar, Typography} from '@mui/material'
import { Box } from '@mui/system'
import {Link} from  'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { authActions } from '../store'
axios.defaults.withCredentials = true
const Header = () => {
    const dispatch =useDispatch()
    const isLoggedIn = useSelector((state) => state.isLoggedIn)
    //console.log(isLoggedIn);
    const [value, setValue] = useState()
    const sendLogoutRequest = async() => {
        const res = await axios.post("http://localhost:5000/api/logout",null,{
            withCredentials:true
        });
        if(res.status === 200){
            return res
        }
        return new Error("unable to logout please try again")
    }
    const handleLogout = () => {
        sendLogoutRequest().then(() =>dispatch(authActions.logout()))
    }
  return (
    <div>
        <AppBar position='sticky'>
            <Toolbar>
                <Typography variant='h3'>
                    MernAuth
                </Typography>
                <Box sx={{marginLeft:"auto"}}>
                    <Tabs indicatorColor='secondary' onChange={(e,val)=>setValue(val)} value={value} textColor='inherit'>
                     {!isLoggedIn &&  <><Tab LinkComponent={Link} to="/login" label='Login'/>
                        <Tab  LinkComponent={Link} to="/signup" label='Signup'/> </> }
                       {isLoggedIn && <Tab  onClick={handleLogout} LinkComponent={Link} to="/" label='Logout'/>}
                    </Tabs>
                </Box>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Header