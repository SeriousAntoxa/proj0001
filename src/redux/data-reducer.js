import { dataAPI } from "./../api/api"

const SET_DATA = "SET-DATA"
const SET_CONFIG = "SET_CONFIG"

let initialState = {
    data: null,
    config: null,
}

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                data: action.data,
            }
        case SET_CONFIG:
            return {
                ...state,
                config: action.config,
            }
        default: {
            return { ...state }
        }
    }
}

export default dataReducer

export let setData = (data) => {
    return {
        type: SET_DATA,
        data,
    }
}

export let setConfig = (config) => {
    return {
        type: SET_CONFIG,
        config,
    }
}

export const getData = () => {
    return async (dispatch) => {
        let data = await dataAPI.getData()
        dispatch(setData(data))
    }
}

export const getConfig = () => {
    return async (dispatch) => {
        let config = await dataAPI.getConfig()
        dispatch(setConfig(config))
    }
}
