import React from 'react';
import {Link} from 'react-router';

export default class Header extends React.Component {
  render() {
    return (
      <div className="main nav">
        <div className="ui stackable main inverted menu">
          <div className="ui container">
            <div className="header item">
              <img className="ui mini white  bordered right spaced image" src="../../static/img/logo1.png"
              />
              Codestairs
            </div>
            <a className="item center">
              Add
            </a>
            <a className="item center">
              Organize
            </a>
            <a className="item center">
              API
            </a>
            <div className="right menu">
              <div className="item">
                <div className="ui transparent inverted left icon input">
                  <input type="text" placeholder="Search..."/>
                  <i className="search icon"></i>
                </div>
              </div>
              <a className="item button">
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}