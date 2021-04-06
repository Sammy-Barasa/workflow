import React, { useState,useContext,useEffect } from 'react'
import { Button, Form,  Dropdown, Icon} from 'semantic-ui-react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import Checkbox from '@material-ui/core/Checkbox';
import {CreateWork,UsersWork} from '../API/api'
import StateContext from '../Context/stateContext';
import { useHistory } from "react-router-dom"
import  FormError  from "./FormError"
//import EmptyList from "../Utils/EmptyList"
import { actionTypes } from '../Context/stateReducer'
// import {  toast } from 'react-toastify';
//   import 'react-toastify/dist/ReactToastify.css';
// import { actionTypes } from '../Context/stateReducer'


const WorkCreate = (props) => {

    // toast.configure()
    const {dispatch,state}= useContext(StateContext)
    const history = useHistory()
    const loading = state.workcreate.loading
    const data = state.workcreate.data
    const errorMessage = state.workcreate.error
    const userId = state.user.id;
    // const scope= state.persons.data.scope
    const [form,setForm]= useState({topic:"",assigned_by:null,category_of_work:null,order_number:"",pages:0,number_of_words:0,expected_amount:0,cancelled:false,completed:false,amount_received:0,paid:false,});


    useEffect(()=>{
        if(data?.status===201){
            UsersWork(userId)(dispatch)
            dispatch({
                type:actionTypes.CREATE_WORK_COMPLETE,
            })
            history.goBack()
        }

    },[loading, data?.status, dispatch, history, userId])
    const [Cancelled,setCancelled] = useState(false)
    const [Completed,setCompleted] = useState(false)
    const [Paid,setPaid] = useState(false)
    

    const persons = state.persons.data.data
    const personOptions = persons.map((item)=>({
    key: item.id,
    text: item.name,
    value: item.id,
    image: { avatar: true, src: '.../public/contactplaceholder.jpg' },
  }))
    const workcat = state.workOptions.data
    const workOptions = workcat.map((opt)=>({
        key: opt.id,
        text: opt.work_type,
        value: opt.id,
    }))
       async function handleCreate(e) {
        e.preventDefault();
        // console.log(form);
        CreateWork(userId, form)(dispatch);    
    }

    
    function onchange(e) {
        setForm((form) => {
            return {
                ...form,
                [e.target.name]: e.target.value
            };
        });
    }
    

    // const workcreateFormInvalid =
    // !form.topic?.lenght || !form.person?.length||!form.type_of_work?.length;
    // disabled={workcreateFormInvalid}
    // const loginFormInvalid =
    // !form?.email?.length || !form.password || !form.password.length;
   
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
                        <label>Assigned by</label>
                        {/* <input type='text' name='person' placeholder='Person who assigned the order' value={form.person} onChange={onchange}/> */}
                        <Dropdown
                            placeholder='Select Person who assigned the order'
                            fluid
                            selection
                            options={personOptions}
                            onChange={(event,data)=>{
                                event.preventDefault()
                            setForm((form)=>{
                                return{
                                ...form,
                                assigned_by:data.value
                                }
                            })
                            
                            }}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Type of work</label>
                        {/* <input type='text' name='type_of_work' placeholder='Type of work e.g writing ...' value={form.type_of_work} onChange={onchange}/> */}
                        <Dropdown
                            placeholder='Select Type of work e.g writing ...'
                            fluid
                            selection
                            options={workOptions}
                            onChange={(event,data)=>{
                                 event.preventDefault()
                            setForm((form)=>{
                                return{
                                ...form,
                                category_of_work:data.value
                                }
                            })
                             
                            }}
                        />
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
                        <input type='number' name='number_of_words' placeholder='number of words... (optional)' value={form.number_of_words} onChange={onchange} />
                    </Form.Field>
                    <Form.Field>
                        <label>Expected amount</label>
                        <input type='number' name='expected_amount' placeholder='Expected amount when completed' value={form.expected_amount} onChange={onchange} />
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
                            setForm((form)=>{
                                return{
                                ...form,
                                cancelled:event.target.checked
                                }
                            })
                             
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
                            setForm((form)=>{
                                return{
                                ...form,
                                completed:event.target.checked
                                }
                            })
                        }}
                        
                        />}
                         label="Completed"
                        />
                        
                    </Form.Field>
                    <Form.Field>
                        <label>Amount received</label>
                        <input type='number' name='amount_received' placeholder='Amount received... (optional)' value={form.amount_received||0} onChange={onchange}/>
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
                                setForm((form)=>{
                                    return{
                                ...form,
                                paid:event.target.checked
                                    }
                            })
                                
                            }}
                            
                        />}
                        label="Paid"
                        />
                        
                    </Form.Field>
                    <Button  loading={loading} fluid primary type='submit'><Icon name="plus" size="small"/>Add work order</Button>
                </Form>
                <div>
                </div>
        </div>
    )
}

export default WorkCreate


