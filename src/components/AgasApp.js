import React from 'react';
import HeaderParent from './HeaderParent';
import JumboTron from './JumboTron';
import NavHeader from './NavHeader';
import { getLlist } from '../utils/navlist';
import { getCard } from '../utils/card';
import ContainerContent from './ContainerContent';

class AgasApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: getLlist(),
      card: getCard(),
    };
  }

  render() {
    return (
      <div>
        <HeaderParent />
        <NavHeader lists={this.state.list} />
        <JumboTron />
        <ContainerContent cards={this.state.card} />
      </div>
    );
  }
}

export default AgasApp;
