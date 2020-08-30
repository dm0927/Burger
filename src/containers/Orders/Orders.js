import React, { Component } from 'react';
import Order from '../../components/Order/Order'
import { connect } from 'react-redux';
import * as orderActions from "../../store/actions/index"
import Spinner from '../../components/UI/Spinner/Spinner'

class Orders extends Component {
    
    componentDidMount(){
        this.props.onFetchOrders()
    }

    render(){
        let orders = <Spinner />
        if(!this.props.loading){
            let order = this.props.orders;           
            orders = Object.keys(order).map((igKey) => {                
                return <Order key={igKey} ingredients={order[igKey].ingredients} price={order[igKey].price} />
            })
        }        
        return (
            <div>
                {orders}
            </div>
        )
    }
}

const mapStateToProps = state => {    
    return {
      orders   : state.order.orders,         
      loading : state.order.loading
    }
  }
const mapDispatchToProps = dispatch => {
    return {
      onFetchOrders : () => dispatch(orderActions.fetchorder()),      
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Orders)