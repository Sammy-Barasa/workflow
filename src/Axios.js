  
import axios from "axios";
import Cookies from "js-cookie";


const axiosFetch = ()=>{
    const userToken = localStorage.getItem("usertoken")
    let headers ={}
    const csrftoken = Cookies.get("csrftoken")
    
    if(userToken){
        headers.Authorisation = `Bearer ${userToken}`
    }
    if(csrftoken){
        headers['X-CSRFToken'] = `${csrftoken}`
    }
    
    const axiosInstance = axios.create({
        baseURL:"https://work-record-manager.herokuapp.com/",
        credentials: "same-origin",
        headers:headers,
    })
    axiosInstance.defaults.headers.common.accept = 'application/json'
    return  axiosInstance
}

export default axiosFetch
