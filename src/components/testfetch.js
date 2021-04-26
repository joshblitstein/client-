import { useState, useEffect } from "react"
import React from 'react'
import AudioPlayer from 'react-h5-audio-player'



export default function Testfetch() {

    const [arr, setArr] = useState('')


    useEffect(()=>{
        getData();
    }, [arr])


function getData(){
    fetch(`http://localhost:5000/hi/random`)
    .then((res) =>res.url)
    .then(data => setArr(data))
}
console.log(arr)



return (
    <div>

    </div>
)

    /* return (
        <div>
           { arr.map((file)=>{ 
        return ( 
            <AudioPlayer src={file} />
        ) 
    }
)}
        </div>
    ) */
}
