import React from 'react';
import {Link} from 'react-router';

export default class Footer extends React.Component {
  render() {
    return (
      <div className="ui inverted vertical footer segment" style={{marginTop: 20}}>
        <div className="ui container">
          <div className="ui stackable inverted divided equal height stackable grid">
            <div className="three wide column">
              <h4 className="ui inverted header">About</h4>
              <div className="ui inverted link list">
                <a href="#" className="item">About Codestairs</a>
                <a href="#" className="item">Contact us</a>
              </div>
            </div>
            <div className="three wide column">
              <h4 className="ui inverted header">Connect</h4>

                <a href="#" className="item">
                  <i className="facebook inverted grey square icon big"></i>
                </a>
                <a href="#" className="item">
                  <i className="mail inverted grey square icon big"></i>
                </a>
            </div>
            <div className="ten wide right aligned column">
              <div>&copy; 2015 Codestairs</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}