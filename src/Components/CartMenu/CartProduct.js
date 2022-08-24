import {useDispatch} from 'react-redux'
import Remove from '../../Assets/Icons/remove.svg'
import {Increment , Decrement , RemoveFromCart} from '../../Store/Actions/CartActions/Cart-Actions'
function CartProduct({ product }) {
    const dispatch = useDispatch();
  return (
    <div className="Cart_product">
      <div className="Cart_product_content">
        <img src={product.image} alt={product.title} />
        <div className='Cart_product_content_middle'>
          <h2 className="Cart_product_content_title">{product.title}</h2>
          <div className="flex justify-between items-end mt-2">
            <div className="Cart_product_content_qty">
              <span className='w-4 text-center' onClick={() => dispatch(Decrement(product.id))}>-</span>
              <span>{product.qty}</span>
              <span className='w-4 text-center' onClick={() => dispatch(Increment(product.id))}>+</span>
            </div>
            <h3 className='font-bold '>{(product.price * product.qty).toFixed(2)} EG</h3>
          </div>
        </div>
      </div>
      <span className="Cart_product_content_action" onClick={() => dispatch(RemoveFromCart(product.id))}><img src={Remove} alt="delete" /></span>
    </div>
  );
}

export default CartProduct;
