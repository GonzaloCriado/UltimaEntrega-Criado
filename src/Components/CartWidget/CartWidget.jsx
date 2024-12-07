import { useCart } from '../CartContext/CartContext';
import { Link } from 'react-router-dom';
import './cartwidget.css';

const CartWidget = () => {
  const { totalQuantity } = useCart();

  return (
    <Link to="/cart" className="cart-widget">
      <i className="bi bi-cart-fill"></i> 
      {totalQuantity > 0 && <span className="cart-count">{totalQuantity}</span>}
    </Link>
  );
};

export default CartWidget;
