import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../actions/auth'


const  NavBar = ({ auth: {isAuthenticated, loading}, logout}) => {

    const authLinks = (
        <ul>
                    <li>
                        <Link to = '/saved'>
                        my sounds
                        </Link>
                    </li>
                   
                    <a onClick ={logout} href ='#!'>logout</a>
                </ul>
    );

    const guestLinks = (
        <ul>
                    <li>
                        <Link to = '/saved'>
                        my sounds
                        </Link>
                    </li>
                    <li>
                        <Link to = '/register'>
                        register
                        </Link>
                    </li>
                    <li>
                        <Link to = '/login'>
                        login
                        </Link>
                    </li>
                </ul>
    );




    return (
        <div>
            <nav>
                <h1>
                    <Link to ='/'>
                   home
                    </Link>
                </h1>
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