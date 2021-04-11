import React from 'react'
import { Fetch }from './fetch'
import { Button } from './func'
import { Test } from './test'

export class Audo extends React.Component{
constructor(props){
    super(props)
    this.state= {files: ''}
    this.getDat = this.getDat.bind(this);

}

 
    getDat(){
        let num = Math.floor(Math.random() * 100)
        fetch(`http://localhost:5000/test/${num}.mp3`)
        .then((res) =>{ return res.url})
        .then(data =>{this.setState({files: data})})
        console.log(num)
      //  .then(file => {
      //      let aud3 = ;
     //       setFiles(aud3)
      //  })
    }
click(){
    this.getDat();
}
    render(){
        return ( <div><button onClick ={this.click}>click</button>
        <audio controls src={this.state.files}/></div>);
    }
}