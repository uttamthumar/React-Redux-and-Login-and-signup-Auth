import { React } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

export const Cart = (props) => {
  let result = useSelector((state) => state.cardItems);
  console.log("result", result);

  let amount =
    result.length &&
    result.map((item) => item.Price - 0).reduce((Prev, Next) => Prev + Next);
  console.log("amount", amount);

  return (
    <div>
      <Table>
        <tbody>
          <tr>
            <td>Product Name</td>
            <td></td>
            <td>Total</td>
          </tr>
          {result.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.Name}</td>
                <td>{item.Brand}</td>
                <td>{item.Price}</td>
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
