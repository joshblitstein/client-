import React from 'react';
import Player from '../components/audioPlayer'


const Saved = ({ savedFiles, history, removeFromFavorites, removeAllFromFavorities }) => {
    return (
        <div>
            <h1>{ savedFiles.length > 0 ? 'Saved Sounds' : 'No Saved sounds'}</h1>
            { savedFiles.length > 0 && savedFiles.map((file)=>{
                return(
                    <div>
                        <Player num={file}/>
                        <button onClick={()=>removeFromFavorites(file)}>Remove</button>
                    </div>
                )
            })}
            <button onClick={()=>history.push('/')}>
                Go to home
            </button>
            <button onClick={()=>removeAllFromFavorities}>Remove All</button>
        </div>
    );
};

export default Saved;