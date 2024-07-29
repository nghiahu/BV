import axios from "axios"
import { Category } from "../interface"

export const getCategory = async () =>{
    const response = await axios.get("http://localhost:8080/category")
    return response.data
}
export const addCategory = async (category:Category) =>{
    const response = await axios.post("http://localhost:8080/category",category)
    return response.data
}
