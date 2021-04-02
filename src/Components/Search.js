import React,{useState,useContext} from 'react'
import { List,Icon } from 'semantic-ui-react'
import StateContext from '../Context/stateContext'
import SingleWorkItem from "./SingleWorkItem"
import Input from '@material-ui/core/Input'
import {useHistory} from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import ClearIcon from '@material-ui/icons/Clear';
import '../App.css'

const Search = () => {

    const history = useHistory()
    const { state } = useContext(StateContext)
    const work= state.work.data.data
    const [listToDisplay,setListToDisplay]=useState(work)
    const [query,setQuery]=useState("")
    const [result,setResult]=useState(0)
    const [sortOnProgress,setSortOnProgress]=useState(false)
    const persons = state.persons.data.data
    const scope = state.persons.data.scope

    const onchange=async (e)=>{
        e.preventDefault()
        setQuery(e.target.value)
        let filtered = work.filter((item)=>{
            return(
                item.topic.toLowerCase().includes(query.toLowerCase())||item.order_number.includes(query)
                )
        })
        setListToDisplay(filtered)
        setResult(filtered.length)
        
    }

    const sortByPerson = async (event)=>{
                event.preventDefault()
                const name=event.target.name
                let filtered = work.filter((item)=>{
                    return item.assigned_by.name===name
                })
                setListToDisplay(filtered)
                setResult(filtered.length)
                setSortOnProgress(true)
            }

    return (
        <div className="App-body">
            <div className="search-container">
                <div className="search-input-back-button">
                    
                <IconButton color="default" aria-label="back button" component="span" onClick={(e)=>{
                    e.preventDefault()
                    history.goBack()}}>
                    <ArrowBackIosIcon />
                </IconButton>
                </div>
                <div className="search-input">
                    <Input type="search" id="search" name="search" placeholder="Search here ... by topic or order number ..." 
                    value={query} onChange={onchange} autoFocus fullWidth={true} style={{width:"100%"}}/>
                </div>
            </div>
            <div className="results">
                <Icon name="filter" size="large">Sort:</Icon>
            </div>
            <div className="result">
                {scope.hasNolist?<h4>Add persons first</h4>:
                <div className="sort">
                
                { persons.map((person)=>{
                    return (
                    <IconButton className='sort-button' name={person.name} color="default" aria-label="back button" component="span" onClick={sortByPerson}>
                        
                        <AccountCircleIcon/>
                        {person.name }
                    </IconButton>
                    )
                    
                })}

                {sortOnProgress?
                <IconButton className='sort-button'   color="secondary" aria-label="back button" component="span" onClick={(e)=>{
                    e.preventDefault()
                    setListToDisplay(work)
                    setSortOnProgress(false)
                }}>
                        <ClearIcon/>
                </IconButton>
                :""}
            </div>}
            </div>  
            
            <div className="results">
                <h4>{result} results</h4>  
            </div>
            <div className="result">
                <div className='worklist-container'>    
                <List divided relaxed> 
                    {                                                                                                                                                                               
                        listToDisplay.map((workItem,index)=>{
                            return <SingleWorkItem workItem={workItem} index={index}/>
                        }
                        )
                    }
                </List> 
            </div>
            </div>
        </div>
    )
}

export default Search
