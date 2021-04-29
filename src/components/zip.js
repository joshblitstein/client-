import React, { useState, useEffect } from 'react'

import JSZip from "jszip"
import { saveAs } from 'file-saver'
import JSZipUtils from 'jszip-utils'


export default function Zip({number}) {

    const [file, setFiles] = useState('');


    useEffect(()=>{
        getData(); 
    }, [number])

    function getData(){
        fetch(`http://localhost:5000/hi/static/${number}.mp3`)
        .then((res) =>res.url)
        .then(data =>setFiles(data))       
    }

  /*   function zip(){ 
    const zip = new JSZip();
        console.log(file)
    const aud = zip.folder('peter')
        let write = new Blob(file);
        let file1 =  write.arrayBuffer()

        let fil = new FileReader(file)
        console.log(file1)
    aud.file('1.mp3',file1, {base64: true} ) 
        
    zip.generateAsync({type:"blob"}).then(function(content) {
        // see FileSaver.js
        saveAs(content, "example.zip");
    });} */
 

    function zip(){
        new JSZip.external.Promise(function (resolve, reject) {
            JSZipUtils.getBinaryContent(file, function(err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        }).then(function (data) {
            return JSZip.loadAsync(data);
        })
        .then(file =>console.log(file))
    }












    return (
        <div>
            <button onClick ={zip}>zipup</button>
            <audio controls src ={file}></audio>
        </div>
    )
}
