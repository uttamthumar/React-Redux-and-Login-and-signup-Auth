import { React } from "react";
import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import { addtocart, removeItem } from "../redux/actions";

export const Cart = (props) => {
  const dispatch = useDispatch();
  let result = useSelector((state) => state.cardItems);
  console.log("Result", result);

  let amount =
    result.cardItems.length &&
    result.cardItems
      .map((item) => item.Price * item.qty - 0)
      .reduce((Prev, Next) => Prev + Next);
  console.log("amount", amount);

  return (
    <div>
      <Table
        striped
        bordered
        hover
        variant="secondary"
        className="mx-auto mt-5"
      >
        <tbody>
          <tr>
            <td>Product Name</td>
            <td>Quantity</td>
            <td> Price Total </td>
          </tr>
          {result.cardItems.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.Name}</td>
                <td>{item.qty}</td>
                <td>{item.Price * item.qty}</td>
                <td>
                  <Button
                    className="me-5 rounded-pill btn-secondary px-4"
                    onClick={() => {
                      dispatch(addtocart(item));
                    }}
                  >
                    Add
                  </Button>
                  <Button
                    className=" rounded-pill btn-danger"
                    onClick={() => {
                      dispatch(removeItem(item));
                    }}
                  >
                    Remove
                  </Button>
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
