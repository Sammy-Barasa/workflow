// import { useContext } from 'react'
// import StateContext from '../Context/stateContext'



const Auth = {


        authenticated:false,
    
authenticate(){
    if(localStorage.getItem("token")){
        this.authenticated=true  
    }
},
signOut(){
    
    if(!localStorage.getItem("token")){
     this.authenticated= false
    }
},

isAuthenticated(){
    return this.authenticated
}
}

export default Auth