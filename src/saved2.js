import React from 'react'
import { Saved } from './saved'

export function NewSaved(props){

//go through array of nums and for each render saved at fetch 
console.log(props.savedNum)

function log(){
    console.log(props.savedNum)
}
    return (
        <div>
            <Saved fetch ={props.savedNum} />
            <button onClick ={log}>My Saved</button>
        </div>
    )
}