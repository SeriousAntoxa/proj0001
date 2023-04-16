const SET_BASKET = "SET-BASKET"
const SET_IS_BASKET = "SET-IS-BASKET"
const SET_CLEAR_BASKET = "SET-CLEAR-BASKET"

let initialState = {
    basket: [],
    isBasket: false,
}

const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BASKET:
            return {
                ...state,
                basket: [...state.basket, action.basket],
            }
        case SET_IS_BASKET:
            return {
                ...state,
                isBasket: true,
            }
        case SET_CLEAR_BASKET:
            return {
                ...state,
                basket: [],
                isBasket: false,
            }
        default: {
            return { ...state }
        }
    }
}

export default basketReducer

export let setBasket = (basket) => {
    return {
        type: SET_BASKET,
        basket,
    }
}
export let setIsBasket = () => {
    return {
        type: SET_IS_BASKET,
    }
}
export let setClearBasket = () => {
    return {
        type: SET_CLEAR_BASKET,
    }
}

export const setBasketItem = (result) => {
    return (dispatch) => {
        dispatch(setIsBasket())
        dispatch(setBasket(result))
    }
}

export const clearBasket = () => {
    return (dispatch) => {
        dispatch(setClearBasket())
    }
}
