import React from 'react'
import { Link }from 'react-router-dom'

const Navigation = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to='/register'>Register</Link>
                </li>
                <li>
                    <Link to='/login'>login</Link>
                </li>

            </ul>
        </div>
    )
}

export default Navigation
