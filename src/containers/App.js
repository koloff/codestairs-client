import React from 'react';
import Header from './../components/header/Header';
import Footer from './footer/Footer';

export class App extends React.Component {
  render() {
    return (
      <div className="site">
        <Header />
        <div className="ui container site-content">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}