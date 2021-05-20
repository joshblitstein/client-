import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAlert } from '../actions/alert'
import { register } from '../actions/auth'
import PropTypes from 'prop-types'
import axios from 'axios'

function Register ({ setAlert, register, isAuth}){

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })


        const { name, email, password, password2 } = formData


        const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

        const onSubmit = async e => {
            e.preventDefault()
            //console.log(formData)
            
            if(password !== password2){
                console.log('passwordsdontmatch')
                setAlert('buckweet', 'buns', 2500)
            }else {

                register({
                    name, email, password
                })
                console.log('circumsicion')

               
            }

        }

        if(isAuth){
           
            return <Redirect to ='/'/>
        }
    

    return (
        <div>
          <h1>Sign up</h1>
          <form onSubmit={e => onSubmit(e)}>
              <input type="text" placeholder='name preeze' name='name' value={name} onChange={e => onChange(e)}></input>
              <input type="email" placeholder='email' name='email' value={email} onChange={e => onChange(e)}></input>
              <input type="password" placeholder='password' name='password' value={password} onChange={e => onChange(e)}></input>
              <input type="password" placeholder='confirm password' name='password2' value={password2} onChange={e => onChange(e)}></input>
              <input type='submit'></input>
          </form>
        </div>
    )
}

Register.propTypes = { 
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuth: PropTypes.bool,
}
const mapStateToProps = state =>(
    {isAuth: state.auth.isAuthenticated}
)

export default connect(mapStateToProps, { setAlert, register })(Register);