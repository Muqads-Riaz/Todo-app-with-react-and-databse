import React from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate();
  let moveToSignUp =()=>{
navigate('/signUp')
  }
  let moveToLogin =()=>{
navigate('/login')
  }

  return (
    <div>
    <div style={{textAlign:"center" , marginTop:"100px"}}>
      <img src="data:image/jpeg;base64,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"></img>
    </div>
    <div style={{textAlign:"center"}}>
    <Button onClick={moveToSignUp} sx={{ margin:"10px"}} variant="contained">Sign Up</Button>
    <Button onClick={moveToLogin}  sx={{ margin:"10px"}} variant="contained">Login in</Button>
    </div>
    </div>

  )
}
