import React, { useEffect, useState } from 'react';
import Player from '../components/audioPlayer'


const Saved = ({ savedFiles, history, removeFromFavorites, removeAll }) => {

    // const [sounds, setSounds] = useState([])

    // useEffect(()=>{
    //     let favorites = localStorage.getItem('myFavorites')
    //     if (favorites) setSounds(JSON.parse(favorites))

    // },[])

    return (
        <div>
            <h1>{ savedFiles.length > 0 ? 'Saved Sounds' : 'No Saved sounds'}</h1>
            { savedFiles.length > 0 && savedFiles.map((file)=>{
                return(
                    <div>
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