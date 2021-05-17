import React, { useState,useContext,useEffect } from 'react'
import { Button, Form , Header} from 'semantic-ui-react'
import { LoginUser } from '../API/api'
import StateContext from '../Context/stateContext';
import { useHistory,Redirect } from "react-router-dom"
// import FormSuccess  from "./FormSuccess"
import  FormError  from "./FormError"
import Auth from '../Utils/Auth'
import { Link } from 'react-router-dom'
import {InfoFunc} from '../Utils/InfoFunc'
import { actionTypes } from '../Context/stateReducer'
import '../App.css'



const Login = (props) => {
    const [form,setForm]= useState({});
    const [redirectTrue,setRedirectTrue]= useState(false)
    // const [userName,setUserName]=useState(null)
    const {dispatch,state}= useContext(StateContext)
    const history = useHistory()
    const loading = state.auth.login.loading
    const data = state.auth.login.data
    const errorMessage = state.auth.login.error
    const fromRoute = props.location?.state.from
    
    
    useEffect(() => {
        if (data?.status === 200) {
            setRedirectTrue(true)
            // dispatch({
            //     type:actionTypes.LOGIN_COMPLETE
            // })
        }
        
    }, [data?.status])

    function handleLogin(e) {
        e.preventDefault()
        LoginUser(form)(dispatch);
        setForm({});
        
    }

    const onchange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    }; 
    const loginFormInvalid =
    !form?.email?.length || !form.password || !form.password.length;

    
    if(redirectTrue){
        window.localStorage.setItem("token", data?.data.tokens.access);
        Auth.authenticate()
        InfoFunc( state.user.id,dispatch)
        history.push(`/users/${state.user.username}`)
        
    }
    if(fromRoute){
        return <Redirect to={fromRoute.pathname}/>
    }
    return (
        <div className='App-body'>
            <div className='login-form'>
                    <Header as="h2">Login to your account</Header>
                    <Form success warning onSubmit={handleLogin}> 
                    
                        {errorMessage?FormError(errorMessage):""}
                        <Form.Field>
                            <label>Email</label>
                            <input type="Email" fluid name='email' placeholder='Enter your email' value={form.email||""} onChange={onchange}/>
                        </Form.Field>
                        <Form.Field>
                            <label>Password</label>
                            <input type='Password' name='password' placeholder='Enter your password' value={form.password||""} onChange={onchange}/>
                        </Form.Field>
                        <Button disabled={loginFormInvalid} fluid loading={loading} primary type='submit'>Login</Button>
                    </Form>
                    <div>
                        <p>Dont have an account? <Link to="/register">Register here</Link></p>
                    </div>
                    
            </div>
        </div>
                 
    )
}

export default Login

