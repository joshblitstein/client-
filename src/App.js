import logo from './logo.svg';
import './App.css';
import { Fetch } from './fetch'
import { Audo } from './audio'
import { Play } from './func'
import {Clas} from './classcomp'
import { Test } from './test'
import { Button } from './test2'
import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Saved } from './saved';
import{ NewSaved } from './saved2'

function App() {
 // let alt = Math.floor(Math.random() * 100)
const [num, setNum] = useState(radnNum2)
const [num2, setNum2] = useState(radnNum2)
const [num3, setNum3] = useState(radnNum2)
const [num4, setNum4] = useState(radnNum2)
const [num5, setNum5] = useState(radnNum2)
const [file, setFile] = useState();

function eventHandle(){
  console.log("aia")
}
let change = 5;
function radnNum(){
let num = Math.floor(Math.random() * 100)
let num2 = Math.floor(Math.random() * 100)
let num3 = Math.floor(Math.random() * 100)
let num4 = Math.floor(Math.random() * 100)
let num5 = Math.floor(Math.random() * 100)

//console.log(num)

setNum(num)
setNum2(num2)
setNum3(num3)
setNum4(num4)
setNum5(num5)

}
function radnNum2(){
  let num = Math.floor(Math.random() * 100)  
  return num
  }

function num1(){
 
 setFile(num);
  <Switch>
     <Route exact path = '/saved'>

        <Saved fetch ={file} />

     </Route>
  </Switch>
}
console.log(file)

 let button = <button onClick ={num1}>Save</button>


  return (
    <Router>
    <div className="App">

      <div className = "Main">
        <Switch>
          <Route exact path='/'>
     <Test num ={num} button ={button} />
     <Test num ={num2}/>
     <Test num ={num3}/>
     <Test num ={num4}/>
     <Test num ={num5}/>
     
    <button onClick ={radnNum}>Randomize</button>
    

    <a href = '/saved'>my saved</a>
    </Route>
    <Route exact path = '/saved'>
    <h1>No Saved</h1>

    <a href = '/'>Back</a>
    </Route>
    </Switch>
    </div>
    </div>
    </Router>
  );

 
}

export default App;
