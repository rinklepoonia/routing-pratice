import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <div className='d-flex gap-5'>
                <Link to="/">hero</Link>
                <Link to="/portfolio">about</Link>
                <Link to="/Faq">contact</Link>
            </div>
        </div>
    )
}

export default Navbar