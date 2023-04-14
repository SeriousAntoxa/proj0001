const SET_LISTS = "SET-LISTS"
const SET_PIPES = "SET-PIPES"
const SET_MATERIALS = "SET-MATERIALS"
const SET_FRAME = "SET-FRAME"
const SET_FIX_INFO = "SET-FIX-INFO"
const SET_FIX_CONFIG = "SET-FIX-CONFIG"
const SET_SIZE = "SET-SIZE"
const SET_IS_ITEMS = "SET-IS-ITEMS"

let initialState = {
    lists: [],
    pipes: [],
    fixInfo: [],
    materials: [],
    frame: [],
    fixConfig: [],
    size: [],
    isItems: false,
}

const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LISTS:
            return {
                ...state,
                lists: action.lists,
            }
        case SET_PIPES:
            return {
                ...state,
                pipes: action.pipes,
            }
        case SET_FIX_INFO:
            return {
                ...state,
                fixInfo: action.fixInfo,
            }
        case SET_MATERIALS:
            return {
                ...state,
                materials: action.materials,
            }
        case SET_FRAME:
            return {
                ...state,
                frame: action.frame,
            }
        case SET_FIX_CONFIG:
            return {
                ...state,
                fixConfig: action.fixConfig,
            }
        case SET_SIZE:
            return {
                ...state,
                size: action.size,
            }
        case SET_IS_ITEMS:
            return {
                ...state,
                isItems: true,
            }
        default: {
            return { ...state }
        }
    }
}

export default itemsReducer

export let setLists = (lists) => {
    return {
        type: SET_LISTS,
        lists,
    }
}

export let setPipes = (pipes) => {
    return {
        type: SET_PIPES,
        pipes,
    }
}

export let setMaterials = (materials) => {
    return {
        type: SET_MATERIALS,
        materials,
    }
}

export let setFrame = (frame) => {
    return {
        type: SET_FRAME,
        frame,
    }
}
export let setFixInfo = (fixInfo) => {
    return {
        type: SET_FIX_INFO,
        fixInfo,
    }
}
export let setFixConfig = (fixConfig) => {
    return {
        type: SET_FIX_CONFIG,
        fixConfig,
    }
}
export let setSize = (size) => {
    return {
        type: SET_SIZE,
        size,
    }
}
export let setIsItems = () => {
    return {
        type: SET_IS_ITEMS,
    }
}

let filterItems = (obj, type) => {
    return obj.filter((i) => i.type === type)
}

export const getItems = (objData, objConfig) => {
    return (dispatch) => {
        dispatch(getDataItems(objData))
        dispatch(getConfigItems(objConfig))
        dispatch(setIsItems())
    }
}

export const getDataItems = (objData) => {
    let lists = filterItems(objData, "list")
    let pipes = filterItems(objData, "pipe")
    let fixInfo = filterItems(objData, "fix")

    return (dispatch) => {
        dispatch(setLists(lists))
        dispatch(setPipes(pipes))
        dispatch(setFixInfo(fixInfo))
    }
}

export const getConfigItems = (objConfig) => {
    let materials = filterItems(objConfig, "material")
    let frame = filterItems(objConfig, "frame")
    let fixConfig = filterItems(objConfig, "fix")
    let size = filterItems(objConfig, "size")

    return (dispatch) => {
        dispatch(setMaterials(materials))
        dispatch(setFrame(frame))
        dispatch(setFixConfig(fixConfig))
        dispatch(setSize(size))
    }
}
