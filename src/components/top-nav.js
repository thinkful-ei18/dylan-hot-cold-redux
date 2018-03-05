import React from 'react';
import './top-nav.css';
import { connect } from 'react-redux';
import * as actions from '../actions';

export function TopNav(props) {
    return <nav>
        <ul className="clearfix">
          <li>
            <a className="what" href="#" onClick={() => (props.dispatch(actions.toggleModal(true)))}>
              What?
            </a>
          </li>
          <li onClick={() => props.newGame()}>
            <a className="new" href="#">
              + New Game
            </a>
          </li>
        </ul>
      </nav>;
}


const mapStateToProps = (state) => ({
  modalOpen: state.modalOpen
});

export default connect(mapStateToProps)(TopNav);