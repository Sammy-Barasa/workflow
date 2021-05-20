import React,{useState,useContext,useEffect} from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import {UsersWork, DeleteWork} from '../../API/api'
import { useHistory } from "react-router-dom"
import StateContext from '../../Context/stateContext'
import { actionTypes } from '../../Context/stateReducer'

const DeleteModal = ({workItem, workId,userId,dispatch}) => {

    const {state}= useContext(StateContext)
    const data = state.workdelete.data
    const [open, setOpen] = useState(false)
    const history = useHistory()
    useEffect(()=>{
        if(data?.status===200){
            UsersWork(userId)(dispatch)
            dispatch({
                type:actionTypes.DELETE_WORK_COMPLETE,
            })
            history.go(-2)
        }

    },[data?.status, dispatch, history, userId])

   async function handleDelete(e){
        e.preventDefault()
        DeleteWork(workId)(dispatch)
        // setModalOpen(false)
    }

    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button negative ><Icon name='trash alternate' />Delete order</Button>}
            >
            <Modal.Header>{`Delete work order ${workItem.order_number}`}</Modal.Header>
            <Modal.Content image>
                <Icon name="file alternate" size="massive" color="white"/>
                <Modal.Description>
                    <Header>{workItem.topic}</Header>
                    <p>{`Type of work: ${workItem.work_type}`}</p>
                    <p>{`Assigned by:  ${workItem.assigned_by.name}`}</p>
                    <p>{`Date assigned: ${workItem.date}`}</p>
                    <p>{`Expected amount: ${workItem.expected_amount}`}</p>
                    <p>{`Amount received: ${workItem.amount_received}`}</p>
                    <p>
                        Deleting this work order record cannot be recovered. Do you whish to proceed?
                    </p>
                    
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button color='green' onClick={() => setOpen(false)}>
                <Icon name='remove' /> Cancel
                </Button>
                <Button color='red' onClick={handleDelete}>
                <Icon name='trash alternate' /> Delete
                </Button>
            </Modal.Actions>
    </Modal>
    )
}

export default DeleteModal
