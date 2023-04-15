import { getBasket } from "./basket-reducer"

const SET_SQUARE = "SET-SQUARE"
const SET_AREA = "SET-AREA"
const SET_LIST = "SET-LIST"
const SET_PIPE = "SET-PIPE"
const SET_FIX = "SET-FIX"
const SET_ALL_SUM = "SET-ALL-SUM"
const SET_IS_RESULT = "SET-IS-RESULT"

let initialState = {
    square: 0,
    area: "0м * 0м",
    list: {},
    pipe: {},
    fix: {},
    allSum: 0,
    isResult: false,
}

const resultReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SQUARE:
            return {
                ...state,
                square: action.square,
            }
        case SET_AREA:
            return {
                ...state,
                area: action.area,
            }
        case SET_LIST:
            return {
                ...state,
                ...action.list,
            }
        case SET_PIPE:
            return {
                ...state,
                ...action.pipe,
            }
        case SET_FIX:
            return {
                ...state,
                ...action.fix,
            }
        case SET_ALL_SUM:
            return {
                ...state,
                allSum: action.allSum,
            }
        case SET_IS_RESULT:
            return {
                ...state,
                isResult: true,
            }
        default: {
            return { ...state }
        }
    }
}

export default resultReducer

export let setSquare = (square) => {
    return {
        type: SET_SQUARE,
        square,
    }
}

export let setArea = (area) => {
    return {
        type: SET_AREA,
        area,
    }
}
export let setList = (list) => {
    return {
        type: SET_LIST,
        list: {list}
    }
}
export let setPipe = (pipe) => {
    return {
        type: SET_PIPE,
        pipe: {pipe}
    }
}

export let setFix = (fix) => {
    return {
        type: SET_FIX,
        fix: {fix}
    }
}
export let setAllSum = (allSum) => {
    return {
        type: SET_ALL_SUM,
        allSum,
    }
}
export let setIsResult = () => {
    return {
        type: SET_IS_RESULT
    }
}

export const getResult = ({square, area, listResult, pipeResult, fixResult, allSum}) => {
    return (dispatch) => {
        dispatch(setSquare(square))
        dispatch(setArea(area))
        dispatch(setList(listResult))
        dispatch(setPipe(pipeResult))
        dispatch(setFix(fixResult))
        dispatch(setAllSum(allSum))
        dispatch(setIsResult(true))
        //dispatch(getBasket({square, area, listResult, pipeResult, fixResult, allSum}))
    }
}
