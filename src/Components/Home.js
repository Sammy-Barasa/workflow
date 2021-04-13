import React, {useContext} from 'react'
import StateContext from "../Context/stateContext"
import MenuAppOptions from './MenuAppOptions'
import HeaderRight from './HeaderRight'



function Home() {
    
    const { state } = useContext(StateContext)
    // const history = useHistory()
    const user = state.user
    const mediaQuery = window.matchMedia('(max-width: 500px)')
    // console.log(state)
    
    
    return (
        
          
            <div className="App-header">
              <div className='app-title'>
                <h2>
                  WorkRecordsManager
                </h2>
              </div>
              <div className="app-logout">
                {user===null?"":mediaQuery.matches?<div><MenuAppOptions/></div>:<HeaderRight user={user}/>}
              </div>
            </div>

        
    )
}

export default Home
