
import axiosFetch from '../Axios'
import { actionTypes } from '../Context/stateReducer'





export const LoginUser = (userData) =>(dispatch)=> {
    
    dispatch({
        type:actionTypes.LOGIN_LOADING
    })
    axiosFetch().post('auth/login',userData)
    .then((response)=>{
        // console.log(response.data)
        // console.log(response.status)
        dispatch({
        type:actionTypes.SET_USER,
        payload:response.data
    })
        dispatch({
        type:actionTypes.LOGIN_SUCCESS,
        payload:response
    })
    }).catch((error)=>{
        // console.log(error)
        dispatch({
        type:actionTypes.LOGIN_ERROR,
        payload:error
        
    })
    
    
    })
}

export const userWork = (userID)=>(dispatch)=>{
    dispatch({
        type:actionTypes.WORK_LOADING
    })
    axiosFetch().get(`users/${userID}`)
    .then((response)=>{
        // console.log(response.data)
        // console.log(response.status)
        dispatch({
        type:actionTypes.WORK_SUCCESS,
        payload:response.data
    })}).catch((error)=>{
        // console.log(error)
        dispatch({
        type:actionTypes.WORK_ERROR,
        payload:error
    })
    })
}
