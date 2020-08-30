import * as actionTypes from '../actions/actionType'
import axios from '../../axios-order';


export const orderPlaced = (id, orderData) => {
    return {
        type:actionTypes.ORDER_SUCCESS,
        id : id,
        orderData : orderData,
    }
}

export const orderFailed = (error) => {
    return {
        type:actionTypes.ORDER_FAILED,
        error:error
    }
}

export const orderpurchasestart = () => {
    return {
        type : actionTypes.ORDER_PROCCESS_START,
        value : true,
    }
}

export const orderInit = () => {
    return {
        type : actionTypes.ORDER_INIT
    }
}

export const orderBurger = (order) => {
    return dispatch => {
        dispatch(orderpurchasestart());
        axios.post('/orders.json',order).then(response => {
                dispatch(orderPlaced(response.data.name , order))
            }).catch(error => {
                dispatch(orderFailed(error))
        });   
    }
}

export const fetchOrderSuccess = (orders) => {
    return {
        type : actionTypes.FETCH_ORDER_SUCCESS,
        orders: orders
    }
}

export const fetchOrderFail = (error) => {
    return {
        type : actionTypes.FETCH_ORDER_FAIL,
        error: error
    }
}

export const fetchOrderStart = () => {
    return {
        type : actionTypes.FETCH_ORDER_START,        
    }
}

export const fetchorder = (order) => {
    return dispatch => {
        dispatch(fetchOrderStart());
        axios.get('orders.json').then((response) => {                    
            let data = Object.keys(response.data).map((igKey) => {
                return response.data[igKey]
            })
            dispatch(fetchOrderSuccess(data))                            
            }).catch(err => dispatch(fetchOrderSuccess(err)))
    }
}