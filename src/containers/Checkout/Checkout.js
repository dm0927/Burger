import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Route , Redirect} from 'react-router-dom'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData'

class Checkout extends Component {    
    
    checkoutCancelled = () => {
        this.props.history.goBack();
    }

    checkoutContinued = () => {
        this.props.history.replace('checkout/contact-data');
    }
    render (){             
        let summary = <Redirect to="/" />          
        if(this.props.ings){
            const purchaseRedirect = this.props.purchased ? <Redirect to="/" /> : null;
            summary = (
                <div>
                    {purchaseRedirect}
                    <CheckoutSummary 
                        onCheckoutCancelled={this.checkoutCancelled} 
                        onCheckoutContinued={this.checkoutContinued} 
                        ingredients={this.props.ings}
                        /> 
                    <Route path={this.props.match.path + '/contact-data' }
                    component={ContactData} />
                 </div>
            )   
        }    
        return summary
    }
}

const mapStateToProps = state => {    
    return {
      ings : state.burgerbuilder.ingredients,
      purchased : state.order.purchased,
    }
  }

export default connect(mapStateToProps)(Checkout)