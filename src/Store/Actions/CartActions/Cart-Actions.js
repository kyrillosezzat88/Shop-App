import { toast } from 'react-toastify'
import {Add_to_Cart , DeleteFromCart , Increment_Product , Decrement_Product, IsLoading, IsError , Get_Products, IsDone, ResetCart, Filter} from './Cart-Actions-Types'

// store product 
export const StoreProducts = (products) => {
    return{
        type:Get_Products,
        payload:products
    }
}

// add tgo cart 
export const AddToCart = (product) => {
    return{
        type:Add_to_Cart,
        payload:product
    }
}

// remove from cart 
export const RemoveFromCart = (productID) => {
    return{
        type:DeleteFromCart,
        payload:productID
    }
}

//Increment quantity 
export const Increment = (productID) => {
    return{
        type:Increment_Product,
        payload:productID
    }
}
//decrement quantity
export const Decrement = (productID) => {
    return{
        type:Decrement_Product,
        payload:productID
    }
}



// loadign and errors actions 
export const Loading = () => {
    return{
        type:IsLoading,
    }
}
export const Done = () => {
    return {
        type:IsDone
    }
}
export const Errors = (Error) => {
    toast(Error , {type:"error"});
    return{
        type:IsError,
        payload:Error
    }
}

export const OrderDone = () => {
    return{
        type:ResetCart
    }
}

// filter product 
export const FilterProduct = (Search) => {
    return{
        type:Filter,
        payload:Search
    }
}