import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { login } from '../actions/auth'
import axios from 'axios'


const Login = ( { login, isAuth } ) =>{


    const [formData, setFormData] = useState({
       
        email: '',
        password: ''  
    })
    const [userFiles, setUserFiles] = useState('')
   

        const {  email, password } = formData

        
        const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

        const onSubmit = e => {
            e.preventDefault();
          login(email, password);
            
        }
        
        console.log(userFiles)

        if(isAuth){

       
            
        axios.get(`http://localhost:5000/profile/myfiles`).then(res =>console.log(res))
        .then(data => setUserFiles(data))
        return <Redirect to="/"/>

            
        }
    
    return (
        <div>
            <div>
          <h1>log in</h1>
          <form onSubmit={e => onSubmit(e)}>
              
              <input type="email" placeholder='email' name='email' value={email} onChange={e => onChange(e)}></input>
              <input type="password" placeholder='password' name='password' value={password} onChange={e => onChange(e)}></input>
              <input type='submit'></input>
          </form>
        </div>
        </div>
    ) 


};


Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuth: PropTypes.bool,
};

const mapStateToProps = state =>(
    {isAuth: state.auth.isAuthenticated}
)

export default connect(mapStateToProps,{ login }) (Login);