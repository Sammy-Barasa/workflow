// import { useContext } from 'react'
// import StateContext from '../Context/stateContext'



const Auth = {


        authenticated:false,
    
authenticate(){
    
    this.authenticated=true  
},
signOut(){
    
    localStorage.removeItem('token')
    this.authenticated= false
    
},

isAuthenticated(){
    return this.authenticated
}
}

export default Auth