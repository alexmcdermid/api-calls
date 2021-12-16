import './App.css';
import React from 'react';
import { apiCall } from './api';
import { Component } from 'react/cjs/react.production.min';
 

class App extends Component {
  state = {
    data:null,
  }
  handleApiCall = async () => {
    const data = await apiCall()
    console.log(data)
    this.setState({data:data})
  }
  render(){
    return (
      <div className="App">
        <button onClick={()=>{this.handleApiCall()}}>load api data</button>
        {this.state.data!=null ? <div>
          {this.state.data.results[0].name.first}
          <br/>
          {this.state.data.results[0].cell}
          </div> : <></>}
        <button>save</button>
      </div>
    );
  }
}

export default App;
