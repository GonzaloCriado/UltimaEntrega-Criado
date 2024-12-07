import { Link } from 'react-router-dom';
import './Items.css';

function Item({ id, title, thumbnail, price }) {
  
  const formattedPrice = price && !isNaN(price) ? price.toLocaleString() : 'Precio no disponible';

  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={thumbnail} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Precio: ${formattedPrice}</p>
        <Link to={`/product/${id}`} className="btn btn-primary">
          Ver detalles
        </Link>
      </div>
    </div>
  );
}

export default Item;
