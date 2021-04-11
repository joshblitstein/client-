import React, { useState } from 'react';
import Player from '../components/audioPlayer'

const Home = ({ files, history, getRandomFiles, addToFavorites }) => {

    const [fileName, seFileName] = useState('')

    return (
        <div>
            <h1>
                HOME
            </h1>

            <div className="sound-list">
                <div style={{ margin: '0 auto'}}>
                    { files.length > 0 && files.map((file)=>{
                        return(
                            <div className='audio-player'>
                                <input type="text" name="fileName" value={fileName} placeholder="Name Sound"></input>
                                <Player num={file}/>
                                <button onClick={()=>addToFavorites(file)}>Save</button>
                            </div>
                        )
                    })}
                </div>
                <button className="button-1" onClick ={getRandomFiles}>Randomize</button> 
                <button className="button-1" onClick={()=>history.push('/saved')}>
                    Go to my favorites
                </button>
            </div>

        </div>
    );
};

export default Home;