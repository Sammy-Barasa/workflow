import React, { useEffect,useContext } from 'react'
import { userWork } from '../API/api'
import StateContext from '../Context/stateContext'

const WorkList = () => {
    const { state, dispatch } = useContext(StateContext)
    const user = state.user
    useEffect(() => {
        userWork(user.id)(dispatch)
    },[dispatch, user.id])
    return (
        <div>
            <h1>Work list</h1>
            
        </div>
    )
}

export default WorkList
