import './ProductCard.scss';
import {useDispatch} from 'react-redux'
import { AddToCart } from '../../Store/Actions/CartActions/Cart-Actions';
import {toast} from 'react-toastify';
import {Link} from 'react-router-dom'
function ProductCard({product}) {
  const dispatch = useDispatch();
  const AddProduct = (product,e) => {
    e.preventDefault();
    dispatch(AddToCart({...product , qty:1}));
    toast(`${product.title} added successfully` , {type:'success'})
  }
  return (
    <Link to={`/product/${product.id}`}  className="Product">
      <img
        src={product.image}
        alt={product.title}
      />
      <div className="Product_content">
        <h2 className='Product_content_title'>{product.title}</h2>
        <p className='Product_content_description'>{product.description}</p>
        <div className='flex justify-between items-center mt-3'>
          <h3 className='Product_content_price'>{product.price} EG</h3>
          <button className='Product_content_btn' onClick={(e) =>  AddProduct(product,e)}>Add To Cart</button>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
