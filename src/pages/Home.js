import React,{useEffect} from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch,useSelector } from 'react-redux';
import { deleteRecipe, loadRecipes } from '../redux/actions';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import {useHistory} from 'react-router-dom'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import {Link} from 'react-router-dom'
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import {motion} from 'framer-motion'

import 'react-toastify/dist/ReactToastify.css'
import {toast } from 'react-toastify';


const { v4: uuidv4 } = require('uuid');
toast.configure();
const changeColor={
    color:"white" };

const StyledTableCell = styled(TableCell)(({ theme }) => ({
[`&.${tableCellClasses.head}`]: {
  backgroundColor: theme.palette.common.black,
  color: theme.palette.common.white,
},
[`&.${tableCellClasses.body}`]: {
  fontSize: 14,
},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
'&:nth-of-type(odd)': {
  backgroundColor: theme.palette.action.hover,
},
// hide last border
'&:last-child td, &:last-child th': {
  border: 0,
},
}));



const buttons = [
<Button key="one">VIEW</Button>,
<Button key="two">DELETE</Button>,
<Button key="three">VIEW SOURCE</Button>,
];


const Home = () => {
  useEffect(()=>{
    toast("Welcome te Recipe App where you can create new recipe,delete it and view recipe details! Created with React and Redux")
  },[])

let dispatch= useDispatch();
let history=useHistory()
const {recipes}=useSelector(state=>state.data)
  useEffect(()=>{
dispatch (loadRecipes())
  },[])
  
  const handleDelete=(id)=>{
  if (window.confirm("Are you sure wanted to delete the recipe ?")){
    dispatch(deleteRecipe(id))
  }
  }

  function truncateString(str, n) {
    if (str.length > 50) {
      return str.substring(0, 50) + "...";
    } else {
      return str;
    }
  }

  function truncateStringIng(str, n) {
    if (str.length > 10) {
      return str.substring(0,10)
    } else {
      return str;
    }
  }

  function  list(str,n){
    let size=3;
    let items=str.slice(0,2)
  }


return (
  <motion.div
  // initial={{oppacity:0}}
  // animate={{oppacity:1}}
  // transition={{delay:1.5,duration:1.5}}
  initial={{x:'-100vh'}}
  animate={{x:0}}
  transition={{type:'spring',stiffness:120}}
  >

  
  <Box
  sx={{
    marginRight:"3px",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      m: 1,
    },
  }}
>
<Stack sx={{width: '17%' }} spacing={2}>
  
  <Alert  severity="info"> You can add here the new recipe!</Alert>

</Stack>

    <div>
      
      <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      <Button variant="contained" color="primary" onClick={()=>history.push("/addRecipe")}>Add Recipe</Button>
        </div>
        <TableContainer component={Paper}>
  <Table sx={{ marginTop:15, minWidth: 900 }} aria-label="customized table">
    <TableHead>
      <TableRow>
      <StyledTableCell>Recipe Id</StyledTableCell>
        <StyledTableCell>Recipe Name</StyledTableCell>
        <StyledTableCell align="center">Source</StyledTableCell>
        <StyledTableCell align="center">List of Ingredients</StyledTableCell>
        <StyledTableCell align="center">Preperation Time</StyledTableCell>
        <StyledTableCell align="center">Preperation instructions</StyledTableCell>
        <StyledTableCell align="center">Delete & View </StyledTableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {recipes && recipes.map((recipe) => (
        <StyledTableRow key={recipe.id}>
          <StyledTableCell component="th" scope="row">
 {truncateStringIng(recipe.id)}
            </StyledTableCell>
          <StyledTableCell align="center">{recipe.name}</StyledTableCell>
          <StyledTableCell align="center"> <Button color="secondary"  style={{marginRight:"5px"}} > <a style={{textDecoration:"none"}} href="https://tasty.co/compilation/10-easy-and-fancy-dinner-recipes" >VIEW SOURCE</a></Button></StyledTableCell>
          <StyledTableCell align="center">{recipe.listOfIng.slice(0,3) + "..."}</StyledTableCell>
          <StyledTableCell align="center">{recipe.preperationTime}</StyledTableCell>
          
          <StyledTableCell align="center">{truncateString(recipe.preperationIns)} </StyledTableCell>
         

         
          <StyledTableCell align="center"><ButtonGroup  color="secondary" aria-label="medium secondary button group">
    <Button color="primary" style={{marginRight:"5px"}} onClick={()=>handleDelete(recipe.id)}><DeleteOutlineIcon></DeleteOutlineIcon></Button>
    <Link to={`/recipe/${recipe.id}`}> <Button color="secondary"  style={{marginRight:"5px"}} ><VisibilityIcon></VisibilityIcon></Button></Link>
    
  </ButtonGroup></StyledTableCell>
        </StyledTableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>
    </div>
    </Box>
    </motion.div>
)
}

export default Home
