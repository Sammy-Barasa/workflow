import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton'
import '../App.css'

const SinglelistSkeleton = () => {
    return (
        <div className="skeleton"> 
            
            {/* <Skeleton variant='text' width={400} height={20} animation='wave'/>   */}
            <Skeleton variant='text' animation='wave'/>
            <Skeleton variant='rect' width={400} height={300} animation='wave'/>
            <Skeleton variant='rect' width={400} height={20} animation='wave'/>
            <Skeleton variant='text'/>

        </div>
    )
}

export default SinglelistSkeleton
