import React, { useState, useEffect } from 'react'

import JSZip from "jszip"


export default function Zip(number) {

    const [file, setFiles] = useState('');


    useEffect(()=>{
        getData();
    }, [number])

    function getData(){
        fetch(`http://localhost:5000/hi/static/${num}.mp3`)
        .then((res) =>res.url)
        .then(data =>setFiles(data))       
    }

    const zip = new JSZip();

    const aud = zip.folder('peter')
    aud.file('buns.mp3', file, {base64: true})
        





    return (
        <div>
            
        </div>
    )
}
