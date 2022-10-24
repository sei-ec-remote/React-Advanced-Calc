import React, {Component} from 'react';
import './App.css';
import Calculator from './Calculator';
// import Button from './components/Button';


class App extends Component {
  render(){
    return (
      <div className="App">
        <Calculator />
        {/* <Button /> */}
      </div>
    )
  }
}

export default App;
