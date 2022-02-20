import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { authReducer } from "../reducers/authReducer";
import { listReducer } from "../reducers/listReducer";
import { pedidosReducer } from "../reducers/pedidosReducer";
import { selectionReducer } from "../reducers/selectionReducer";
import { uiReducer } from "../reducers/uiReducer";


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    listado: listReducer,
    seleccion: selectionReducer,
    auth: authReducer,
    ui: uiReducer,
    pedidos: pedidosReducer
})

export const store = createStore( 
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
);