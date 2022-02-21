import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { authReducer } from "../reducers/authReducer";
import { listaPedidosAdminReducer } from "../reducers/listaPedidosAdminReducer";
import { listReducer } from "../reducers/listReducer";
import { pedidoReducer } from "../reducers/pedidoReducer";
import { selectionReducer } from "../reducers/selectionReducer";
import { uiReducer } from "../reducers/uiReducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    listado: listReducer,
    seleccion: selectionReducer,
    auth: authReducer,
    ui: uiReducer,
    pedidos: listaPedidosAdminReducer,
    pedido: pedidoReducer
})

export const store = createStore( 
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
);