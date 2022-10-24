import React from 'react'
import { loginUser } from '../config/firebasemethods';
import {Box, TextField ,Button } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {Container,Grid,Typography} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export default function Login() {
  let[email,setEmail] = useState("");
  let[password,setPassword] = useState("");
  let navigate= useNavigate();
  let login=()=>{
    loginUser({email,password})
    .then((success) => {
   console.log(success)
   navigate('/Todo' , {
    state : success
   })
    })
    .catch((error) => {
    console.log(error)
    });
  }

  return (
<Container maxWidth="md">
<Grid  container >
<Grid item md={3} lg={3} sm={12} xs={12}></Grid>
<Grid item md={6} lg={6} sm={12} xs={12} sx={{ marginY : "80px" ,padding:"20px" ,backgroundColor:"white", boxShadow : "5px 5px 50px lightgrey", borderRadius:"10px" }} >
    <div style={{textAlign:"center" }}>
      <div>
      <AccountCircleIcon sx={{fontSize:"140px"}}></AccountCircleIcon>
      </div>
      <Typography variant="h4" component="div">Login</Typography>
    <Box sx={{margin:"10px"}}>
     <TextField onChange={(e)=>setEmail(e.target.value)} type="text" label="Email" variant='standard' ></TextField>
     </Box>
     <Box sx={{margin:"10px"}}>
     <TextField onChange={(e)=>setPassword(e.target.value)} type="password" label="Password" variant='standard' ></TextField>
   </Box>
     <Button  sx={{ margin:"20px"}} onClick={login} variant='contained'>Login</Button>
   </div>
   </Grid>
   </Grid>
   </Container>
  )
}
