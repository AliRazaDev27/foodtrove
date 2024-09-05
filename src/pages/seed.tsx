import axios from "axios"
import { useEffect } from "react"
export default function Seed(){
useEffect(()=>{
    const seed = async ()=>{
        const response = await axios.get("http://localhost:3000/api/seed")
        console.log(response.data)
    }
    seed()  
},[])
    return(
        <div>seed</div>
    )
}