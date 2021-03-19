import React from "react";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

// Components
import Item from "./ShoppingCartItem";

const ShoppingCart = () => {
  const { cart, setCart } = useContext(CartContext);

  const removeHandler = (id) => {
    console.log(id);
    let res = cart.filter((book) => {
      if (id !== book.id) {
        console.log("hit if", id, book.id);
        return book;
      }
    });
    setCart(res);
  };

  const getCartTotal = () => {
    return cart
      .reduce((acc, value) => {
        return acc + value.price;
      }, 0)
      .toFixed(2);
  };

  return (
    <div className="shopping-cart">
      {cart.map((item) => {
        return item ? (
          <Item
            key={item.id}
            {...item}
            removeHandler={() => removeHandler(item.id)}
          />
        ) : null;
      })}

      <div className="shopping-cart__checkout">
        <p>Total: ${getCartTotal()}</p>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
