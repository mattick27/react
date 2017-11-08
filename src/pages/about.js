import React from 'react'
class about extends React.Component{
    
    render(){
        return(
            <div> {this.props.a.map((value)=>{
                return <li>{value}</li>
            })} </div>
        )
    }
}

export default about