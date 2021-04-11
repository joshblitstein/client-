import React, { useEffect, useState } from 'react';
import Test from '../components/test'

const Home = ({ files, history, getRandomFiles, addToFavorites }) => {

console.log(files)



    return (
        <div>
            <h1>
                HOME
            </h1>

            { 
     
            files.length > 0 && files.map((file)=>{
               
                return(
                    <div>
                        <Test num={file} />
                        <button onClick={()=>addToFavorites(file)}>Save</button>
                    </div>
                )
            })} 
            <button onClick ={getRandomFiles}>Randomize</button> 
            <button onClick={()=>history.push('/saved')}>
                Go to my favorites
            </button>
        </div>
    );
};

export default Home;