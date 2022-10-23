import React, {Component} from 'react'
import './App.css'
import Calculator from './component/Calculator'
// import Button from './component/Button'

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
