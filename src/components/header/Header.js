import React from 'react';
import {Link} from 'react-router';

export default class Header extends React.Component {
  render() {
    return (
      <div className="ui stackable container menu">
        <div className="header item">
          Codestairs
        </div>
        <Link className="item center">
          About
        </Link>
        <Link className="item center">
          Jobs
        </Link>
        <div className="right menu">
          <div className="item">
            <div className="ui transparent left icon input">
              <input type="text" placeholder="Search..." />
                <i className="search icon"></i>
            </div>
          </div>
          <a className="item green">
            Login
          </a>
        </div>
      </div>
    );
  }
}