import React, {useState} from 'react'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';

export function Saved(props){
    
    
   
    const [file, setFiles] = useState('');

console.log(props.fetch)
   

   
    function getDat(){
    
       fetch(`http://localhost:5000/test/${props.fetch}.mp3`)
        .then((res) =>{ return res.url})
        .then(data =>{setFiles(data)})
             
     
      
    }
    getDat();








   
    return (<div>
        <AudioPlayer src ={file} autoPlayAfterSrcChange ={false}/>
      
       
            </div>
        );

           

    }