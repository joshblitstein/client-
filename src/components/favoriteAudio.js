import React, { useState } from 'react';
import Player from './audioPlayer'

const FavoriteAudio = ({ file, addToFavorites }) => {

    const [fileName, seFileName] = useState('')

    const handeChange = (e) =>{
        seFileName(e.target.value)
    }

    return (
        <div className='audio-player'>
            <input type="text" name="fileName" value={fileName} placeholder="Name Sound" onChange={(e)=>handeChange(e)}></input>
            <Player num={file}/>
            <button disabled={ fileName === '' } onClick={()=>addToFavorites(file, fileName)}>Save</button>
        </div>
    );
};

export default FavoriteAudio;