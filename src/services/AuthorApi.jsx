import React from 'react'
import axios from 'axios'

//Base Url

const API = axios.create({
    baseURL:"http://127.0.0.1:8000/",
    headers:{
        "Content-Type":"application/json",
    },
});



export const fetchAuthors =async()=>{
    console.log("[Fetching - Authors]")
    try{
        const res = await API.get('authors/')
        console.log(res.data)
        return res.data
    }catch(error){
        console.error("Failed to fetch Authors")
        throw error
    }
}

export const fetchAuthor =async(AuthorId)=>{
    console.log("[Fetching - Category]")
    try{
        const res = await API.get(`authors/${AuthorId}`)
        console.log(res.data)
        return res.data
    }catch(error){
        console.error("Failed to fetch Authors")
        throw error
    }
}