// import { useContext } from 'react'
// import StateContext from '../Context/stateContext'



class Auth {

    constructor(){
        this.authenticated = false
    }
authenticate(){
    
    this.authenticated= true   
}

signOut(){
    
    localStorage.removeItem('token')
    this.authenticated= false
    
}

isAuthenticated(){
    return this.authenticated
}
}

export default new Auth()