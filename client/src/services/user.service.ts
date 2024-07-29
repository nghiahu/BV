import axios from "axios";
import { User } from "../interface";
export const getUser = async () => {
    const response = await axios.get("http://localhost:8080/users")
    return response.data
};
export const changeStatusUser = async (user:User) =>{
    const response = await axios.patch(`http://localhost:8080/users/${user.id}`,{...user, status: !user.status})
    return response.data
}
export const addUser = async (newUser:User)=>{
    let response = await axios.post("http://localhost:8080/users",newUser)
    return response.data
};
export const addproduct = async (use:User)=>{
    let response = await axios.patch("http://localhost:8080/users")
}

