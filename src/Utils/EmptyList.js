import React from 'react'
import { Icon } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'
import '../App.css'

const EmptyList = ({list,path,width},height) => {
    const history = useHistory()
    return (
        <div className="empty-list">
            <h3>{`You have no ${list} yet, click add button to get started`}</h3>
            <div style={{
                display:'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems:'center',
                padding:"1px",
                margin: '5px',
                border: 'solid',
                borderColor:'#f8f8f8',
                backgroundColor: '#f8f8f8',
                width:width,
                height:height,
            }}>
                <Icon name="add"  size='big' color="purple" onClick={
                    (e)=>{
                        e.preventDefault()
                        history.push(path)
                    }
                }/>
            </div>
        </div>
    )
}

export default EmptyList
