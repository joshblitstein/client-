import React, {useState} from 'react'
import { Button } from './test2';
import ReactAudioPlayer from 'react-audio-player';
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';
import { Saved } from './saved'
import { NewSaved } from './saved2';



export function Test(props){
    
    
   
    const [files, setFiles] = useState('');
    


   

   
    function getDat(){
    
       fetch(`http://localhost:5000/test/${props.num}.mp3`)
        .then((res) =>{ return res.url})
        .then(data =>{setFiles(data)})
             
     
      
    }
    getDat();




        function saveNum(){
                
  
            let newNum;
                newNum = props.num 
                console.log(newNum);
       //     props.newNum = newNum
        
     
        }
        

   
    return (<div>
        <AudioPlayer src ={files} autoPlayAfterSrcChange ={false}/>
        {props.button}
            </div>
        );

           

    }

  