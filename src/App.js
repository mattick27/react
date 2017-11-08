import React, { Component } from 'react'
import About from './pages/about'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      data :'null',
      payload : [],
    }
  }

  render() {
    const change=(e)=>{
      this.setState({data : e.target.value})
    }
    const click=()=>{
      this.setState({payload : this.state.payload.concat(this.state.data)})
      console.log(this.state.payload)
    }
    return (
    <div>
        <input onChange={change} type='text' />
        <button onClick={click} > summit </button>
        <About a={this.state.payload} />
    </div>
	
    )
  }
}



export default App
