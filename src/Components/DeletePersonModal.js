import React,{useState,useContext,useEffect} from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import {GetUsersPersons, DeletePerson } from '../API/api'
import { useHistory } from "react-router-dom"
import StateContext from '../Context/stateContext'
import { actionTypes } from '../Context/stateReducer'

const DeletePersonModal = (props) => {

    const {state,dispatch}= useContext(StateContext)
    const data = state.persondelete.data
    const loading = state.persondelete.loading
    const userId = state.user.id
    const personId = props.personId
    const person = state.persons.data.data.find(element=>{
            // eslint-disable-next-line
            return element.id==personId})
    const [open, setOpen] = useState(false)
    const history = useHistory()
    useEffect(()=>{
        if(data?.status===200){
            GetUsersPersons(userId)(dispatch)
            dispatch({
                type:actionTypes.DELETE_PERSON_COMPLETE,
            })
            history.go(-1)
        }

    },[data?.status, dispatch, history, userId])

   async function handlePersonDelete(e){
        e.preventDefault()
        DeletePerson(userId,personId)(dispatch)
        // setModalOpen(false)
    }

    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button negative><Icon name='trash alternate' />Delete person</Button>}
            >
            <Modal.Header>{`Delete ${person.name} from your records`}</Modal.Header>
            <Modal.Content image>
                <Icon name="user" size="massive" color="purple"/>
                <Modal.Description>
                    <Header>{`${person.email}, phone  ${person.phone}`}</Header>
                    <h3>{`${person.name} has contributed to ${props.stats.percentage}%  of works you have received.`}</h3>
                    <p>{`Total number of works so far: ${props.stats.total_works}`}</p>
                    <p>{`Works paid so far: ${props.stats.works_paid}`}</p>
                    <p>{`Works not paid:  ${props.stats.works_not_paid}`}</p>
                    <p>{`Expected amount so far : ${props.stats.expected_amount}`}</p>
                    <p>{`Amount received so far: ${props.stats.received_amount}`}</p>
                    <p>
                        Deleting this person cannot be recovered. All records associated with the person will also be deleted. Do you whish to proceed?
                    </p>
                    
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button color='green' onClick={() => setOpen(false)}>
                <Icon name='remove' /> Cancel
                </Button>
                <Button color='red' onClick={handlePersonDelete} loading={loading}>
                <Icon name='trash alternate' /> Delete
                </Button>
            </Modal.Actions>
    </Modal>
    )
}

export default DeletePersonModal
