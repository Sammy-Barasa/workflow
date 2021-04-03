import React, {useContext,useState,useEffect}from 'react'
import StateContext from '../Context/stateContext';
import { Button, Form, Icon } from 'semantic-ui-react'
import {UpdatePerson,GetUsersPersons} from '../API/api'
import { useHistory } from "react-router-dom"
import  FormError  from "./FormError"
import { actionTypes } from '../Context/stateReducer'

const PersonEdit = (props) => {

    const {dispatch,state}= useContext(StateContext)
    const history = useHistory()
    const[form,setForm] = useState(state.person.data.find(element=>{
            // eslint-disable-next-line
            return element.id==workId}))

    const loading =state.personupdate.loading
    const error = state.personupdate.error
    const personId=props.match.params.id
    const userId = state.user.id
    async function handleEdit(e) {
        e.preventDefault();
        // console.log(form);
        UpdatePerson(userId,personId,form)(dispatch);
        
        // console.log(state)
        history.goBack()
        
    }
    useEffect(()=>{
        GetUsersPersons(userId)(dispatch)
            dispatch({
                type:actionTypes.UPDATE_WORK_COMPLETE,
            })
            history.goBack()
    },[dispatch, history, loading, userId])
    function onchange(e) {
        setForm((form) => {
            return {
                ...form,
                [e.target.name]: e.target.value
            };
        });
    }


    return (
        <div>
            <h2>Add person to your records</h2>
            <Form success warning onSubmit={handleEdit}> 
                
                    {error?FormError(error):""}
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

export default PersonEdit
