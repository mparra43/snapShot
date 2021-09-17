import {types} from '../types/types';


const initialState = {
    listOrden: [],
    total: 0,
}

export const orderReducer = (state = initialState, action) => {


    switch (action.type) {

        case types.foodToBuy:
            return {
                ...state,
                listOrden: [...state.listOrden, action.payload]
            }

        case types.totalPrice:
            return {
                ...state,
                total: state.total + action.payload,
            }
        case types.addOneMore:
            return {
                state,
                listOrden: state.listOrden.map((e)=>(e.price + e.price))
            }
        default:
            return state;
    }

}
