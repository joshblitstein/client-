import React from 'react'

export default function MyPath() {



    return (
         <div>
            <h1>Dir upload</h1>
            <form method = 'POST' action='http://localhost:5000/hi/upload' encType='multipart/form-data' >
            <input id="filepicker" type='file' name='file' webkitdirectory="true" ></input>
            
                <input type='submit' value='Submit'></input>
              
            </form>
        </div> 
    )
}
