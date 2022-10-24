
import React, { useEffect } from 'react'

import {useState} from "react";
import { Button ,Container , Grid , Box, Typography} from '@mui/material';
import { sendTodos } from '../config/firebasemethods';
import {set, getDatabase,ref,onValue } from "firebase/database";
import {TextField }from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';



function Todo() {
const location = useLocation();
let navigate = useNavigate();
const db = getDatabase();
let[text,setText] =useState("");
let[list,setList] =useState([]);
let[key,setKey] =useState([]);
let[date , setDate] = useState("")
let [uid , setUid] = useState();
 useEffect(()=>{
if(location.state && location.state.uid){
  setUid(location.state.uid)
} else{
  navigate('/')
}
 },[])

let getTodos = (uid)=>{
  const starCountRef = ref(db, `todos/${uid}`);
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    setList([...Object.values(data)])
    setKey([...Object.keys(data)])

    
  });
}
console.log(date)
console.log(list)
useEffect(()=> {
  getTodos(uid);
},[uid])

let add = () =>{
sendTodos({text ,date:new Date().getHours()+ ":" + new Date().getMinutes()} ,uid );
  setText("");
};
let deleteItem = (key,index) =>{
    set(ref(db, `todos/${uid}/` + key ), {value: null})
  list.splice(index,1)
  setList([...list])

};
let editItem = (text,key ,index) =>{
  let newValue = prompt("Edit the text", text);
  set(ref(db, `todos/${uid}/` + key), {text: newValue})
  list[index] = {text: newValue , date :new Date().getHours()+ ":" + new Date().getMinutes()};
  setList([...list])
  
};
let deleteAll = () =>{
set(ref(db, `todos/${uid}`), {text: null})
  setList([]);
};
  return (
    <Container maxWidth="lg">
    <Grid  container >
    <Grid item md={3} lg={3} sm={12} xs={12}></Grid>
    <Grid item md={6} lg={6} sm={12} xs={12} sx={{ marginY : "50px" ,padding:"20px" ,backgroundColor:"white", boxShadow : "5px 5px 50px lightgrey", borderRadius:"10px" }} >
    <div style={{textAlign:"center"}}>
      <Typography m={3} variant = "h5"> Welcome {location.state.userName}</Typography>
    <TextField value = {text} fullWidth onChange={(e) => {
     setText(e.target.value);
    }}></TextField>
    <Box>
    <Button sx={{ marginTop:"20px"}}  variant="contained" onClick={add}>Add</Button>
    </Box>
    <Box>
    <Button sx={{ margin:"10px"}}  variant="contained" onClick={deleteAll}>Delete All</Button>
    </Box>
    <ul>
      {
list.map((e,i) => {
return <li style={{backgroundColor:"lightGrey",borderRadius:"5px", padding:"10px",marginTop:"10px"}} key= {key[i]} className= "list">{e.text}<span style={{margin:"20px"}}>{e.date}</span><EditIcon  variant="contained"   onClick={()=>editItem(e.text,key[i],i)}>Edit</EditIcon><DeleteIcon variant="contained"  onClick={()=>deleteItem(key[i],i)}>delete</DeleteIcon></li>
})
}
    </ul>
    </div>
    </Grid>
    </Grid>
    </Container>
  );
}
export default Todo;
