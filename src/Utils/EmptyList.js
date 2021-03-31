import React from 'react'
import '../App.css'

const EmptyList = ({list}) => {
    return (
        <div className="empty-list">
            <h3>{`You have no ${list} yet, click add button to add`}</h3>
        </div>
    )
}

export default EmptyList
