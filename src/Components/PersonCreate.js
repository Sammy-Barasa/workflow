import React,{useState,useContext} from 'react'
import StateContext from '../Context/stateContext';
import { Button, Form, Icon } from 'semantic-ui-react'
import {CreatePerson,GetUsersPersons} from '../API/api'
import { useHistory } from "react-router-dom"
import  FormError  from "./FormError"

const PersonCreate = (props) => {

    const {dispatch,state}= useContext(StateContext)
    const history = useHistory()
    const[form,setForm] = useState({})
    const loading = state.persons.loading
    const errorMessage = state.persons.error
    const userId = state.user.id

    async function handleCreate(e) {
        e.preventDefault();
        // console.log(form);
        CreatePerson(userId, form)(dispatch);
        GetUsersPersons(userId)(dispatch)
        // console.log(state)
        history.goBack()
        
    }

    function onchange(e) {
        setForm((form) => {
            return {
                ...form,
                [e.target.name]: e.target.value
            };
        });
    }

    return (
        <div className="person-create">
            <h2>Add person to your records</h2>
            <Form success warning onSubmit={handleCreate}> 
                
                    {errorMessage?FormError(errorMessage):""}
                    <Form.Field>
                        <label>Name</label>
                        <input type="text" name='name' placeholder='Name of the person' value={form.name} onChange={onchange}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Email</label>
                        <input type='email' name='email' placeholder='Email of the person' value={form.email} onChange={onchange}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Phone number</label>
                        <input type='number' name='phone' placeholder='Phone number of the person' value={form.phone} onChange={onchange}/>
                    </Form.Field>
                    <Button  loading={loading} fluid primary type='submit'><Icon name="plus" size="small"/>Add person</Button>
            </Form>
        </div>
    )
}

export default PersonCreate
