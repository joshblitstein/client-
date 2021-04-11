import './App.css';
import {  useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './containers/Home'
import Saved from './containers/Saved'

// import { Fetch } from './fetch'
// import { Audo } from './audio'
// import { Play } from './func'
// import {Clas} from './classcomp'
// import { Test } from './test'
// import { Button } from './test2'

function App() {

  const [files, setFiles] = useState([])
  const [savedFiles, setSavedFiles] = useState([])
  const [nameOfSound, setnameOFSound] = useState('')

  
  useEffect(()=>{
    getRandomFiles()
  },[])

  // console.log(files)


  function getRandomFiles(){
    let amountOfFiles = 5;
    let array = []
    for (let i=0; i<amountOfFiles; i++){
      let num = Math.floor(Math.random() * 100)
      array.push(num)
    }
    setFiles(array)
  }

  const addToFavorites = (sound, fileName) =>{
    let newSound = { name: fileName, sound: sound }
    let array = [...savedFiles]
    array.push(newSound)
    setSavedFiles(array)
  }

  const removeFromFavorites = (sound) => setSavedFiles(savedFiles.filter((file) => file !== sound));
  const removeAllFromFavorites = () => setSavedFiles([]);
  
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
