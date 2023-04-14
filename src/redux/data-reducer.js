import { dataAPI } from "./../api/api"

const SET_DATA = "SET-DATA"
const SET_IS_DATA = "SET-IS-DATA"
const SET_CONFIG = "SET_CONFIG"
const SET_IS_CONFIG = "SET_IS-CONFIG"

let initialState = {
    data: [],
    config: [],
    isData: false,
    isConfig: false
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
        case SET_IS_DATA:
            return {
                ...state,
                isData: true,
            }
        case SET_IS_CONFIG:
            return {
                ...state,
                isConfig: true,
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
export let setIsData = () => {
    return {
        type: SET_IS_DATA,
    }
}
export let setIsConfig = () => {
    return {
        type: SET_IS_CONFIG,
    }
}

export const getData = () => {
    return async (dispatch) => {
        let data = await dataAPI.getData()
        dispatch(setData(data))
        dispatch(setIsData())
    }
}

export const getConfig = () => {
    return async (dispatch) => {
        let config = await dataAPI.getConfig()
        dispatch(setConfig(config))
        dispatch(setIsConfig())
    }
}


