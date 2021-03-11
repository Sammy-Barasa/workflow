// import { useContext } from 'react'
// import StateContext from '../Context/stateContext'



class Auth {

    constructor(){
        this.authenticated = false
    }
authenticate(){
    const userToken=localStorage.getItem('token')
    if(userToken){
    this.authenticated= true 
    }
    this.authenticated= true   
}

signOut(){
    const userToken=localStorage.getItem('token')
    if(!userToken){
    this.authenticated= true     
    }
    localStorage.removeItem('token')
    this.authenticated= false
    
}

isAuthenticated(){
    return this.authenticated
}
}

export default new Auth()