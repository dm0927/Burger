import * as actionType from './actionType';
import axios from '../../axios-order';

export const addIngredient = (name) => {
    return {
        type:actionType.ADD_INGREDIENT,
        ingredientName:name
    }
}

export const removeIngredient = (name) => {
    return {
        type:actionType.REMOVE_INGREDIENT,
        ingredientName:name
    }
}

export const setIngredients = (ingredients) => {
    return {
        type : actionType.SET_INGREDIENT,
        ingredients  : ingredients
    }
}

export const initIngredient = () => {
    return dispatch => {
        axios.get('/ingredients.json').then( response => {
            dispatch(setIngredients(response.data))
        })
        .catch(error => {
            console.log(error)
        })
    }
}