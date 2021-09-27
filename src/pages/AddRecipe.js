import React,{useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'; 
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {addRecipe} from '../redux/actions'
import {motion} from 'framer-motion'

const { v4: uuidv4 } = require('uuid');

const AddRecipe = () => {
const [state,setState]=useState({
id:uuidv4(Math.floor(Math.random() * 10)),
name: "",
source:"",
listOfIng:"",
preperationTime:"",
preperationIns:""

})
const [error,setError]=useState("")
let  history = useHistory();
let dispatch=useDispatch()
const {id,name,source,listOfIng,preperationTime,preperationIns}=state;


const handleInputChange=(e)=>{
let {name,value}=e.target;

setState({...state,[name]:value})

}

const handleSubmit=(e)=>{
e.preventDefault();
  if(!name|| !listOfIng || !preperationTime || !preperationIns){
      setError("input all fields...")
  } else {
        dispatch(addRecipe(state));
        history.push("/")
        setError("");
  }

}
return (
  <motion.div
  // initial={{oppacity:0}}
  // animate={{oppacity:1}}
  // transition={{delay:1.5,duration:1.5}}
  initial={{x:'-100vh'}}
  animate={{x:0}}
  transition={{type:'spring',stiffness:100}}
  >


<div style={{marginTop:"100px",display:"flex",flexDirection:"column",alignItems:"center"}}>
<div style={{marginBottom:"100px",display:"flex",flexDirection:"column",alignItems:"center"}}>

<Button variant="contained" color="secondary" onClick={()=>history.push("/")}> {" "} Go Back</Button>
</div>
<h2>Add Recipe</h2>
{error && <h3 style={{color:"red"}}>{error}</h3>}
<Box 
onSubmit={handleSubmit}

component="form"
sx={{
  '& > :not(style)': { m: 1, width: '45ch' },
}}
noValidate
autoComplete="off"
>
        
<TextField  id="outlined-basic" label="Name" variant="outlined" value={name}  name="name" type="text"   onChange={handleInputChange}  />
<br/>

<TextField name="listOfIng"  id="outlined-basic" onChange={handleInputChange}  label=" Ingriedents with quantity" variant="outlined" value={listOfIng} type="text" />


<br/>

<TextField   name="preperationTime" id="outlined-basic" onChange={handleInputChange}  label="PreperationTime" variant="outlined" value={preperationTime} type="text"/>
<br/>
<TextField name="preperationIns"   multiline
  maxRows={20} id="outlined-basic" onChange={handleInputChange} label="Preperation Instructions" variant="outlined" value={preperationIns} type="text"/>
<br/>
<div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>

  <Button variant="contained" color="primary" type="submit">Submit</Button>
    </div>
</Box>
</div>

</motion.div>
)
}

export default AddRecipe
