import React,{useState} from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import {UsersWork, DeleteWork} from '../API/api'
import { useHistory } from "react-router-dom"

const DeleteModal = ({workItem, workId,userId,dispatch}) => {
    const [open, setOpen] = useState(false)
    const history = useHistory()
    // useEffect(()=>{
    //     if(data?.status===200){
    //         UsersWork(userId)(dispatch)
            
    //         history.go(-2)
    //     }

    // },[dispatch, history, userId])

   async function handleDelete(e){
        e.preventDefault()
        DeleteWork(workId)(dispatch)
        // setModalOpen(false)
        UsersWork(userId)(dispatch)
        history.go(-2)
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
                    <p>{`Type of work: ${workItem.type_of_work}`}</p>
                    <p>{`Assigned by:  ${workItem.person}`}</p>
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
