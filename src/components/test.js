import React, { useState, useEffect } from 'react'
// import { Button } from './test2';
import ReactAudioPlayer from 'react-audio-player';
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';

export default function Test(props){
    
    const [files, setFiles] = useState('');

    useEffect(()=>{
        getData();
    }, [])
    
    function getData(){
        fetch(`http://localhost:5000/test/${props.num}.mp3`)
        .then((res) =>res.url)
        .then(data =>setFiles(data))       
    }
    
    return (
        <div>
            <AudioPlayer src = {files} autoPlayAfterSrcChange = {false}/>
        </div>
        );

        
    }

  