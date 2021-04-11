import React, {useState} from 'react'
import { Fetch } from './fetch'
import { Clas } from './classcomp'

export function Play(){
    const [files, setFiles] = useState('');
    function getData(){
        fetch('http://localhost:4000/files')
         .then((res) =>res.json()
        )
        .then((files) => {
         let num  =  Math.floor(Math.random() * files.length);
          
   //      console.log(files) 
       // setFiles(files[num])
      //  return files[num]
      let el = <audio src= {files[num]} controls/>;
      setFiles(el)


    //  let aud2 = new Audio(files[num])
    //  aud2.muted =true;
   // aud2.play();
           // const audio = audioRef.current
           //audio.src = files[num]
        }).catch((err) => console.log(err))}


    



    return files;
}
