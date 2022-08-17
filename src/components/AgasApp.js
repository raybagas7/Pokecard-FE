import React from 'react';
import HeaderParent from './HeaderParent';
import JumboTron from './JumboTron';
import NavHeader from './NavHeader';
import { getLlist } from '../utils/navlist';

class AgasApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: getLlist(),
    };
  }

  render() {
    return (
      <div>
        <HeaderParent />
        <NavHeader lists={this.state.list} />
        <JumboTron />
      </div>
    );
  }
}

export default AgasApp;
