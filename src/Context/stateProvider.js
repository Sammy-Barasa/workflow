import React, {  useReducer,useMemo } from 'react'
import StateContext from "./stateContext.js"
import stateReducer from "./stateReducer"


const StateProvider = (props) =>{ 

  const initialState = {
    user: null,
    auth: {
          login:{
                loading:false,
                data:null,
                error:null, 
                },
          register:{
                loading:false,
                data:null,
                error:null, 
                }
          },
    work:{
          loading:false,
          data:{
            'data':[],
            'scope':null,
            'stats':null,
        },
          error:null
        },
    workcreate:{
          loading:false,
          data:null,
          error:null
        },
    workupdate:{
          loading:false,
          data:null,
          error:null
        },
    workdelete:{
          loading:false,
          data:null,
          error:null
        },
    persons:{
          loading:false,
          data:{
            'data':null,
            'scope':null,
        },
          error:null
        },
    personcreate: {
            
            loading:false,
            data:null,
            error: null,
          },
    personupdate:{
      loading:false,
          data:null,
          error:null
    },
    persondelete:{
                    loading:false,
                    data:null,
                    error:null
    },
    workOptions:{
          loading:false,
          data:null,
          error:null
        },
  };

  const [state, dispatch] = useReducer(stateReducer, initialState);
  const contextValue= useMemo(() =>(
    {
      state:state,
      dispatch:dispatch
    }
  ),[state,dispatch])
  return (
    <StateContext.Provider
      value={contextValue}
    >
      {props.children}
    </StateContext.Provider>
  );
}

export default StateProvider