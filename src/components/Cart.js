import { React } from "react";
import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import { addtocart, removeItem } from "../redux/actions";

export const Cart = (props) => {
  const dispatch = useDispatch();
  let result = useSelector((state) => state.cardItems);
  console.log("1@result", result);

  let amount =
    result.cardItems.length &&
    result.cardItems
      .map((item) => item.Price - 0)
      .reduce((Prev, Next) => Prev + Next);
  // console.log("amount", amount);
  // let Qtv =
  //   result.cardItems.length &&
  //   result.cardItems
  //     .map((item) => item.qty)
  //     .reduce((Prev, Next) => Prev + Next);
  // // console.log("Qtv", Qtv);

  return (
    <div>
      <Table>
        <tbody>
          <tr>
            <td>Product Name</td>
            <td>Quantity</td>
            <td> Price Total</td>
          </tr>
          {result.cardItems.map((item, index) => {
            console.log("222222", item);
            return (
              <tr key={index}>
                <td>{item.Name}</td>
                <td>{item.qty}</td>
                <td>{item.Price}</td>
                <td>
                  <Button
                    className="me-5"
                    onClick={() => {
                      dispatch(addtocart(item));
                    }}
                  >
                    Add
                  </Button>
                  <Button
                    onClick={() => {
                      dispatch(removeItem(item._id));
                    }}
                  >
                    Remove
                  </Button>{" "}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <h3 className="text-center">Total amount:{amount}</h3>
    </div>
  );
};
export default Cart;
