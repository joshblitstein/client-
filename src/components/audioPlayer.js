import React, { useState, useEffect } from 'react'
// import { Button } from './test2';
//import ReactAudioPlayer from 'react-audio-player';
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';

export default function Player({num}){
    
    const [files, setFiles] = useState('');

    useEffect(()=>{
        getData();
    }, [num])
    
    function getData(){
        fetch(`http://localhost:5000/hi/static/${num}.mp3`)
        .then((res) =>res.url)
        .then(data =>setFiles(data))       
    }
    
    return (
        <div className="audio-section">
            <AudioPlayer src = {files} autoPlayAfterSrcChange = {false}/>
        </div>
        );

        
    }

  