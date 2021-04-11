import './App.css';
import {  useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './containers/Home'
import Saved from './containers/Saved'

function App() {

  const [files, setFiles] = useState([])
  const [savedFiles, setSavedFiles] = useState([])
  
  useEffect(()=>{
    let favorites = localStorage.getItem('myFavorites')
    if (favorites) setSavedFiles(JSON.parse(favorites))
    getRandomFiles()
  },[])


  function getRandomFiles(){
    let amountOfFiles = 5;
    let array = []
    for (let i=0; i<amountOfFiles; i++){
      let num = Math.floor(Math.random() * 100) + 1
      array.push(num)
    }
    setFiles(array)
  }

  const addToFavorites = (sound, fileName) =>{
    let newSound = { name: fileName, sound: sound }
    let array = [...savedFiles]
    array.push(newSound)
    setSavedFiles(array)
    localStorage.setItem('myFavorites', JSON.stringify(array) )
  }

  const removeAllFromFavorites = () => {
    setSavedFiles([])
    localStorage.setItem('myFavorites', JSON.stringify([]))
  };
  
  const removeFromFavorites = (sound) => {
    let array = savedFiles.filter((file) => file !== sound)
    setSavedFiles(array)
    localStorage.setItem('myFavorites', JSON.stringify(array))
  }
  

  return (
    <Router>
      <div className="App">
        <div className = "Main">
          <Switch>
            <Route exact path='/' render={(routerProps) => <Home {...routerProps} files={files} getRandomFiles={getRandomFiles} addToFavorites={addToFavorites}  />}/>
            <Route exact path = '/saved' render={(routerProps) => <Saved {...routerProps} savedFiles={savedFiles} removeFromFavorites={removeFromFavorites} removeAll={removeAllFromFavorites} />}/>
          </Switch>
        </div>
      </div>
    </Router>
  );

 
}

export default App;
