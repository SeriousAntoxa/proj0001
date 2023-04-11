import { applyMiddleware, combineReducers, createStore } from "redux"
import dataReducer from "./data-reducer"
import thunk from "redux-thunk"

let reducers = combineReducers({
    data: dataReducer,
})

let store = createStore(reducers, applyMiddleware(thunk))

export default store