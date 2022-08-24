import { Add_to_Cart, Decrement_Product, DeleteFromCart, Filter, Get_Products, Increment_Product, IsDone, IsError, IsLoading, ResetCart } from "../Actions/CartActions/Cart-Actions-Types";

//iniistak state 
const initState = {
    data:[],
    cart:[],
    filter:[],
    total:0,
    isLoading:false,
    isError:false,
    Errors:'',
}

export const CartReducer = (state=initState , action) => {
    switch (action.type) {
        case IsLoading:
            return{
                ...state,
                isLoading:true
            }
            
        case IsError:
            return{
                ...state,
                isLoading:false,
                isError:true,
                Errors:action.payload
            }

        case IsDone:
            return{
                ...state,
                isLoading:false
            }
        case Get_Products:
            return{
                ...state,
                data:action.payload,
                isLoading:false,
                isError:false,
                Errors:""
            }

        case Add_to_Cart:
            let getProduct = state.cart.find(pro => pro.id === action.payload.id);
                if(getProduct){
                    getProduct.qty += action.payload.qty;
                    return {
                        ...state,
                        total:state.cart.reduce((a,b ) => a + (b.price * b.qty),0 )
                    }
                }else{
                    return {
                        ...state,
                        cart:[...state.cart , {...action.payload , qty:action.payload.qty}],
                        total:[...state.cart , {...action.payload , qty:action.payload.qty}].reduce((a,b ) => a + (b.price * b.qty),0 )
                    } 
                }

            case Increment_Product:
                let product = state.cart.find(pro => pro.id === action.payload);
                if(product) product.qty += 1;
                return{
                    ...state,
                    total:state.cart.reduce((a,b ) => a + (b.price * b.qty),0 )
                }
            
            case Decrement_Product:
                let GetProduct = state.cart.find(pro => pro.id === action.payload);
                if(GetProduct && GetProduct.qty > 1) GetProduct.qty -= 1;
                return{
                    ...state,
                    total:state.cart.reduce((a,b ) => a + (b.price * b.qty),0 )
                }

            case DeleteFromCart:
                let newCart = state.cart.filter(pro => pro.id !== action.payload);
                return{
                    ...state,
                    cart:newCart
                }
            
            case ResetCart :
                return{
                    ...state,
                    cart:[],
                    total:0
                }

            case Filter:
                let filterProducts = state.data.filter(pro => pro.title.includes(action.payload));
                return{
                    ...state,
                    filter:filterProducts.length ?  filterProducts : "Not Found :("
                }
        default:
            return state;
    }
}