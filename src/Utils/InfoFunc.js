
import { UsersWork,GetUsersPersons,GetWorkOptions } from '../API/api'

export const InfoFunc = (userId,dispatch)=>{
    UsersWork(userId)(dispatch)
    GetUsersPersons(userId)(dispatch)
    GetWorkOptions()(dispatch)
}