import React from 'react'
import { Link }from 'react-router-dom'

const Navigation = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to='/user'>work list</Link>
                </li>
                <li>
                    <Link to='/:id'>User work list</Link>
                </li>
                <li>
                    <Link to='/login'>login</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navigation
