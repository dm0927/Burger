import React, { Component } from 'react';
import { connect } from 'react-redux';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BuildContorls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as actions from "../../store/actions/index"

class BurgerBuilder extends Component {
  state = {           
    purchasing: false,    
  };
  
  updatePurchaseState(updateIngredients) {
    const ingredients = {
      ...updateIngredients,
    };
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    return sum > 0 ;
  }

  UNSAFE_componentWillMount(){
    this.props.onInitIngredient()
  }
    
  purchasing = () => {
    this.setState({ purchasing: true });
  };

  purchasingCancel = () => {
    this.setState({ purchasing: false });
  };

  purchasingContinue = () => {      
    this.props.onInitPurchase();
    this.props.history.push('/checkout');
  };

  render() {    
    const disabledInfo = {
      ...this.props.ings,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let orderSummary = null       
    let burger = <Spinner />

    if(this.props.ings){      
      burger = (
        <Aux>
          <Burger ingredients={this.props.ings} />
          <BurgerControls
                ingredientAdded={this.props.onIngredientAdded}
                ingredientRemove={this.props.onIngredientRemove}
                disabled={disabledInfo}
                price={this.props.totalPrice}
                purchaseable={this.updatePurchaseState(this.props.ings)}
                purchasing={this.purchasing}
          />
        </Aux>
        );
        orderSummary = <OrderSummary
        ingredients={this.props.ings}
        cancelPurchased={this.purchasingCancel}
        orderPurchased={this.purchasingContinue}
        price={this.props.totalPrice}
      />;  
    }    

    // if(this.state.loading){
    //   orderSummary  = <Spinner />
    // }

    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchasingCancel}> 
            {orderSummary} 
        </Modal>        
        {burger}        
      </Aux>
    );
  }
}

const mapStateToProps = state => {    
  return {
    ings : state.burgerbuilder.ingredients,
    totalPrice : state.burgerbuilder.totalPrice
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded : (ingName) => dispatch(actions.addIngredient(ingName)),
    onIngredientRemove : (ingName) => dispatch(actions.removeIngredient(ingName)),
    onInitIngredient : () => dispatch(actions.initIngredient()),
    onInitPurchase : () => dispatch(actions.orderInit()),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(BurgerBuilder);
