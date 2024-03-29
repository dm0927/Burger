import React, { Component } from 'react';
import Aux from '../Aux';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerToogleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer }
    }
    );
  };

  render() {
    return (
      <Aux>
        <Toolbar opened={this.sideDrawerToogleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerToogleHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
