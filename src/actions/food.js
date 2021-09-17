import {types} from '../types/types';

export const findCategories = (data) => {
    return function (dispatch) {
        dispatch({type: types.category, payload: data});
    }
}

export const addDishes = (dishes) => {
    return function (dispatch) {
        dispatch({type: types.foodToBuy, payload: dishes});
    }
}

export const totalToPay = (price) => {
    return function (dispatch) {
        dispatch({type: types.totalPrice, payload: price});
    }
}

export const addMore = (addDishes) => {
    return function (dispatch) {
        dispatch({type: types.addOneMore, payload: addDishes});
    }
}