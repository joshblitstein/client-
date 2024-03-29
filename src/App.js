import './App.css';
import {  useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './containers/Home'
import Saved from './containers/testSaved'
import  Register  from './components/register'
import  Login  from './components/login'
import  NavBar  from './components/NavBar'
import Alert from './components/alert'
import MyPath from './components/myPath'
import Test from './test2'
import Testfetch from './components/testfetch'
import Zip from './components/zip'
import axios from 'axios'
//redux
import { Provider } from 'react-redux'
import store from './store'
import { loadUser } from './actions/auth'
import setAuthToken from './utils/setauthtoken'
function App() {

  if(localStorage.token){
    setAuthToken(localStorage.token)
 

}

  const [files, setFiles] = useState([])
  const [savedFiles, setSavedFiles] = useState([])
  
  useEffect(()=>{
    let favorites = localStorage.getItem('myFavorites')
    if (favorites) setSavedFiles(JSON.parse(favorites))
    getRandomFiles()
  },[])


  function getRandomFiles(){
    let amountOfFiles = 16;
    let array = []
    for (let i=0; i<amountOfFiles; i++){
      let num = Math.floor(Math.random() * 100) + 1

  array.push(num)
      if(num !== num ){
        array.push(num)
      }
    }
    setFiles(array)
    //console.log(array)
  }
  const emptyFunction = () =>{

  }

  const addToFavorites = async (sound, fileName) =>{
    let newSound = { name: fileName, sound: sound }
    let array = [...savedFiles]
    array.push(newSound)
    setSavedFiles(array)
    localStorage.setItem('myFavorites', JSON.stringify(array) )
    console.log(newSound)

    if(!localStorage.token){
      console.log('gooseberry')
    }else{

    await axios.post(`http://localhost:5000/profile`, {
      "files": [
        {
          "fileName": newSound.name,
          "number": newSound.sound
        }
      ]
  }
  ).catch(err=>console.log(err))
  .then(res => console.log(res))}

  
  }

  const removeAllFromFavorites = () => {
    setSavedFiles([])
    axios.post(`http://localhost:5000/profile/gone2`
  ).then(res => console.log(res))
    localStorage.setItem('myFavorites', JSON.stringify([]))
  };
  
  const removeFromFavorites = async (sound) => {

    if(!localStorage.token){
      console.log('gooseberry')

    }else{
      console.log(sound)
    await axios.post(`http://localhost:5000/profile/gone1`, {
      "files": 
        [
          {
          "fileName": sound.name,
          "number": sound.sound
        }
      ]
      
  }
  ).then(res => console.log(res))} 




    let array = savedFiles.filter((file) => file !== sound)
    setSavedFiles(array)
    localStorage.setItem('myFavorites', JSON.stringify(array))
    console.log(sound.name) 

    

  }
  
useEffect(() => {
  store.dispatch(loadUser())
  
}, [])
  return (
<Provider store={store}>
    <Router>
      <div className="App">
        <div className = "Main">
          <NavBar />
          <Alert />
          <Switch>
           <Route exact path='/register' render={(routerProps) => <Register />} />
           <Route exact path='/login' render={(routerProps) => <Login />} />
            <Route exact path='/' render={(routerProps) => <Home {...routerProps} files={files} getRandomFiles={getRandomFiles} addToFavorites={addToFavorites}  />}/>
            <Route exact path = '/saved' render={(routerProps) => <Saved {...routerProps} savedFiles={savedFiles} removeFromFavorites={removeFromFavorites} removeAll={removeAllFromFavorites} />}/>
            <Route exact path = '/mypath' render={(routerProps) => <MyPath />} />
            <Route exact path = '/test' render={(routerProps) => <Test />} />
             <Route exact path = '/zip' render={(routerProps) => <Zip number={3} />} /> 
            

           
          </Switch>
        </div>
      </div>
    </Router>
    </Provider>
  );

 
}

export default App;
