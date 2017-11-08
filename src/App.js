import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends Component {
  handleSubmit(event) {
    console.log("Submitted values are: ",
                event.target.name.value);
    event.preventDefault();
  }
  render() {
    return (
      ReactDOM.render(
    <div>
      <form onSubmit={this.handleSubmit}>
      <div className="formGroup">
        Text : <input name="name" type="text" />
      </div>
      <button type="submit"> Submit </button>
    </form>
    </div>,
  	document.getElementById('root')
	)
    );
  }
}



export default App;
