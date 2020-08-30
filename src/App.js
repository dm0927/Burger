import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import CheckoutSummary from './containers/Checkout/Checkout'
import Orders from './containers/Orders/Orders'

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Route path="/order" component={Orders} />
          <Route path="/checkout" component={CheckoutSummary} />
          <Route path="/" exact component={BurgerBuilder} />
        </Layout>
      </div>
    );
  }
}

export default App;
