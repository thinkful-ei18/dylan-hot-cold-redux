import React from 'react';
import TopNav from './top-nav';
import InfoModal from './info-modal';
import './header.css';
import { connect } from 'react-redux';
import * as actions from '../actions';

export function Header(props) {
  return (
    <header>
      <TopNav newGame={() => props.newGame()} />
      {props.modalOpen ? <InfoModal /> : null}
      <h1>HOT or COLD</h1>
    </header>
  );
}

const mapStateToProps = (state) => ({
  modalOpen: state.modalOpen
});

export default connect(mapStateToProps)(Header);

