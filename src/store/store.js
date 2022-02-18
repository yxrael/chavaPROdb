import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "../reducers/authReducer";


import { listReducer } from "../reducers/listReducer";
import { selectionReducer } from "../reducers/selectionReducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    listado: listReducer,
    seleccion: selectionReducer,
    auth: authReducer
})

export const store = createStore( 
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
);