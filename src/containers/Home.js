import React, { useState, useEffect } from 'react';
import FavoriteAudio from '../components/favoriteAudio'
import { Container, Row, Col } from 'react-bootstrap'

const Home = ({ files, history, getRandomFiles, addToFavorites }) => {

    
     
    return ( 
    <Container fluid>
        <div>
            
           
            <div className="sound-list">
    
                <div className='wrapper'style={{ margin: '0 auto'}}>
                
                    
                        
                             
                    { files.length > 0 && files.map((file)=>{
                        return(     
                      
                        <div className='rows'>
                        
                            <FavoriteAudio key={file} file={file} addToFavorites={addToFavorites} />
                   
                           
                            </div>
                            
                        )
                    })}
                       
                    
                   
                  
                  
                
               
                </div>
             
                <button className="button-1" onClick ={getRandomFiles}>Randomize</button> 
                
            </div>
          

        </div>
          </Container>
    );
};

export default Home;