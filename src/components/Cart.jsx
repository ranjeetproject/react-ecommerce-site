import React from "react";
import { useState, useEffect } from "react";

function Cart({ cartItem, setCart }) {
  const [price, setPrice] = useState(0);
  const handlePrice = () => {
    let ans = 0;
    cartItem.map((item) => (ans += parseInt(item.price)));
    setPrice(ans);
  };

  const handleRemove = (id) => {
    const arr = cartItem.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
    alert("Are Sure To Remove This Item");
  };
  useEffect(() => {
    handlePrice();
  });
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product Name</th>
            <th scope="col">Image</th>
            <th scope="col">Price</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItem.map((item) => (
            <tr key={item.id}>
              <th scope="row">#</th>
              <td>{item.name}</td>
              <td>
                <img
                  src={item.image}
                  style={{ height: 60, width: 60 }}
                  alt="#"
                />
              </td>
              <td>{item.price}</td>
              <td>
                <button
                  className="read_more"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td></td>
            <td></td>
            <td>Total</td>
            <td>Rs {price}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Cart;
