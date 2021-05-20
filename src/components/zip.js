import React, { useState, useEffect } from 'react'

import JSZip from "jszip"
import { saveAs } from 'file-saver'
import JSZipUtils from 'jszip-utils'
import download from 'downloadjs'

export default function Zip({number}) {

    const [file, setFiles] = useState('');


   /*   useEffect(()=>{
        getData(); 
    }, [number])

     function getData(){
        fetch(`http://localhost:5000/hi/static/${number}.mp3`)
        .then((res) =>res.url)
        .then(data =>setFiles(data))       
    }  */


  /*   async function get(){

    const audUrl = await fetch(`http://localhost:5000/hi/static/${number}.mp3`).then(res =>res.blob()).then(data =>setFiles(data))

    



    function urlToPromise(audUrl) {
        return new Promise(function(resolve, reject) {
            JSZipUtils.getBinaryContent(audUrl, function (err, data) {
                if(err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
        }
        var zip = new JSZip();
        zip.file('beep.mp3', urlToPromise(audUrl), {binary:true});
        zip.generateAsync({type:"blob"})
        .then(function callback(blob) {
        
            // see FileSaver.js
            saveAs(blob, "example.zip");
        });
     let audData = new File([audUrl], 'peep.mp3');
        console.log(audData)
    let zip = new JSZip();
    zip.file('Hello.txt', 'Hello World\n');
    let img = zip.folder('images');
    img.file('smile.mp3', audData, { base64: true });
    zip.generateAsync({ type: 'blob' }).then(function(content) {
      saveAs(content, 'example.zip');
    }); 
  } */


  /*   let reader = new FileReader

    console.log(file)
   let soundFile = new File([file], '1.mp3')
   let newSound = reader.readAsDataURL(soundFile)
  //  console.log(soundFile.size)
  console.log(soundFile)
     function zip(){ 
    const zip = new JSZip();
     
    const aud = zip.folder('peter')
      
      

    
        console.log(newSound)
    aud.file('1.mp3',newSound, {base64: true} ) 
        
    zip.generateAsync({type:"blob"}).then(function(content) {
        // see FileSaver.js
        saveAs(content, "example.zip");
    });} 

} */
 

   /*  function zip(){
        new JSZip.external.Promise(function (resolve, reject) {
            JSZipUtils.getBinaryContent(file, function(err, file) {
                if (err) {
                    reject(err);
                } else {
                    resolve(file);
                }
            });
        }).then(function (data) {
            return JSZip.loadAsync(data);
        })
        .then(file =>console.log(file))
    } */


    let zip = new JSZip

   



  /*  function down(){
    let x = new XMLHttpRequest();
    x.open( "GET", `http://localhost:5000/hi/static/${number}.mp3` , true);
    x.responseType="blob";
    x.onload= function(e){download(e.target.response, "1.mp3", "audio/mpeg");};
    x.send();
   }  */
    


   function down(){
    let x = new XMLHttpRequest();
    x.open( "GET", `http://localhost:5000/hi/static/${number}.mp3` , true);
    x.responseType="blob";
    x.onload= function(e){download(zip.folder('nested').file('1.mp3', e.target.response));};
    x.send();
   } 
    






    return (
        <div>
            <button onClick ={down}>zipup</button>
            <audio controls src ={`http://localhost:5000/hi/static/${number}.mp3`}></audio>
         <a href={file}></a>
        </div>
    )
}
