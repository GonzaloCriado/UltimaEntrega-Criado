import { useCart } from '../CartContext/CartContext';

function Cart() {
  const { cart } = useCart();

  if (cart.length === 0) {
    return <p>No hay productos en el carrito.</p>;
  }

  return (
    <div>
      <h2>Carrito de compras</h2>
      <ul>
        {cart.map((product, index) => (
          <li key={index}>
            <img src={product.thumbnail} alt={product.title} width="50" />
            <p>{product.title}</p>
            <p>Precio: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
