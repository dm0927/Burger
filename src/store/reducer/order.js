import * as actionType from '../actions/actionType';


const initState = {
        orders : [],
        loading : false,
        purchased:false,        
    }

const reducer = (state = initState,action) => {      
    switch(action.type){
        case actionType.ORDER_INIT:
            return   {
                ...state,
                purchased : false
            }       
        case actionType.ORDER_PROCCESS_START :
            return {
                ...state,
                loading : action.value,
            }
        case actionType.ORDER_SUCCESS : 
            const newOrder = {
                ...action.orderData,
                id:action.id,                
            }
            return  {
                ...state,
                loading : false,
                purchased : true,
                orders : state.orders.concat(newOrder)           
            }
        case actionType.ORDER_FAILED : 
            return  {          
                ...state,
                loading : false,                 
            }  
        case actionType.FETCH_ORDER_START:
            return   {
                ...state,
                loading: true,                
            }       
        case actionType.FETCH_ORDER_SUCCESS:            
            return  {
                ...state,
                loading : false,                
                orders : action.orders
            }
        case actionType.FETCH_ORDER_FAIL: 
            return  {          
                ...state,
                loading : false,                 
            }  
        default : return state;
    }    
};

export default reducer