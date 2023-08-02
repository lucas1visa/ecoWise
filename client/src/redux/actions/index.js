import axios from "axios";

import {GETUSERS,GETPRODUCTS,POSTPRODUCT,POSTUSER} from "./Types"

export const getUsers = ()=>{
    return async (dispatch)=>{
        const {data} = await axios.get("/users")
        console.log(data)
        dispatch({ type:GETUSERS ,payload: data})
    }
}

export const getProducts = ()=>{
    return async (dispatch)=>{
        const {data} = await axios.get("/products")
        dispatch({ type:GETPRODUCTS ,payload: data})
    }
}


export const postProduct = (product)=>{
    return async (dispatch)=>{
        const res = await axios.post("/products",product)
        dispatch({type:POSTPRODUCT, payload:res})
    }
}


export const postUser = (user)=>{
    return async (dispatch)=>{
        const res = await axios.post("/products",user)
        dispatch({type:POSTUSER, payload:res})
    }
}

