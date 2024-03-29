import React,{useState,useContext,useEffect} from 'react'
import StateContext from '../../Context/stateContext';
import { Button, Form, Icon } from 'semantic-ui-react'
import {CreatePerson,GetUsersPersons} from '../../API/api'
import { useHistory } from "react-router-dom"
import  FormError  from "../FormError"
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import { actionTypes } from '../../Context/stateReducer'

const PersonCreate = (props) => {

    const {dispatch,state}= useContext(StateContext)
    const history = useHistory()
    const[form,setForm] = useState({})
    const[error,setError] = useState(null)
    const data = state.personcreate.data
    const loading = state.personcreate.loading
    const errorMessage = state.personcreate.error
    const userId = state.user.id

    useEffect(()=>{
        if(data?.status===200){
            GetUsersPersons(userId)(dispatch)
            
            dispatch({
                type:actionTypes.CREATE_PERSON_COMPLETE,
            })
            history.goBack()
        }  
    },[data?.status, dispatch, history, userId])

    async function handleCreate(e) {
        e.preventDefault();
        // console.log(form);
        try {
            CreatePerson(userId, form)(dispatch);
        
        } catch (error) {
            setError(error)
        }
        
        
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
        <div className='App-body'>
            <div className="person-create">  
                <IconButton color="default" aria-label="back button" component="span" onClick={(e)=>{
                        e.preventDefault()
                        history.goBack()}}>
                        <ArrowBackIosIcon />
                </IconButton>
                <h2>Add person to your records</h2>
                <Form success warning onSubmit={handleCreate}> 
                    
                        {errorMessage?FormError(errorMessage):""}
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
    </div>
    )
}

export default PersonCreate
