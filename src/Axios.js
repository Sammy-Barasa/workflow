  
import axios from "axios";
import Cookies from "js-cookie";


const axiosFetch = ()=>{
    const userToken = localStorage.getItem("token")
    let headers ={
        "Authorization":"",
        "X-CSRFToken":"",
        'X-Requested-With': 'XMLHttpRequest',
        }
    const csrftoken = Cookies.get("csrftoken")
    
    console.log(csrftoken)
    
    if(userToken){
        headers.Authorization = `Bearer ${userToken}`
    }else{
        delete headers["Authorization"]
    }
    if(csrftoken){
        headers["X-CSRFToken"] = `${csrftoken}`
    }else{
        delete headers["X-CSRFToken"]
    }
    console.log(headers)
    const axiosInstance = axios.create({
        // "https://work-record-manager.herokuapp.com"
        // http://127.0.0.1:8000
        baseURL:"https://work-record-manager.herokuapp.com",
        // credentials: "same-origin",
        headers:headers,
    })
    axiosInstance.defaults.headers.common.accept = 'application/json'
    return  axiosInstance
}

export default axiosFetch
