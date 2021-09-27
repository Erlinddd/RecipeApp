


import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useDispatch,useSelector } from 'react-redux';
import { selectedProduct } from '../redux/actions';
import './RecipeDetails.css'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { deleteRecipe } from '../redux/actions';
import Button from '@mui/material/Button';
import {useHistory} from 'react-router-dom'
import {motion} from 'framer-motion'
import {BsBackspaceFill} from 'react-icons/bs'
const RecipeDetails = () => {
const product=useSelector((state)=>state.product.data || {})

const {name,source,preperationTime,listOfIng,preperationIns}=product;

console.log("PRODUCT",product)
const {id}=useParams();
console.log("id",id);
const dispatch=useDispatch()
let  history = useHistory();

const fetch= async ()=>{
const response=await axios.get(`${process.env.REACT_APP_API}/${id}`)
.catch((error=>{
console.log(error)
}))

dispatch(selectedProduct(response))

}
const handleDelete=(id)=>{
if (window.confirm("Are you sure wanted to delete the recipe ?")){
dispatch(deleteRecipe(id))
history.push("/")
}
}

useEffect(()=>{
if(id && id!== "" ) fetch();
},[id])

return (
<motion.div
// initial={{oppacity:0}}
// animate={{oppacity:1}}
// transition={{delay:1.5,duration:1.5}}
initial={{x:'-100vh'}}
animate={{x:0}}
transition={{type:'spring',stiffness:120}}
>


<div className="ui grid container">
  <Button  variant="outlined" onClick={()=>history.push("/")}><BsBackspaceFill  /> GO BACK</Button>
{Object.keys(product).length === 0 ? (
<div>...Loading</div>
) : (
<div className="ui placeholder segment">
<div className="ui two column stackable center aligned grid">
<div className="ui vertical divider">AND</div>
<div className="middle aligned row">
  <div className="column lp">
  <h1> {name}</h1>
    <br/>
    <label>List of all ingriedents</label>
    <h4>{listOfIng +""}</h4>
    <br/>
    <label> Preperation Time </label>
    <h2>{preperationTime}</h2>
    <br/>
    {source}
  </div>
  <div className="column rp">
    <h1>Instructions about the receipe</h1>
    
    <h3 className="ui brown block header">{preperationIns}</h3>
    
    
    
  </div>

</div>

</div>
<Button variant="contained" color="primary" style={{marginRight:"5px"}} onClick={()=>handleDelete(id)}><DeleteOutlineIcon></DeleteOutlineIcon> DELETE RECIPE</Button>
</div>

)}

</div>
</motion.div>
)
}

export default RecipeDetails



