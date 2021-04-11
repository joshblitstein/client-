import React from 'react'
import { Test } from './test'

export class Clas extends React.Component{
 constructor(props){
     super(props)
     this.state ={
         c1: ' ',
         c2: '',
     }
     this.getData = this.getData.bind(this);

 }
  
   
   
    getData(){
      let n =  Math.floor(Math.random() * 100)
        this.setState({
            c1: <Test num ={n}/>,
          //  c2: <Test />
        })

    
}





render(){
    return (<div>
        <button onClick ={this.getData }>click</button>
      {this.state.c1}
    
      
    </div>)
}
}