import { useState, useEffect } from "react"
import React from 'react'
import AudioPlayer from 'react-h5-audio-player'
import axios from 'axios'



export default function Testfetch() {

    const [arr, setArr] = useState('')


    useEffect(()=>{
        getDat();
    }, [])


   function getDat() {

        axios({
            method: 'get',
            url: `http://localhost:5000/hi/random`,
        })
        .then(res=>setArr(res.data))
        .catch(err => console.error(err))
    }


function getData(){
    fetch(`http://localhost:5000/hi/keep`)
    .then((res) =>res.url)
    .then(data => setArr(data))
}
 arr.length > 0 && console.log(arr)



 return (
    <div>
       { 
     
       arr.length > 0 &&  <AudioPlayer  src={arr[2]} autoPlayAfterSrcChange = {false}/>
        }
        <audio controls src={arr[0]}></audio>
           <button onClick ={getDat}>click</button>
    </div> 
) 

  /*    return (
        <div>
           { arr.lenth > 0 && arr.map((file)=>{ 
        return ( 
            <AudioPlayer src={file} key={file} />
        ) 
    } 
   
)} 



        </div>
    )  */
}
