
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext/CartContext';
import './ItemListContainer.css';

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const customBotines = [
      { id: 101, title: 'Adidas XSPEEDFLOW', thumbnail: '/assets/botines/b1.jpg', price: 120.000 },
      { id: 102, title: 'Nike Tiempo Legend 10 Elite', thumbnail: '/assets/botines/b2.jpg', price: 110.000 },
      { id: 103, title: 'Nike Tiempo Legend 10 Elite', thumbnail: '/assets/botines/b3.jpg', price: 80.999 },
      { id: 104, title: 'Adidas X SPEEDPORTAL.1 Fg Unise', thumbnail: '/assets/botines/b4.jpg', price: 130 },
      { id: 105, title: 'Adidas X GHOSTED.1SG', thumbnail: '/assets/botines/b5.jpg', price: 150.000 },
      { id: 106, title: 'Nike Phantom Mixtos', thumbnail: '/assets/botines/b6.jpg', price: 130 },
      { id: 107, title: 'Nike Tiempo Legend 9', thumbnail: '/assets/botines/b7.jpg', price: 130 },
      { id: 108, title: 'Nike Mercurial Superfly 16 Elite', thumbnail: '/assets/botines/b8.jpg', price: 130 },
      { id: 109, title: 'Adidas X Crazyfast', thumbnail: '/assets/botines/b9.jpg', price: 130 },
      { id: 110, title: 'Puma Ultra Future Ultimate', thumbnail: '/assets/botines/b10.jpg', price: 130 },
      { id: 111, title: 'Adidas X SPEEDPORTAL.3', thumbnail: '/assets/botines/b11.jpg', price: 130 },
      { id: 112, title: 'Nike Mercurial Vapor XIV', thumbnail: '/assets/botines/b12.jpg', price: 130 },
      { id: 113, title: 'Nike Air Zoom Mercurial Superfly IX Elite', thumbnail: '/assets/botines/b13.jpg', price: 130 },
      { id: 114, title: 'Nike Mercurial Superfly 8', thumbnail: '/assets/botines/b14.jpg', price: 130 },
      { id: 115, title: 'Nike Mercurial Superfly 8 Elite High-top', thumbnail: '/assets/botines/b15.jpg', price: 130 },
      { id: 116, title: 'Nike Air Zoom Mercurial Vapor XV', thumbnail: '/assets/botines/b16.jpg', price: 130 },
      { id: 117, title: 'Adidas X SPEEDPORTAL.3', thumbnail: '/assets/botines/b17.jpg', price: 130 },
      { id: 118, title: 'Adidas Predator Edge Crystal.1', thumbnail: '/assets/botines/b18.jpg', price: 130 },
      { id: 119, title: 'Nike Mercurial Vapor 14 Elite', thumbnail: '/assets/botines/b19.jpg', price: 130 },
      { id: 120, title: 'Nike Mercurial Vapor 14', thumbnail: '/assets/botines/b20.jpg', price: 130 },
      { id: 121, title: 'Adidas X Speedflow.1', thumbnail: '/assets/botines/b21.jpg', price: 130 },
      { id: 122, title: 'Nike Mercurial Vapor 13 Elite', thumbnail: '/assets/botines/b22.jpg', price: 130 },
      { id: 123, title: 'Nike Mercurial Superfly 8 Elite', thumbnail: '/assets/botines/b23.jpg', price: 130 },
      { id: 124, title: 'Nike Mercurial Vpor Edge Speed 360', thumbnail: '/assets/botines/b24.jpg', price: 130 },
      { id: 125, title: 'Nike Tiempo Legend', thumbnail: '/assets/botines/b25.jpg', price: 130 },
      { id: 126, title: 'Nike Air Zoom Mercurial Superfly IX Elite', thumbnail: '/assets/botines/b26.jpg', price: 130 },
      { id: 127, title: 'Adidas SG Mixtos', thumbnail: '/assets/botines/b27.jpg', price: 130 },
      { id: 128, title: 'Adidas X CrazyFast Total Black', thumbnail: '/assets/botines/b28.jpg', price: 130 },
      { id: 129, title: 'Nike Phantom GX Elite', thumbnail: '/assets/botines/b29.jpg', price: 130 },
      { id: 130, title: 'Nike Phantom GX Vapor Silver', thumbnail: '/assets/botines/b30.jpg', price: 130 },
      
    ];
    setProducts(customBotines);
  }, []);

  return (
    <div className="item-list-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <Link to={`/product/${product.id}`}>
  <img src={product.thumbnail} alt={product.title} />
  <h3>{product.title}</h3>
  <p>Precio: ${product.price}</p>
</Link>
<button onClick={() => addToCart(product)}></button>
        </div>
      ))}
    </div>
  );
}

export default ItemListContainer;
