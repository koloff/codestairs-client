import React from 'react';

export class LoginForm extends React.Component {

  render() {
    return (
      <div>
        <div className="ui middle aligned center aligned grid">
          <div className="column five wide"><br/><br/><br/><br/><br/><br/>

            <div className="ui segment secondary">
              <h2 className="ui blue image header">
                <div className="content">
                  Log-in to your account
                </div>
              </h2>
              <form className="ui large form">
                <div className="ui stacked segment">
                  <div className="field">
                    <div className="ui left icon input">
                      <i className="user icon"></i>
                      <input type="text" name="email" placeholder="E-mail / Username"/>
                    </div>
                  </div>
                  <div className="field">
                    <div className="ui left icon input">
                      <i className="lock icon"></i>
                      <input type="password" name="password" placeholder="Password"/>
                    </div>
                  </div>
                  <div className="ui fluid large blue submit button">Login</div>
                </div>

                <div className="ui error message"></div>

              </form>

              <div className="ui message">
                Don't have account? <a href="#">Sign Up</a>
              </div>

            </div>
          </div>
        </div>
      </div>

    );
  }
}