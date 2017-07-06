import    React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {link} from 'react-router';


class App extends Component {
  render() {
    return (
      <div className="App">
          <link rel="icon"
                href="./freeFavicon.jpg" type="image/jpg" />

        <div className="App-header">
          <h1>Westminster Swim Club</h1>

        </div>
        <p className="App-intro">

           <p><Link to="/">Home</Link></p>
           <p><Link to="/Members">Members</Link></p>
           <p><Link to="/Services">Services</Link></p>
           <p><Link to="/Pricing">Pricing</Link></p>
           <p><Link to="/BadLink">Undefined Link</Link></p>


            {this.props.childern}
        </p>
      </div>
    );
  }
}

export default App;
