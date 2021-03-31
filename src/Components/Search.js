import React,{useState,useContext} from 'react'
import { List,Icon } from 'semantic-ui-react'
import StateContext from '../Context/stateContext'
import SingleWorkItem from "./SingleWorkItem"
import Input from '@material-ui/core/Input'
import '../App.css'

const Search = () => {

    const { state } = useContext(StateContext)
    const work= state.work.data.data
    const [listToDisplay,setListToDisplay]=useState(work)
    const [query,setQuery]=useState("")
    const [result,setResult]=useState(0)
    // const [byPerson,setByPerson]=useState(null)
    // const persons = state.persons.data.data
    // const personOptions = persons.map((item)=>({
    // key: item.id,
    // text: item.name,
    // value: item.id,
    // image: { avatar: true, src: '.../public/contactplaceholder.jpg' },
    // }))

    const onchange=async (e)=>{
        e.preventDefault()
        setQuery(e.target.value)
        let filtered = work.filter((item)=>{
            return item.topic.toLowerCase().includes(query.toLowerCase())
            // ||item.assigned_by.toLowerCase().includes(query.toLowerCase()))
        })
        setListToDisplay(filtered)
        setResult(filtered.length)
        
    }

    // const filterPerson = async (event,data)=>{
    //             event.preventDefault()
    //             setByPerson(data.value)
    //             let filtered = work.filter((item)=>{
    //             return item.assigned_by===byPerson
    //             })
    //             setListToDisplay(filtered)
    //             if(filtered.length===0){
    //             setQuery("")
    //             setListToDisplay(work)
    //             }
    //         }

    return (
        <div className="search-page">
            <div>
                <h4>{result} results</h4>  
            </div>
            
                <Input type="search" name="searchit" placeholder="Search here ..." value={query} onChange={onchange} autoFocus/>
            <div>
                <Icon name="filter" size="large">Filter by: </Icon>
                {/* <Dropdown
                            placeholder='person'
                            fluid
                            selection
                            options={personOptions}
                            onChange={filterPerson}
                        /> */}
            </div>
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
    )
}

export default Search
