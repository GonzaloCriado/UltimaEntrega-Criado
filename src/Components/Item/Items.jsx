import { Link } from 'react-router-dom';
import './Items.css';

function Items({ id, title, description, thumbnail, price }) {
  return (
    <div className="product-item">
      <img src={thumbnail} alt={title} className="product-thumbnail" />
      <div className="hover-info">
        <h3>{title}</h3>
        <p>Precio: ${price}</p>
        <Link to={`/item/${id}`}>Ver detalles</Link>
      </div>
    </div>
  );
}

export default Items;
