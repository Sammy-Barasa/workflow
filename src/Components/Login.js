import React, { useState,useContext,useEffect } from 'react'
import { Button, Form , Header} from 'semantic-ui-react'
import { LoginUser,UsersWork,GetUsersPersons,GetWorkOptions } from '../API/api'
import StateContext from '../Context/stateContext';
import { useHistory } from "react-router-dom"
// import FormSuccess  from "./FormSuccess"
import  FormError  from "./FormError"
import Auth from '../Utils/Auth'
import { Link } from 'react-router-dom'
import '../App.css'

const Login = () => {
    const [form,setForm]= useState({});
    const [redirectTrue,setRedirectTrue]= useState(false)
    const [userName,setUserName]=useState(null)
    const {dispatch,state}= useContext(StateContext)
    const history = useHistory()
    const loading = state.auth.login.loading
    const data = state.auth.login.data
    const errorMessage = state.auth.login.error
    
    
    useEffect(() => {
        // console.log(state)
        if (data?.status === 200) {
            window.localStorage.setItem("token", data.data.tokens.access);
            Auth.authenticate()
            // console.log(state)
            const username= data.data.username
            setUserName(username)
            setRedirectTrue(true)
            setForm({})
            
        }else{
        // console.log(state)
        setForm({})
        }
        
    }, [data, history, state])

    function handleLogin(e) {
        e.preventDefault()
        LoginUser(form)(dispatch);
        setForm({});
        // console.log(state)
    }

    const onchange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    }; 
    const loginFormInvalid =
    !form?.email?.length || !form.password || !form.password.length;
    if(redirectTrue){
        UsersWork(state.user.id)(dispatch)
        GetUsersPersons(state.user.id)(dispatch)
        GetWorkOptions()(dispatch)
        history.push(`/users/${userName}`)
    }

    return (
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
                 
    )
}

export default Login

