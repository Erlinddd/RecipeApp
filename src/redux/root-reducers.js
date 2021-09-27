import { combineReducers } from "redux";
import recipesReducers, { selectedProductsReducer, selectedRecipeReducer } from "./reducers";


const rootReducer=combineReducers({
    data:recipesReducers,
    product:selectedProductsReducer
})


export default rootReducer;