import * as types from './actionTypes';
import axios from 'axios'

const getRecipes=(recipes)=>({
    type:types.GET_RECIPES,
    payload:recipes
})

const recipeDeleted=()=>({
    type:types.DELETE_RECIPE,
})

const recipeAdd=()=>({
    type:types.ADD_RECIPE,
})

const getRecipe=(recipe)=>({
    type:types.GET_SINGLE_RECIPE,
    payload:recipe,
})


export const loadRecipes=()=>{
    return function(dispatch){
        axios.get(`${process.env.REACT_APP_API}`).then((resp)=>{
           console.log("resp",resp)
            dispatch(getRecipes(resp.data));
        }).catch(error=>console.log(error));
    }
}


export const deleteRecipe=(id)=>{
    return function(dispatch){
        axios.delete(`${process.env.REACT_APP_API}/${id}`).then((resp)=>{
           console.log("resp",resp)
            dispatch(recipeDeleted());
            dispatch(loadRecipes());
        }).catch(error=>console.log(error));
    }
}


export const addRecipe=(recipe)=>{
    return function(dispatch){
        axios.post(`${process.env.REACT_APP_API}`,recipe).then((resp)=>{
           console.log("resp",resp)
            dispatch(recipeAdd());
            dispatch(loadRecipes());
        }).catch(error=>console.log(error));
    }
}


// export const getSingleUser=(id)=>{
//     return function(dispatch){
//         axios.get(`${process.env.REACT_APP_API}/${id}`).then((resp)=>{
//            console.log("resp",resp)
//             dispatch(getRecipe(resp.data));
            
//         }).catch(error=>console.log(error));
//     }
// }


export const selectedProduct = (recipe) => {
    return {
      type: types.GET_SINGLE_RECIPE,
      payload: recipe,
    };
  };