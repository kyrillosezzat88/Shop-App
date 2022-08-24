import { useDispatch, useSelector } from "react-redux";
import "./ProductDetails.scss";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductData } from "../../Apis/Apis";
import { AddToCart, Done, Errors, Loading } from "../../Store/Actions/CartActions/Cart-Actions";
import Navbar from "../../Components/Navbar/Navbar";
import { toast } from "react-toastify";
import Spinner from "../../Components/Spinner/Spinner";
function ProductDetails() {
  const {isLoading} = useSelector(state => state.CartReducer)
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const [productDetails, setProductDetails] = useState({});
  const [qty , setQty] = useState(1)
  useEffect(() => {
    // get specific product data
    dispatch(Loading());
    (async () => {
      try {
        let product = await ProductData(id);
        if (Object.keys(product.data).length){
          setProductDetails(product.data);
          dispatch(Done());
        }else {
          navigate("/404");
          dispatch(Done());
        }
      
      } catch (error) {
        dispatch(Errors(error.message));
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // add product to cart 
  const AddProduct = (product) => {
    dispatch(AddToCart({...product , qty}));
    toast(`${product.title} added successfully` , {type:'success'})
  }

  if(isLoading) return <Spinner />
  return (
    <section className="Product_Details ">
      <Navbar />
      <div className="container">
        <div className="Product_Details_Content">
          <img src={productDetails.image} alt={productDetails.title} />
          <div className="Product_Details_Content_Right">
            <h2 className="Product_Details_Content_Right_title">
              {productDetails.title}
            </h2>
            <p className="Product_Details_Content_Right_description">
              {productDetails.description}
            </p>
            <div className="Product_Details_Content_Right_price">
              <h2 className="font-bold text-2xl mb-3">{productDetails.price} EG</h2>
              <div className="flex flex-wrap">
                <div className="Product_Details_Content_Right_price_qty">
                  <span onClick={() => qty !== 1&& setQty(qty-1)}>-</span>
                  <span>{qty}</span>
                  <span onClick={() => setQty(qty+1)}>+</span>
                </div>
                <button className="Product_Details_Content_Right_price_btn" onClick={() => AddProduct(productDetails)}>
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
