import { applyMiddleware, combineReducers, createStore } from "redux"
import dataReducer from "./data-reducer"
import itemsReducer from "./items-reducer"
import resultReducer from "./result-reducer"
import thunk from "redux-thunk"
import { reducer as formReducer } from "redux-form"

let reducers = combineReducers({
    data: dataReducer,
    items: itemsReducer,
    result: resultReducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunk))

document.store = store

export default store