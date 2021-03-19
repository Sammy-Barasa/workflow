import React,{useState, useContext,useEffect} from 'react'
 
import { Button, Form } from 'semantic-ui-react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import Checkbox from '@material-ui/core/Checkbox';
import {UpdateWork,UsersWork} from '../API/api'
import StateContext from '../Context/stateContext';
import { useHistory } from "react-router-dom"
import  FormError  from "./FormError"
import { actionTypes } from '../Context/stateReducer'


const WorkEdit = (props) => {

    
    const {dispatch,state}= useContext(StateContext)
    const history = useHistory()
    const loading = state.workupdate.loading
    const data = state.workupdate.data
    const error = state.workupdate.error
    const workId=props.match.params.id

    const [form,setForm]= useState(state.work.data.find(element=>{
            // eslint-disable-next-line
            return element.id==workId}));

    useEffect(() => {
        if(data?.status===200){
            setForm({})
            
            dispatch({
                type:actionTypes.WORK_EDIT_COMPLETE,
            })
           return history.push(`/works/${workId}/show`)
            
        }
     return ()=>{history.push(`/works/${workId}/show`)}
        
        
    }, [data?.status, workId, history, dispatch])

    const [Cancelled,setCancelled] = useState(form.cancelled)
    const [Completed,setCompleted] = useState(form.completed)
    const [Paid,setPaid] = useState(form.paid)

    


   function handleEdit(e) {
        e.preventDefault()
        console.log(form)
        UpdateWork(workId,form)(dispatch);
        UsersWork(state.user.id)(dispatch)
        console.log(state)
    }

    const onchange = (e) => {
        
        setForm({ ...form, [e.target.name]: e.target.value });
        
    }; 
    

    return (
        <div className="work-edit">
            <h2>Work Edit</h2>
            <Form success warning onSubmit={handleEdit}> 
                
                    {error?FormError(error):""}
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
                        <input type='number' name='pages' placeholder='Number of pages' value={form.pages} onChange={onchange}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Number of words</label>
                        <input type='number' name='number_of_words' placeholder='number of words... (optional)' value={form.number_of_words} onChange={onchange}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Expected amount</label>
                        <input type='number' name='expected_amount' placeholder='Expected amount when completed' value={form.expected_amount} onChange={onchange}/>
                    </Form.Field>
                    <Form.Field >
                        <FormHelperText>Has the order been cancelled?</FormHelperText>
                        <FormControlLabel
                        control={<Checkbox 
                        id="cancelled" 
                        color="primary" 
                        checked={Cancelled} 
                        onChange={(event)=>{
                            setCancelled(event.target.checked)
                            form.cancelled=event.target.checked 
                            }}
                       
                        />}
                        label="Cancelled"
                        />
                    </Form.Field>
                    <Form.Field >
                        <FormHelperText>Has the order been completed?</FormHelperText>
                        <FormControlLabel
                        control={<Checkbox 
                        id="completed" 
                        color="primary"
                        checked={Completed} 
                        onChange={(event)=>{
                            setCompleted(event.target.checked)
                            form.completed=event.target.checked
                        }}
                        
                        />}
                        label="Completed" 
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Amount received</label>
                        <input type='number' name='amount_received' placeholder='Amount received... (optional)' value={form.amount_received} onChange={onchange}/>
                    </Form.Field>
                    <Form.Field >
                        <FormHelperText>Has the order been paid?</FormHelperText>
                        <FormControlLabel
                        control={<Checkbox
                            id="paid"
                            color="primary"
                            checked={Paid}
                            onChange={(event)=>{
                                setPaid(event.target.checked)
                                form.paid= event.target.checked
                                
                            }}  
                        />}
                        label="Paid" 
                        />
                    </Form.Field>
                    <Button negative>Delete order</Button><Button   primary role='submit' loading={loading}>Update order</Button>
                </Form>
                <div>
                </div>
        </div>
    )
}

export default WorkEdit