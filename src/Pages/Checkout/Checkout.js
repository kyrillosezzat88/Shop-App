import { Formik, Form, Field } from "formik";
import Navbar from "../../Components/Navbar/Navbar";
import { CheckOutSchema } from "./Validation";
import "./Checkout.scss";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { OrderDone } from "../../Store/Actions/CartActions/Cart-Actions";

function Checkout() {
  const {cart} = useSelector(state => state.CartReducer);
  const dispatch = useDispatch()
  return (
    <div className="checkout">
      <Navbar />
      <div className="checkout_content">
        <h2 className="w-full text-center text-4xl font-bold ">Shipping Details</h2>
        <Formik
          initialValues={{
            address: "",
            phone: "",
            email: "",
          }}
          validationSchema={CheckOutSchema}
          onSubmit={(values) => {
            if(cart.length){
              console.log({Order:{...values,cart}});
              dispatch(OrderDone());
              toast("Thank your for Your Order " , {type:"success"});
              toast("Please Check Console" , {type:"info"});
            }else{
              toast("Your Cart Empty" , {type:"error"})
            }
          }}
        >
          {({ errors, touched }) => (
            <Form className="checkout_content_form">
              <Field name="address" className="checkout_content_field" placeholder="Address" />
              {errors.address && touched.address && (
                <div className="checkout_content_error">{errors.address}</div>
              )}
              <Field name="phone" className="checkout_content_field" placeholder="Phone" />
              {errors.phone && touched.phone && (
                <div className="checkout_content_error">{errors.phone}</div>
              )}
              <Field name="email" className="checkout_content_field" placeholder="Email" />
              {errors.email && touched.email && (
                <div className="checkout_content_error">{errors.email}</div>
              )}
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Checkout;
