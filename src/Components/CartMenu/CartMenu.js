import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./CartMenu.scss";
import CartProduct from "./CartProduct";
function CartMenu() {
  const { cart , total } = useSelector((state) => state.CartReducer);

  return (
    <div className="Cart" onClick={(e) => e.stopPropagation()}>
      {cart.length > 0 && (
        <>
          <div className="Cart_products">
            {cart.map((product) => (
              <CartProduct key={product.id} product={product} />
            ))}
          </div>
          <div className="flex justify-between items-center my-3 font-bold text-xl">
            <h2>Total</h2>
            <h2>{total} EG</h2>
          </div>
          <Link to="/checkout">
            <button className="Cart_checkout">Checkout</button>
          </Link>
        </>
      )}
      {!cart.length && (
        <h1 className="text-red-600 font-bold text-center text-xl">
          Cart is Empty
        </h1>
      )}
    </div>
  );
}

export default CartMenu;
