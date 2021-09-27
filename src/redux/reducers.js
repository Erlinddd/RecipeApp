import * as types from './actionTypes';


const initialState={
    recipes:[],
    recipe:{},
    loading:true,
}

const recipesReducers=(state=initialState,action)=>{
    switch(action.type){
        case types.GET_RECIPES:
return{
    ...state,
    recipes:action.payload,
loading:false,

}
case types.DELETE_RECIPE:
    case types.ADD_RECIPE:
    return {
        ...state,
        loading:false,
    }
    // case types.GET_SINGLE_RECIPE:
    //     return {
    //         ...state,
    //         recipe:action.payload,
    //         loading:false,
    //     }
    
default:
    return state;
    }

}
export const selectedProductsReducer = (state = {}, { type, payload }) => {
    console.log(type);
    switch (type) {
      case types.GET_SINGLE_RECIPE:
        return { ...state, ...payload };
     
      default:
        return state;
    }
  };




export default recipesReducers;