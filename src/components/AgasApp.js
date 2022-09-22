import React from 'react';
import HeaderParent from './HeaderParent';
import JumboTron from './JumboTron';
import NavHeader from './NavHeader';
import { getLlist } from '../utils/navlist';
import { getCard } from '../utils/card';
import { getElement } from '../utils/element';
import { getSocmedBlack, getSocmedWhite } from '../utils/socmed';
import Footer from './Footer';
import MainContent from './Pokemon Components/MainContent';
import CollectedCardsContainer from './Pokemon Collected Card/CollectedCardsContainer';

class AgasApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: getLlist(),
      card: getCard(),
      elements: getElement(),
      socmed_black: getSocmedBlack(),
      socmed_white: getSocmedWhite(),
    };
  }

  render() {
    return (
      <div>
        <HeaderParent />
        <NavHeader lists={this.state.list} />
        <JumboTron
          blackmed={this.state.socmed_black}
          whitemed={this.state.socmed_white}
        />
        <MainContent cards={this.state.card} elements={this.state.elements} />
        <CollectedCardsContainer />
        <Footer />
      </div>
    );
  }
}

export default AgasApp;
