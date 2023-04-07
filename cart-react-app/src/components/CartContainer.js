import React from 'react';
import CartItem from './CartItem';
import { useGlobalContext } from '../context';

const CartContainer = () => {
  const { cart, total, clearCart } = useGlobalContext();
  return (
    <section className="cart">

      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      {/* cart footer */}
        <footer>
          <hr />
          <div className="cart-total">
            <h4>Total <span>total {total}</span></h4>
          </div>
          <button onClick={clearCart} className="btn clear-btn">clear cart</button>
        </footer>
    </section>
  );
};

export default CartContainer;
