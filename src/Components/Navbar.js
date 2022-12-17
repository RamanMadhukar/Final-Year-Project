import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/Home.css'


const Navbar = () => {
    return (
        <>
            <div className="navBar position-fixed">
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="vw-100 d-flex justify-content-around">
                        <Link className="navbar-brand" to='/'>Disease Tracker</Link>
                        <div className="navbar-nav">
                            <li className='nav-item'>
                                <Link to='/' className='nav-link'>Home</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/form' className='nav-link'>Sign In</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/' className='nav-link'>Sign Up</Link>
                            </li>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar