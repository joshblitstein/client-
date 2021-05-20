import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../actions/auth'
import './NavBar.css'
import logo from './D2.png'


const  NavBar = ({ auth: {isAuthenticated, loading}, logout}) => {

    const authLinks = (
        <ul className ='listel'>  
            <li className ='list'>
                {/*  <a    href='/zip'><img className='logo'  src = {logo}/></a> */}
                        <Link id='text' className='text' to = '/'>
                        Home/lg 
                        </Link>
                    </li>
                    <li className = 'list'>
                        <Link className ='text' id='list' to = '/saved'>
                        my sounds
                        </Link>
                    </li>
                   
                    <a onClick ={logout} href ='#!' className='log'>logout</a>
                </ul>
    ); 

    const guestLinks = (<div>
        {/* <a    href='/zip'><img className='logo'  src = {logo}/></a> */}
        <ul className='listel'>
   
            <li className ='list'>
                        <Link  id='text' className='text' to = '/'>
                        Home/lg 
                        </Link>
                    </li>
                    <li className ='list'>
                        <Link id='text' className='text' to = '/saved'>
                        my sounds
                        </Link>
                    </li>
                    <li className= 'list'>
                        <Link id='text' className='text' to = '/register'>
                        register
                        </Link>
                    </li>
                    <li className= 'list'>
                        <Link id='text' className='text' to = '/login'>
                        login
                        </Link>
                    </li>
                </ul>
                </div>
    );




    return (
        <div>
            <nav className ='nav'>
               {/*  <h1>
                    <Link to ='/'>
                   home
                    </Link>
                </h1> */}
                { !loading && <Fragment>{ isAuthenticated ? authLinks : guestLinks }</Fragment>}
        
            </nav>
        </div>
    )

}

NavBar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
}


const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logout })(NavBar)