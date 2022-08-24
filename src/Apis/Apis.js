import axios from "axios";

// get all product 
export const GetProducts = async () => await axios.get('https://fakestoreapi.com/products')
//get Specific product 
export const ProductData = (id) => axios.get(`https://fakestoreapi.com/products/${id}`)