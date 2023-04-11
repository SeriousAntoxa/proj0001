import { applyMiddleware, combineReducers, createStore } from "redux"
import dataReducer from "./data-reducer"
import thunk from "redux-thunk"
import { reducer as formReducer } from "redux-form"

let reducers = combineReducers({
    data: dataReducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunk))

export default store