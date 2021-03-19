
import axiosFetch from '../Axios'
import { actionTypes } from '../Context/stateReducer'



export const RegisterUser = (userData) =>(dispatch)=> {
    
    dispatch({
        type:actionTypes.REGISTER_LOADING
    })
    axiosFetch().post('auth/register',userData)
    .then((response)=>{
        console.log(response.data)
        // console.log(response.status)
        dispatch({
        type:actionTypes.REGISTER_SUCCESS,
        payload:response
    })
    }).catch((error)=>{
        console.log(error)
        dispatch({
        type:actionTypes.REGISTER_ERROR,
        payload:error
        
    })  
    })
}

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

export const UsersWork = (userID)=>(dispatch)=>{
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

export const CreateWork = (userid,workData) =>(dispatch)=> {
    
    dispatch({
        type:actionTypes.CREATE_WORK_LOADING
    })
    workData.user=userid
    axiosFetch().post(`users/${userid}/`,workData)
    .then((response)=>{
        // console.log(response.data)
        // console.log(response.status)
        dispatch({
        type:actionTypes.CREATE_WORK_SUCCESS,
        payload:response
    })
    })
    .catch((error)=>{
        // console.log(error)
        dispatch({
        type:actionTypes.CREATE_WORK_ERROR,
        payload:error
        
    })  
    })
}

export const UpdateWork = (workID,workData) =>(dispatch)=> {
    
    dispatch({
        type:actionTypes.UPDATE_WORK_LOADING
    })
    axiosFetch().put(`works/${workID}/`,workData)
    .then((response)=>{
        console.log(response.data)
        // console.log(response.status)
        dispatch({
        type:actionTypes.UPDATE_WORK_SUCCESS,
        payload:response.data
    })
    }).catch((error)=>{
        console.log(error)
        dispatch({
        type:actionTypes.UPDATE_WORK_ERROR,
        payload:error
        
    })  
    })
}

export const CreatePerson = (personData) =>(dispatch)=> {
    
    dispatch({
        type:actionTypes.CREATE_PERSON_LOADING
    })
    axiosFetch().post('/persons/',personData)
    .then((response)=>{
        // console.log(response.data)
        // console.log(response.status)
        dispatch({
        type:actionTypes.CREATE_PERSON_SUCCESS,
        payload:response.data
    })
    }).catch((error)=>{
        // console.log(error)
        dispatch({
        type:actionTypes.CREATE_PERSON_ERROR,
        payload:error
        
    })  
    })
}

export const UpdatePerson = (personID,personData) =>(dispatch)=> {
    
    dispatch({
        type:actionTypes.UPDATE_PERSON_LOADING
    })
    axiosFetch().put(`persons/${personID}/`,personData)
    .then((response)=>{
        // console.log(response.data)
        // console.log(response.status)
        dispatch({
        type:actionTypes.UPDATE_PERSON_SUCCESS,
        payload:response
    })
    }).catch((error)=>{
        // console.log(error)
        dispatch({
        type:actionTypes.UPDATE_PERSON_ERROR,
        payload:error
        
    })  
    })
}