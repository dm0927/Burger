import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';

import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  // This could be a funcctional componet, doesn't have to be a class component
  componentDidUpdate() {
    console.log("[OrderSummary] Will update")
  }
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map((igKey) => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:
          {this.props.ingredients[igKey]}
        </li>
      );
    });
    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: $ {this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to Check Out</p>
        <Button btnType="Danger" clicked={this.props.cancelPurchased}>
          CANCEL
          </Button>
        <Button btnType="Success" clicked={this.props.orderPurchased}>
          CONTINUE
          </Button>
      </Aux >
    )
  }
};

export default OrderSummary;
