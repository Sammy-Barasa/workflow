import React, { useState,useContext,useEffect } from 'react'
import { Button, Form , Header} from 'semantic-ui-react'
import { RegisterUser } from '../API/api'
import StateContext from '../Context/stateContext';
// import FormSuccess  from "./FormSuccess"
import  FormError  from "./FormError"
import { useHistory } from 'react-router-dom'
import '../App.css'

const Register = (props) => {
    const [form,setForm]= useState({});
    const history = useHistory()
    const [redirectTrue,setRedirectTrue]= useState(false)
    const {dispatch,state}= useContext(StateContext)
    const loading = state.auth.register.loading
    const data = state.auth.register.data
    const errorMessage = state.auth.register.error
    
    
    useEffect(() => {
        // console.log(state)
        if (data?.status === 201) {
            // console.log(state)
            setRedirectTrue(true)
            setForm({})
        }else{
        // console.log(state)
        setForm({})
        }
        
    }, [data,state])

    function handleRegister(e) {
        e.preventDefault()
        delete form.confirmpassword
        RegisterUser(form)(dispatch);
        setForm({});
        // console.log(state)
    }

    const onchange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    }; 
    const registerFormInvalid =
    form?.password!==form?.confirmpassword||!form?.email?.length || !form.password || !form.password.length;
    if(redirectTrue){

        return history.push("/login")
    }

    return (
        <div className='register-form'>
            <Header as="h2">Create an account</Header>
                <Form success warning onSubmit={handleRegister}> 
                
                    {errorMessage?FormError(errorMessage):""}
                    <Form.Field>
                        <label>Email</label>
                        <input type="Email" name='email' autofocus required placeholder='Enter your email' value={form.email||""} onChange={onchange}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Username</label>
                        <input type="text" name='username' required  placeholder='Enter your username' value={form.username||""} onChange={onchange}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input type='Password' name='password' required placeholder='Enter your password' value={form.password||""} onChange={onchange}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Confirm Password</label>
                        <input type='Password' name='confirmpassword'required placeholder='Confirm your password' value={form.confirmpassword||""} onChange={onchange}/>
                    </Form.Field>
                    <Button disabled={registerFormInvalid} loading={loading} fluid primary type='submit'>Register</Button>
                </Form>
        </div>
                 
    )
}

export default Register

