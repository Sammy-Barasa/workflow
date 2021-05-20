import React,{useState,useContext} from 'react'
import { List,Icon } from 'semantic-ui-react'
import StateContext from '../../Context/stateContext'
import SingleWorkItem from "../SingleWorkItem"
import {useHistory} from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton'
// import Button from '@material-ui/core/Button'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import ClearIcon from '@material-ui/icons/Clear';
import EmptyList from "../../Utils/EmptyList"
import '../../App.css'

const Search = (props) => {

                    const history = useHistory()
                    const { state } = useContext(StateContext)
                    const work= state.work.data.data
                    const workScope = state.work.data.scope
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

                    const sortByPerson =(e)=>{
                                e.preventDefault()
                                let value=e.target.name||e.target.id
                                let filtered = work.filter((item)=>{
                                    return (item.assigned_by.name.toLowerCase()===value.toLowerCase())
                                })
                                setListToDisplay(filtered)
                                setResult(filtered.length)
                                setSortOnProgress(true)
                            }

                    return (
                    <div className='App-body'>
                    <div className="search-container">
                        <div className ="search-page">
                            <div className="search-container">
                                
                                <div className="search-input">
                                <IconButton color="default" aria-label="back button" component="span" onClick={(e)=>{
                                    e.preventDefault()
                                    history.goBack()}}>
                                    <ArrowBackIosIcon />
                                </IconButton>
                                    <input type="search" id="search" name="search" placeholder="Search here ... by topic or order number ..." 
                                    value={query} onChange={onchange} autoFocus fullWidth={true}></input>
                                </div>
                            </div>
                            <div className="result">
                                <Icon name="filter" size="large">Sort_by:</Icon>
                                {sortOnProgress?
                                        <IconButton className='sort-button'   color="secondary" aria-label="back button" component="button" onClick={(e)=>{
                                            e.preventDefault()
                                            setListToDisplay(work)
                                            setSortOnProgress(false)
                                        }}>
                                                <ClearIcon/>
                                                clear sort
                                        </IconButton>
                                        :""}
                            </div>
                            <div>
                                {
                                    scope.hasNolist?<h4>Add persons first</h4>:
                                    <div className="sort">
                                        { persons.map((person)=>{
                                            return (
                                            <button className="sort-button" id={person.name} name={person.name}   onClick={sortByPerson}>
                                                
                                                <AccountCircleIcon/>
                                                {person.name}
                                            </button>
                                            )
                                            
                                        })}
                                    </div>
                                }
                            </div>  
                            
                            <div className="results">
                                <h4>{result} results</h4>  
                            </div>
                            <div className='worklist-container'>    
                                <List divided relaxed> 
                                    {                                                                                                                                                                               
                                        workScope?.hasNolist?<EmptyList list='work'path='/works/create' width='100px' height='600px'/>:listToDisplay.map((workItem,index)=>{
                                            return <SingleWorkItem workItem={workItem} index={index}/>
                                        }
                                        )
                                    }
                                </List> 
                            </div>       
                        </div>
                    </div>
                    </div>
                    )
                }

export default Search
