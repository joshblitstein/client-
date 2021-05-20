import axios from 'axios'
import { setAlert } from './alert'
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_FAILED,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT
} from './types'
import setAuthToken from '../utils/setauthtoken'

export const loadUser = () => async dispatch => {
    if(localStorage.token){
        setAuthToken(localStorage.token)
        
}
try {
    const res = await axios.get('http://localhost:5000/auth/auth')
    dispatch({
        type: USER_LOADED,
        payload: res.data
    })
} catch (error) {
    dispatch({
        type: AUTH_FAILED
    })
}

}


export const register = ({ name, email, password}) => async dispatch => {
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }
    const body = JSON.stringify({ name, email, password});

    try {
        const res = await axios.post('http://localhost:5000/users/user', body, config)
 

       

        
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
        dispatch(loadUser());

  await axios.post(`http://localhost:5000/profile`, {
            "files":  
              {
                "fileName": 'first',
                "number": 1
              }
            
        }
        ).then(res => console.log(res))  







    } catch (error) {
        const errors = error.response.data.errors

        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'buns')))
        }


        dispatch({
            type: REGISTER_FAIL
        })
    }

   
};

 

//login
export  const login = (email, password ) => async dispatch => {
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    };
    const body = JSON.stringify({ email, password });

    try {
        const res = await axios.post('http://localhost:5000/auth/auth', body, config)
        //console.log(body)
      
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
     // console.log(res)
    
        dispatch(loadUser());
    } catch (error) {
        const errors = error.response.data.errors

        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'buns')))
        }


        dispatch({
            type: LOGIN_FAIL
        })
    }

   
};

//logout

export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT
    })
}