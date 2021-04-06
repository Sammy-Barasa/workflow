import React from 'react'
import { Fab, Action } from 'react-tiny-fab';
import { useHistory } from "react-router-dom"
import { Icon } from 'semantic-ui-react'
// import StateContext from '../Context/stateContext'
import 'react-tiny-fab/dist/styles.css';

const FloatingActionButton = () => {


    //   const { state } = useContext(StateContext)
      const history=useHistory()
    //   const scope= state.work.data.scope

      function handleNewWorkRecordClick(e) {
        e.preventDefault(
            history.push('/works/create')
        )
    }

    const handleNewEmployerClick=(e)=>{
        e.preventDefault()
        history.push('/employer/create')
    }
    
    const mediaQuery = window.matchMedia('(max-width: 500px)')



    return (
        <Fab
                mainButtonStyles={{
                    backgroundColor: "blue",
                }}
                actionButtonStyles={{
                    backgroundColor: "blue",
                }}
                style={{ bottom: 24,
                     right: 24
                    }}
                icon={<Icon name="add" size="small" color="white"/>}
                event={mediaQuery.matches?"click":"hover"}
                alwaysShowTitle={true}
                
            >



                <Action
                    text="New work order"
                    onClick={handleNewWorkRecordClick}
                >
                    <Icon name="file alternate" size="large" color="white"/>
                </Action>
                <Action
                    text="New work employer"
                    onClick={handleNewEmployerClick}
                >
                    <Icon name="add user" size="large" color="white"/>
                    {/* <img src="../public/add-file.png" alt=""></img> */}
                </Action>
            </Fab>
    )
}

export default FloatingActionButton
