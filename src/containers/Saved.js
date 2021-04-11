import React from 'react';
import Test from '../components/test'


const Saved = ({ savedFiles, history, removeFromFavorites }) => {
    return (
        <div>
            <h1>{ savedFiles.length > 0 ? 'Saved Sounds' : 'No Saved sounds'}</h1>
            { savedFiles.length > 0 && savedFiles.map((file)=>{
                return(
                    <div>
                        <Test num={file}/>
                        <button onClick={()=>removeFromFavorites(file)}>Remove</button>
                    </div>
                )
            })}
            <button onClick={()=>history.push('/')}>
                Go to home
            </button>
        </div>
    );
};

export default Saved;