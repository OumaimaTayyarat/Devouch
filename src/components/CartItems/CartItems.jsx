import { useContext, useState } from "react";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../assets/cart_cross_icon.png";
const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } =
    useContext(ShopContext);

  console.log("Cart items state in CartItems component:", cartItems);
  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt="" className="cartitems-product-icon" />
                <p>{e.name}</p>
                <p>{e.new_price} MAD</p>
                <button className="cartitems-quantity">
                  {cartItems[e.id]}
                </button>
                <p>{e.new_price * cartItems[e.id]}</p>
                <img
                  className="cartitems-remove-icon"
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>{0} MAD</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>shipping free</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h4>Total</h4>
              <h4>{getTotalCartAmount()} MAD</h4>
            </div>
          </div>
          <button>PROCEED TO CEKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code ,Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promo code" />
            <button className="Button">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
