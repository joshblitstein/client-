import React, { useState } from 'react';
import FavoriteAudio from '../components/favoriteAudio'

const Home = ({ files, history, getRandomFiles, addToFavorites }) => {

    return (
        <div>
            <h1>
                HOME
            </h1>

            <div className="sound-list">
                <div style={{ margin: '0 auto'}}>
                    { files.length > 0 && files.map((file)=>{
                        return(
                            <FavoriteAudio key={file} file={file} addToFavorites={addToFavorites} />
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