import React, { useState,useContext,useEffect } from 'react'
import { Button, Form , Grid, Header} from 'semantic-ui-react'
import {LoginUser} from '../API/api'
import StateContext from '../Context/stateContext';
import { useHistory } from "react-router-dom"
import FormSuccess  from "./FormSuccess"
import  FormError  from "./FormError"

const Login = () => {
    const [form,setForm]= useState({});
    const {dispatch,state}= useContext(StateContext)
    const history = useHistory()
    const loading = state.auth.login.loading
    const data = state.auth.login.data
    const errorMessage = state.auth.login.error
    
    useEffect(() => {
        if (data?.status === 200) {
            localStorage.setItem("token", data.data?.tokens.access);
            const username= data.data.username
            history.push(`${username}`);
        }
    }, [data,history])

    const onSubmit = (e)=>{
        LoginUser(form)(dispatch)
        setForm({})
    }

    const onchange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    }; 
    const loginFormInvalid =
    !form?.email?.length || !form.password || !form.password.length;
    
    return (
        <Grid  textAlign="center" centered verticalAlign="middle">
            <Grid.Column style={{ maxWidth: 550,}} >
                <Header as="h2">Login to your account</Header>
                <Form>
                    {errorMessage?FormError(errorMessage):""}
                    <Form.Field>
                        <label>Email</label>
                        <input type="Email" name='email' placeholder='email' value={form.email} onChange={onchange}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input type='Password' name='password' placeholder='password' value={form.password} onChange={onchange}/>
                    </Form.Field>
                    <Button disabled={loginFormInvalid} loading={loading} fluid primary type='submit' onClick={onSubmit}>Login</Button>
                </Form>
            </Grid.Column>
        </Grid>
    )
}

export default Login
