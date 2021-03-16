import React, { useState,useContext,useEffect } from 'react'
import { Button, Form,Checkbox } from 'semantic-ui-react'
import {CreateWork} from '../API/api'
import StateContext from '../Context/stateContext';
import { useHistory } from "react-router-dom"
import  FormError  from "./FormError"


const WorkCreate = () => {

    const [form,setForm]= useState({});
    const {dispatch,state}= useContext(StateContext)
    const history = useHistory()
    const loading = state.workcreate.loading
    const data = state.workcreate.data
    const errorMessage = state.workcreate.error
    
    
    
    useEffect(() => {
        console.log(state)
        if (data?.status === 200) {
            const username= state.user.username
            setForm({})
            history.push(`users/${username}`)  
        }else{
        console.log(state)
        setForm({})
        }
        
    }, [data, history, state])

    function handleCreate(e) {
        e.preventDefault()
        CreateWork(state.user.id,form)(dispatch);
        setForm({});
        console.log(state)
    }

    const onchange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    }; 
    const workcreateFormInvalid =
    !form?.topic?.length || !form.password || !form.password.length;
    return (
        <div className="work-create">
            <h2>Create Work Record</h2>
            <Form success warning onSubmit={handleCreate}> 
                
                    {errorMessage?FormError(errorMessage):""}
                    <Form.Field>
                        <label>Topic</label>
                        <input type="text" name='topic' placeholder='Topic order falls in' value={form.topic} onChange={onchange}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Person</label>
                        <input type='text' name='person' placeholder='Person who assigned the order' value={form.person} onChange={onchange}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Type of work</label>
                        <input type='text' name='type_of_work' placeholder='Type of work e.g writing ...' value={form.type_of_work} onChange={onchange}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Order number</label>
                        <input type='text' name='order_number' placeholder='Order number... (optional)' value={form.order_number} onChange={onchange}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Number of pages</label>
                        <input type='number' name='pages' placeholder='Number of pages' value={form.pages||0} onChange={onchange}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Number of words</label>
                        <input type='number' name='number_of_words' placeholder='number of words... (optional)' value={form.number_of_words||0} onChange={onchange}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Expected amount</label>
                        <input type='number' name='expected_amount' placeholder='Expected amount when completed' value={form.expected_amount} onChange={onchange}/>
                    </Form.Field>
                    <Form.Field >
                        <Checkbox name="cancelled" label="Cancelled" value={form.cancelled}/>
                    </Form.Field>
                    <Form.Field >
                        <Checkbox name="completed" label="Completed" value={form.completed}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Amount received</label>
                        <input type='number' name='amount_received' placeholder='Amount received... (optional)' value={form.amount_received||0} onChange={onchange}/>
                    </Form.Field>
                    <Form.Field >
                        <Checkbox name="paid" label="Paid" value={form.paid}/>
                    </Form.Field>
                    <Button disabled={workcreateFormInvalid} loading={loading} fluid primary type='submit'>Add work order</Button>
                </Form>
                <div>
                </div>
        </div>
    )
}

export default WorkCreate
