export const actionTypes = {
  SET_USER: "SET_USER",
  REGISTER_LOADING:"REGISTER_LOADING",
  REGISTER_SUCCESS:"REGISTER_SUCCESS",
  REGISTER_ERROR:"REGISTER_ERROR",
  LOGIN_LOADING:"LOGIN_LOADING",
  LOGIN_SUCCESS:"LOGIN_SUCCESS",
  LOGIN_ERROR:"LOGIN_ERROR",
  WORK_LOADING:"WORK_LOADING",
  WORK_SUCCESS:"WORK_SUCCESS",
  WORK_ERROR:"WORK_ERROR",
  GET_PERSONS_LOADING:"GET_PERSONS_LOADING",
  GET_PERSONS_SUCCESS:"GET_PERSONS_SUCCESS",
  GET_PERSONS_ERROR:"GET_PERSONS_ERROR",
  CREATE_WORK_LOADING:"CREATE_WORK_LOADING",
  CREATE_WORK_SUCCESS:"CREATE_WORK_SUCCESS",
  CREATE_WORK_ERROR:"CREATE_WORK_ERROR",
  CREATE_WORK_COMPLETE:"CREATE_WORK_COMPLETE",
  UPDATE_WORK_LOADING:"UPDATE_WORK_LOADING",
  UPDATE_WORK_SUCCESS:"UPDATE_WORK_SUCCESS",
  UPDATE_WORK_ERROR:"UPDATE_WORK_ERROR",
  UPDATE_WORK_COMPLETE:"UPDATE_WORK_COMPLETE",
  CREATE_PERSON_LOADING:"CREATE_PERSON_LOADING",
  CREATE_PERSON_SUCCESS:"CREATE_PERSON_SUCCESS",
  CREATE_PERSON_ERROR:"CREATE_PERSON_ERROR",
  UPDATE_PERSON_LOADING:"UPDATE_PERSON_LOADING",
  UPDATE_PERSON_SUCCESS:"UPDATE_PERSON_SUCCESS",
  UPDATE_PERSON_ERROR:"UPDATE_PERSON_ERROR",
  GET_OPTIONS_LOADING:"GET_OPTIONS_LOADING",
  GET_OPTIONS_SUCCESS:"GET_OPTIONS_SUCCESS",
  GET_OPTIONS_ERROR:"GET_OPTIONS_ERROR",

};



const stateReducer = (state,action) =>{
    // console.log(action)
    switch (action.type) {
      case actionTypes.SET_USER:
        return {
          ...state,
          user: action.payload,
        };
      case actionTypes.REGISTER_LOADING:
        return {
          ...state,
          auth: {
            ...state.auth,
            register:{
                        ...state.auth.register,
                    loading:true,
                    },
                },
      };

      case actionTypes.REGISTER_SUCCESS:
        return {
          ...state,
          auth: {
            ...state.auth,
            register:{...state.auth.register,
                    loading:false,
                    data:action.payload
                    },
                },
      };

      case actionTypes.REGISTER_ERROR:
        return {
          ...state,
          auth: {
            ...state.auth,
            register:{...state.auth.register,
                    loading:false,
                    error:action.payload
                    },
                },
      };

      case actionTypes.LOGIN_LOADING:
        return {
          ...state,
          auth: {
            ...state.auth,
            login:{
                  ...state.auth.login,
                    loading:true,
                  },
                },
      };
      case actionTypes.LOGIN_SUCCESS:
        return {
          ...state,
              auth: {
                      ...state.auth,
                      login:{
                              ...state.auth.login,
                              loading:false,
                              data:action.payload
                            },
                    },    
      };
      case actionTypes.LOGIN_ERROR:
        return {
          ...state,
              auth:{
                    ...state.auth,
                    login:{
                        ...state.auth.login,
                        loading:false,
                        error:action.payload
                      },
                   },
      };
      case actionTypes.WORK_LOADING:
        return {
          ...state,
          work: {
                  ...state.work,
                  loading:true
                },
        };
      case actionTypes.WORK_SUCCESS:
        return {
            ...state,
            work: {
                    ...state.work,
                    loading:false,
                    data:{...state.work.data,
                      'data':action.payload.data,
                      'scope':action.payload.scope,
                      'stats':action.payload.stats,
                    },
                  },
        };
      case actionTypes.WORK_ERROR:
        return {
            ...state,
            work: {
                    ...state.work,
                    loading:false,
                    error:action.payload
                  },
        };

      case actionTypes.CREATE_WORK_LOADING:
        return {
            ...state,
            workcreate: {
                    ...state.workcreate,
                    loading:true,
                  },
        };

            
      case actionTypes.CREATE_WORK_SUCCESS:
        return {
            ...state,
            workcreate: {
                    ...state.workcreate,
                    loading:false,
                    data:action.payload
                  },
        };

      case actionTypes.CREATE_WORK_ERROR:
        return {
            ...state,
            workcreate: {
                    ...state.workcreate,
                    loading:false,
                    error:action.payload
                  },
        };

      case actionTypes.CREATE_WORK_COMPLETE:
        return {
            ...state,
            workcreate: {
                    ...state.workcreate,
                    loading:false,
                    data:null,
                    error:null,
                  },
        };

      case actionTypes.UPDATE_WORK_LOADING:
        return {
            ...state,
            workupdate: {
                    ...state.workupdate,
                    loading:true,
                  },
        };
      case actionTypes.UPDATE_WORK_SUCCESS:
        return {
            ...state,
            workupdate: {
                    ...state.workupdate,
                    loading:false,
                    data:action.payload
                  },
        };

      case actionTypes.UPDATE_WORK_ERROR:
        return {
            ...state,
            workupdate: {
                    ...state.workupdate,
                    loading:false,
                    error:action.payload
                  },
        };

      case actionTypes.UPDATE_WORK_COMPLETE:
        return {
            ...state,
            workupdate: {
                    ...state.workupdate,
                    loading:false,
                    data:null,
                    error:null,
                  },
        };

      case actionTypes.DELETE_WORK_SUCCESS:
        return {
            ...state,
            workdelete: {
                    ...state.workdelete,
                    loading:false,
                    data:action.payload,
                    error:null
                  },
        };

      case actionTypes.DELETE_WORK_COMPLETE:
        return {
            ...state,
            workdelete: {
                    ...state.workdelete,
                    loading:false,
                    data:null,
                    error:null
                  },
        };

      case actionTypes.GET_PERSONS_LOADING:
        return {
            ...state,
            persons: {
                    ...state.persons,
                    loading:true,
                  },
        };

      case actionTypes.GET_PERSONS_SUCCESS:
        return {
            ...state,
            persons: {
                    ...state.persons,
                    loading:false,
                    data:{...state.persons.data,
                      'data':action.payload.data,
                      'scope':action.payload.scope,
                    },
                  },
        };

      case actionTypes.GET_PERSONS_ERROR:
        return {
            ...state,
            persons: {
                    ...state.persons,
                    loading:false,
                    error:action.payload
                  },
        };

      case actionTypes.UPDATE_PERSON_LOADING:
        return {
            ...state,
            workupdate: {
                    ...state.personupdate,
                    loading:true,
                    data:null,
                    error:null,
                  },
        };

      case actionTypes.UPDATE_PERSON_SUCCESS:
        return {
            ...state,
            workupdate: {
                    ...state.personupdate,
                    loading:false,
                    data:action.payload,
                    error:null,
                  },
        };

      case actionTypes.UPDATE_PERSON_ERROR:
        return {
            ...state,
            workupdate: {
                    ...state.personupdate,
                    loading:false,
                    data:null,
                    error:action.payload,
                  },
        };

      case actionTypes.UPDATE_PERSON__COMPLETE:
        return {
            ...state,
            workupdate: {
                    ...state.personupdate,
                    loading:false,
                    data:null,
                    error:null,
                  },
        };
      case actionTypes.GET_OPTIONS_SUCCESS:
        return {
            ...state,
            workOptions: {
                    ...state.workOptions,
                    loading:false,
                    data:action.payload
                  },
        };

      case actionTypes.GET_OPTIONS_LOADING:
        return {
            ...state,
            workOptions: {
                    ...state.workOptions,
                    loading:true,
                  },
        };

      case actionTypes.GET_OPTIONS_ERROR:
        return {
            ...state,
            workOptions: {
                    ...state.workOptions,
                    loading:false,
                    error:action.payload
                  },
        };

 

      default:
        return state;
    }

}
export default stateReducer