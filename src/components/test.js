import React, { useState, useEffect } from 'react'
// import { Button } from './test2';
//import ReactAudioPlayer from 'react-audio-player';
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';

export default function Test({num}){
    
    const [files, setFiles] = useState('');

    useEffect(()=>{
        getData();
    }, [num])
    
    function getData(){
        fetch(`http://localhost:5000/test/${num}.mp3`)
        .then((res) =>res.url)
        .then(data =>setFiles(data))       
    }
  // getData();

    
    return (
        <div>
            <AudioPlayer src = {files} autoPlayAfterSrcChange = {false}/>
            <input></input>
        </div>
        );

        
    }

  