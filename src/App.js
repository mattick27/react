import React, { Component } from 'react'
import About from './pages/about'
import 'bulma/css/bulma.css'
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      hide : true,
      opa : 1,
      count : 0,
    }
  }

  
  render() {
    const a = () =>{
      setTimeout(()=>{
        if(this.state.count < 10){
          this.setState({opa : this.state.opa - 0.1,count : this.state.count + 1})
          a()
        }
      },500)
    }

    return (
    <div style={{margin : '5rem'}}>
      <p style={{opacity : this.state.opa}} >Hello  {this.state.opa}</p>
      <a className ='button is-info'> click</a>
      
      <a onClick={a} className ='button is-info'> click</a>
    </div>
    )
  }
}

export default App
