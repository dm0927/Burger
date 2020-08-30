import * as actionType from '../actions/actionType';

const initialState = {
    ingredients: null,
    totalPrice: 4,
}

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.4,
    meat: 1.3,
  };

const reducer = (state = initialState,action) => {      
    switch(action.type){
        case actionType.ADD_INGREDIENT : 
            return {
                ...state,
                ingredients : {
                    ...state.ingredients,
                    [action.ingredientName] : state.ingredients[action.ingredientName] + 1
                },
                totalPrice : (state.totalPrice + INGREDIENT_PRICES[action.ingredientName])
        };
        case actionType.REMOVE_INGREDIENT : 
            return{
                ...state,
                ingredients : {
                    ...state.ingredients,
                    [action.ingredientName] : state.ingredients[action.ingredientName] - 1
                },
                totalPrice : (state.totalPrice - INGREDIENT_PRICES[action.ingredientName])
        };
        case actionType.SET_INGREDIENT :
            return {
                ...state,
                ingredients : action.ingredients,
                totalPrice: 4,
            }
        default : return state;
    }    
};

export default reducer