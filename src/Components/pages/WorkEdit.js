import React,{useState, useContext,useEffect} from 'react'
 
import { Button, Form,Icon } from 'semantic-ui-react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import Checkbox from '@material-ui/core/Checkbox';
import {UpdateWork,UsersWork} from '../../API/api'
import StateContext from '../../Context/stateContext';
import { useHistory } from "react-router-dom"
import  FormError  from "../FormError"
import {  toast } from 'react-toastify';
import DeleteModal from '../modals/DeleteModal'
import { actionTypes } from '../../Context/stateReducer'
import 'react-toastify/dist/ReactToastify.css';
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

toast.configure()
const WorkEdit = (props) => {

    
    const {dispatch,state}= useContext(StateContext)
    const history = useHistory()
    const Loading = state.work.loading
    const loading =state.workupdate.loading
    const error = state.workupdate.error
    const data = state.workupdate.data
    const workId=props.match.params.id
    const userId = state.user.id
    // const username= state.user.username
       
    const [form,setForm]= useState(state.work.data.data.find(element=>{
            // eslint-disable-next-line
            return element.id==workId}));

    
    const [Cancelled,setCancelled] = useState(form.cancelled)
    const [Completed,setCompleted] = useState(form.completed)
    const [Paid,setPaid] = useState(form.paid)
    
    

    useEffect(()=>{
        if(data?.status===200){
            UsersWork(userId)(dispatch)
            dispatch({
                type:actionTypes.UPDATE_WORK_COMPLETE,
            })
            history.goBack()
        }

    },[Loading, data?.status, dispatch, history, userId])
    
    async function handleEdit(e) {
        e.preventDefault()
        console.log(form)
        UpdateWork(workId,form)(dispatch);
        
    }

    
    const onchange = (e) => {
        
        setForm({ ...form, [e.target.name]: e.target.value });
        
    };  
    return (
        <div className='App-body'>
        <div className="work-edit">
                <IconButton color="default" aria-label="back button" component="span" onClick={(e)=>{
                        e.preventDefault()
                        history.goBack()}}>
                        <ArrowBackIosIcon />
                </IconButton>
            <h2>Work Edit</h2>
            <Form success warning> 
                
                    {error?FormError(error):""}
                    <Form.Field>
                        <label>Topic</label>
                        <input type="text" name='topic' placeholder='Topic order falls in' value={form.topic} onChange={onchange} disabled />
                    </Form.Field>
                    <Form.Field>
                        <label>Assigned by</label>
                        <input type='text' name='assigned_by' disabled placeholder='Person who assigned the order' value={form.assigned_by.name} onChange={onchange}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Type of work</label>
                        <input type='text' disabled name='category_of_work' placeholder='Type of work e.g writing ...' value={form.category_of_work.work_type} onChange={onchange}/>
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
                            event.preventDefault()
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
                            name="date_paid"
                            color="primary"
                            checked={Paid}
                            onChange={(event)=>{
                                event.preventDefault()
                                setPaid(event.target.checked)
                                 form.paid= event.target.checked
                                if (event.target.checked===true){
                                    const paid_date = new Date().toISOString()

                                    // YYYY-MM-DDThh:mm[:ss[.uuuuuu]][+HH:MM|-HH:MM|Z]
                                    console.log(paid_date)
                                    setForm({ ...form, 
                                        [event.target.name] : paid_date
                                    })
                                
                                }
                            }}  
                        />}
                        label="Paid" 
                        />
                    </Form.Field>
                    {form.paid && !form.date_paid?
                    <Form.Field>
                    <FormHelperText>Date when payment was received hs not been recorded, you can fill below</FormHelperText>
                        <input id="date_paid" type="datetime-local" onChange={
                            (event)=>{
                                event.preventDefault()
                                
                                const paiddate = new Date(event.target.value).toISOString()
                                setForm({ ...form, 
                                        [event.target.id] : paiddate,
                                    })
                                }}
                        ></input>
                    </Form.Field>:''}
                    
                        <div className="update-action-butons">
                            
                                <DeleteModal workItem={form} workId={workId} userId={userId} dispatch={dispatch}/>
                            
                            
                                <Button color="green" loading={loading} onClick={handleEdit}><Icon name='refresh' />Update order</Button>
                            
                        </div>
                   
                </Form>
            </div>
        </div>
    )
}

export default WorkEdit
