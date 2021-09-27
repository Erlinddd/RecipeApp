
import {createStore,applyMiddleware,compose} from 'redux';
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import rootReducer from './root-reducers'



const middlewares=[reduxThunk];

if (process.env.NODE_ENV === "development" )  {
    middlewares.push(logger);
}

const store =createStore(rootReducer,compose(applyMiddleware(...middlewares),window.devToolsExtension ? window.devToolsExtension() : f => f)
);

export default store;

