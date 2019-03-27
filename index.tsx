import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import SPConnect from './SPConnect'

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>        
        <p>
          Start editing to see some magic happen :)
        </p>
        <SPConnect />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
