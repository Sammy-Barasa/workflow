export const actionTypes = {
  SET_USER: "SET_USER",
  LOGIN_LOADING:"LOGIN_LOADING",
  LOGIN_SUCCESS:"LOGIN_SUCCESS",
  LOGIN_ERROR:"LOGIN_ERROR",
  WORK_LOADING:"WORK_LOADING",
  WORK_SUCCESS:"WORK_SUCCESS",
  WORK_ERROR:"WORK_ERROR",
};



const stateReducer = (state,action) =>{
    console.log(action)
    switch (action.type) {
      case actionTypes.SET_USER:
        return {
          ...state,
          user: action.payload,
        };
      case actionTypes.LOGIN_LOADING:
        return {
          ...state,
          auth: {
            ...state.auth,
            login:{...state.auth.login,
                    loading:true,},
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
                    data:[action.payload]
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
      default:
        return state;
    }

}
export default stateReducer