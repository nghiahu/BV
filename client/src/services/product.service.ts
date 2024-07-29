import axios from "axios"
import { Product } from "../interface"

export const getProduct = async () => {
    const response = await axios.get("http://localhost:8080/product")
    return response.data
}
export const addProduct = async (product:Product) => {
    const response = await axios.post("http://localhost:8080/product",product)
    return response.data
}
export const deletePro = async (product:Product) => {
    const response = await axios.delete(`http://localhost:8080/product/${product.id}`)
    return response.data
}