
import {types} from '../types/types';

export const findCategories = (data) => {
    return function (dispatch) {
        dispatch({type: types.findFilms, payload: data});
    }
}

