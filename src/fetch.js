import React , {useState} from "react"
//import { Audio } from './audio'
import {Button} from './func'


export function Fetch() {
    
    //let audioRef = useRef(null);
    const [files, setFiles] = useState('');

if(files === ''){
    getData();
}

    function getData(){
    fetch('http://localhost:4000/files')
     .then((res) =>res.json()
    )
    .then((files) => {
     let num  =  Math.floor(Math.random() * files.length);
      
     //console.log(files) 
  //  setFiles(files[num])
    let aud3 = <audio src= {files[num]} controls/>;
    setFiles(aud3)
    //return files[num]
       // const audio = audioRef.current
       //audio.src = files[num]
    }).catch((err) => console.log(err))


}
//audio.src = files



  
console.log(files)



return files;
 
    


}
