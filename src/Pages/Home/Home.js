/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./Home.scss";
import { GetProducts } from "../../Apis/Apis";
import { useDispatch, useSelector } from "react-redux";
import {
  Errors,
  FilterProduct,
  Loading,
  StoreProducts,
} from "../../Store/Actions/CartActions/Cart-Actions";
import Navbar from "../../Components/Navbar/Navbar";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Spinner from "../../Components/Spinner/Spinner";
function Home() {
  const { data, isLoading, filter } = useSelector((state) => state.CartReducer);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    //get products and store in in globalstate
    if (!data.length) {
      dispatch(Loading()); // loading
      // call api to get products
      GetProducts()
        .then((res) => {
          dispatch(StoreProducts(res.data)); // store data
        })
        .catch((err) => {
          dispatch(Errors(err.response.data)); // if there any errors
        });
    }
  }, []);
  const HandleSearch = () => {
    dispatch(FilterProduct(search));
  };
  if (isLoading) return <Spinner />;
  return (
    <section className="Home">
      <Navbar />
      <div className="container">
        <div className="Home_search">
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={HandleSearch}>Search</button>
        </div>
        {!Array.isArray(filter) && (
          <h1 className="font-bold text-[32px] text-center">{filter}</h1>
        )}
        <div className="Home_products">
          {filter.length
            ? Array.isArray(filter) &&
              filter.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            : data.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
