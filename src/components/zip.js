import React, { useState, useEffect } from 'react'

import JSZip from "jszip"


export default function Zip(number) {

    const [file, setFiles] = useState('');


    useEffect(()=>{
        getData();
    }, [number])

    function getData(){
        fetch(`http://localhost:5000/hi/static/${number}.mp3`)
        .then((res) =>res.url)
        .then(data =>setFiles(data))       
    }

  /*  function zip(){ const zip = new JSZip();

    const aud = zip.folder('peter')
    aud.file('buns.mp3', file, {base64: true})
        
    zip.generateAsync({type:"blob"}).then(function(content) {
        // see FileSaver.js
        saveAs(content, "example.zip");
    });}
 */



    return (
        <div>
            <button>zipup</button>
        </div>
    )
}
