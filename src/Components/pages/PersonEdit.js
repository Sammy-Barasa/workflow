import React, {useContext,useState,useEffect}from 'react'
import StateContext from '../../Context/stateContext';
import { Button, Form } from 'semantic-ui-react'
import { UpdatePerson, GetUsersPersons} from '../../API/api'
import { useHistory,useLocation } from "react-router-dom"
import  FormError  from "../FormError"
import { actionTypes } from '../../Context/stateReducer'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import DeletePersonModal from '../modals/DeletePersonModal'

const PersonEdit = (props) => {

    const {dispatch,state}= useContext(StateContext)
    const history = useHistory()
    const location = useLocation()
    const loading =state.personupdate.loading
    const error = state.personupdate.error
    const data = state.personupdate.data
    const personId=props.match.params.id
    const stats = location.state
    const[form,setForm] = useState(state.persons.data.data.find(element=>{
            // eslint-disable-next-line
            return element.id==personId}))
    const [updateError,setError] = useState(null) 
    const userId = state.user.id
    async function handleEdit(e) {
        e.preventDefault();
        try {
            UpdatePerson(userId,personId,form)(dispatch);
            
        } catch (error) {
            setError(error)
        }
           
    }
   
    useEffect(()=>{
        if(data?.status===200){
            GetUsersPersons(userId)(dispatch)
            dispatch({
                type:actionTypes.UPDATE_PERSON_COMPLETE,
            })
            history.goBack()
        }  
    },[data?.status, dispatch, history, userId])

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
            <div className='work-edit'>

                <IconButton color="default" aria-label="back button" component="span" onClick={(e)=>{
                        e.preventDefault()
                        history.goBack()}}>
                        <ArrowBackIosIcon />
                </IconButton>
            <h2>{`Update ${form.name}'s details`}</h2>
            <Form success warning > 
                
                    {error?FormError(error):""}
                    {updateError?FormError(updateError):""}
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
                    
                    <div className="update_person_options">
                        
                        <DeletePersonModal personId={personId} stats={stats}/>
                        
                       
                        <Button  loading={loading} primary onClick={handleEdit}>Update person</Button>
                        
                    
                    </div>
                    
                    
            </Form>
        </div>
    </div>
    )
}

export default PersonEdit
