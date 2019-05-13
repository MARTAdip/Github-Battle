import React, {Component } from "react";
import ReactDOM from 'react-dom';
import './index.css';
import Popular from './components/Popular';
import Battle from './components/Battle';


class App extends Component {
  render(){

    return(
    <React.Fragment>
      <div className='container'>
      <Battle />
      </div>
    </React.Fragment>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
)
