import React, { useEffect, useState } from 'react';
import Player from '../components/audioPlayer'
import axios from 'axios'

const Saved = ({ savedFiles, history, removeFromFavorites, removeAll }) => {

    // const [sounds, setSounds] = useState([])

    // useEffect(()=>{
    //     let favorites = localStorage.getItem('myFavorites')
    //     if (favorites) setSounds(JSON.parse(favorites))

    // },[])
    //if auth take savedfiles and post to db new schema -- remove --
    axios.get(`http://localhost:5000/profile/myfiles`).then(res => console.log(res))



    console.log(savedFiles)

    return (
        <div >
            <h1>{ savedFiles.length > 0 ? 'Saved Sounds' : 'No Saved sounds'}</h1>
            { savedFiles.length > 0 && savedFiles.map((file)=>{
                return(
                    <div style ={{ margin: '0 auto'}}>
                        <input type="text" name="fileName" value={file.name} placeholder="Name Sound"></input>
                        <Player num={file.sound}/>
                        <button onClick={()=>removeFromFavorites(file)}>Remove</button>
                    </div>
                )
            })}
            <button onClick={()=>history.push('/')}>
                Go to home
            </button>
            <button onClick={()=>removeAll()}>Remove All</button>
        </div>
    );
};

export default Saved;