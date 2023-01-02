import React from "react";
import img2 from "../assets/apple.png";
import { addtocart, removeItem } from "../redux/actions";
import { productList } from "../redux/productAction";
import { useDispatch, useSelector } from "react-redux";
import { Card, Table } from "react-bootstrap";
import { useEffect } from "react";

function Home(props) {
  const dispatch = useDispatch();
  let result = useSelector((state) => state.productData);
  console.log("Result1212121", result);

  useEffect(() => {
    dispatch(productList());
  }, []);

  return (
    <div>
      <div className="text-center">
        <h1 className="text-primary my-5">Mobile</h1>
        <p className="text-danger fs-4"> Price : $1000 </p>
      </div>

      {result.map((item, index) => (
        <Card className="  text-center d-flex flex-wrap" key={index}>
          <div>Name : {item.Name}</div>
          <div>Price : {item.Price}</div>
          <div>Brand : {item.Brand}</div>
          <div>Category : {item.Category}</div>
          <div>Color : {item.Color}</div>
          <div>
            <button
              onClick={() => {
                dispatch(addtocart(item));
              }}
            >
              Add to cart
            </button>
            <button
              onClick={() => {
                console.log("okay", item._id);
                dispatch(removeItem(item._id));
              }}
            >
              remove to cart
            </button>
          </div>
        </Card>
      ))}
    </div>
  );
}
export default Home;
