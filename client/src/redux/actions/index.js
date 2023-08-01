import axios from "axios";

import {GETUSERS} from "./Types"





export const getUsers = ()=>{
    return async (dispatch)=>{
        const {data} = axios.get("/users")
        console.log(data)
        dispatch({ type:GETUSERS ,payload: data})
    }
}
getUsers()