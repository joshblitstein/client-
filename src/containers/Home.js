import React from 'react';
import Test from '../components/test'

const Home = ({ files, history, getRandomFiles, addToFavorites }) => {

    return (
        <div>
            <h1>
                HOME
            </h1>

            <div className="sound-list">
                { files.length > 0 && files.map((file)=>{
                    return(
                        <div className='audio-player'>
                            <Test num={file}/>
                            <button onClick={()=>addToFavorites(file)}>Save</button>
                        </div>
                    )
                })}
                <button className="button-1" onClick ={getRandomFiles}>Randomize</button> 
                <button className="button-1" onClick={()=>history.push('/saved')}>
                    Go to my favorites
                </button>
            </div>

        </div>
    );
};

export default Home;