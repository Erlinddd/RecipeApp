
import './App.css';
import {Route,Switch} from 'react-router-dom';
import Home from './pages/Home';
import AddRecipe from './pages/AddRecipe';
import RecipeDetails from './pages/RecipeDetails';
function App() {
  return (
    <div className="App">
     <Switch>

       <Route exact path="/" component={Home}/>
       <Route path="/recipe/:id" component={RecipeDetails}/>
    <Route exact path="/addRecipe" component={AddRecipe}/>
     </Switch>
             
                
    </div>
  );
}

export default App;
