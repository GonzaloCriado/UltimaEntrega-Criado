
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../CartContext/CartContext';
import './ItemDetailContainer.css';

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const customBotines = [
      { id: 101, title: 'Adidas XSPEEDFLOW', description: 'Botines ligeros ideales para velocidad, con suela de alto agarre que maximiza tu rendimiento en el campo.', thumbnail: '/assets/botines/b1.jpg', price: 120 },
  { id: 102, title: 'Nike Tiempo Legend 10 Elite', description: 'Con excelente agarre y control, estos botines proporcionan un ajuste cómodo para una experiencia superior en el campo.', thumbnail: '/assets/botines/b2.jpg', price: 130 },
  { id: 103, title: 'Nike Tiempo Legend 10 Elite', description: 'Un diseño innovador y materiales de alta calidad, pensados para los jugadores que buscan control y estabilidad en su juego.', thumbnail: '/assets/botines/b3.jpg', price: 130 },
  { id: 104, title: 'Adidas X SPEEDPORTAL.1 Fg Unise', description: 'Botines diseñados para los más veloces, con tecnología que favorece la tracción en césped firme y la velocidad en cada paso.', thumbnail: '/assets/botines/b4.jpg', price: 130 },
  { id: 105, title: 'Adidas X GHOSTED.1SG', description: 'La ligereza y el diseño agresivo de estos botines te permitirán dejar atrás a tus oponentes con cada sprint.', thumbnail: '/assets/botines/b5.jpg', price: 150 },
  { id: 106, title: 'Nike Phantom Mixtos', description: 'El diseño de estos botines está pensado para quienes necesitan un calzado con un rendimiento excepcional tanto en césped natural como artificial.', thumbnail: '/assets/botines/b6.jpg', price: 130 },
  { id: 107, title: 'Nike Tiempo Legend 9', description: 'El toque suave y la comodidad del Tiempo Legend 9 brindan la estabilidad perfecta para jugadores que buscan precisión en cada jugada.', thumbnail: '/assets/botines/b7.jpg', price: 130 },
  { id: 108, title: 'Nike Mercurial Superfly 16 Elite', description: 'Estos botines están diseñados para jugadores rápidos, con una suela de alto rendimiento que optimiza la tracción en el campo.', thumbnail: '/assets/botines/b8.jpg', price: 130 },
  { id: 109, title: 'Adidas X Crazyfast', description: 'La tecnología de estos botines reduce el peso para dar mayor agilidad y rapidez en el campo, perfectos para los jugadores que buscan velocidad.', thumbnail: '/assets/botines/b9.jpg', price: 130 },
  { id: 110, title: 'Puma Ultra Future Ultimate', description: 'Diseño futurista con materiales de última tecnología para ofrecer el máximo control y velocidad en el campo de juego.', thumbnail: '/assets/botines/b10.jpg', price: 130 },
  { id: 111, title: 'Adidas X SPEEDPORTAL.3', description: 'El modelo más rápido de Adidas, diseñado para ofrecer un ajuste perfecto y una aceleración sin igual en cualquier superficie.', thumbnail: '/assets/botines/b11.jpg', price: 130 },
  { id: 112, title: 'Nike Mercurial Vapor XIV', description: 'Estos botines ligeros y rápidos te ofrecen una excelente tracción, lo que los hace ideales para jugadores de velocidad y agilidad.', thumbnail: '/assets/botines/b12.jpg', price: 130 },
  { id: 113, title: 'Nike Air Zoom Mercurial Superfly IX Elite', description: 'La última tecnología en comodidad y rendimiento, con una estructura ligera que favorece movimientos rápidos y precisos.', thumbnail: '/assets/botines/b13.jpg', price: 130 },
  { id: 114, title: 'Nike Mercurial Superfly 8', description: 'Estos botines cuentan con una suela optimizada para los jugadores que buscan una aceleración explosiva en cada jugada.', thumbnail: '/assets/botines/b14.jpg', price: 130 },
  { id: 115, title: 'Nike Mercurial Superfly 8 Elite High-top', description: 'Botines de alto rendimiento con un ajuste de tobillo reforzado, ideales para jugadores que buscan seguridad y rapidez.', thumbnail: '/assets/botines/b15.jpg', price: 130 },
  { id: 116, title: 'Nike Air Zoom Mercurial Vapor XV', description: 'Ligereza y velocidad combinadas para ofrecerte una experiencia de juego única, pensados para el jugador explosivo.', thumbnail: '/assets/botines/b16.jpg', price: 130 },
  { id: 117, title: 'Adidas X SPEEDPORTAL.3', description: 'Perfectos para los jugadores que buscan llevar su juego al siguiente nivel, estos botines ofrecen tracción y velocidad superior.', thumbnail: '/assets/botines/b17.jpg', price: 130 },
  { id: 118, title: 'Adidas Predator Edge Crystal.1', description: 'Con un diseño agresivo y una suela optimizada para control y precisión, estos botines son ideales para jugadores que dominan el campo.', thumbnail: '/assets/botines/b18.jpg', price: 130 },
  { id: 119, title: 'Nike Mercurial Vapor 14 Elite', description: 'Diseñados para los jugadores que buscan velocidad y maniobrabilidad, estos botines ofrecen un ajuste perfecto y rendimiento superior.', thumbnail: '/assets/botines/b19.jpg', price: 130 },
  { id: 120, title: 'Nike Mercurial Vapor 14', description: 'La nueva versión de los Mercurial, más rápidos y cómodos, con una suela que optimiza la aceleración y el control en el campo.', thumbnail: '/assets/botines/b20.jpg', price: 130 },
  { id: 121, title: 'Adidas X Speedflow.1', description: 'Con un diseño aerodinámico y materiales de alta tecnología, estos botines ofrecen la velocidad necesaria para marcar la diferencia en el juego.', thumbnail: '/assets/botines/b21.jpg', price: 130 },
  { id: 122, title: 'Nike Mercurial Vapor 13 Elite', description: 'Botines livianos y resistentes, perfectos para jugadores rápidos que buscan agilidad y precisión en cada movimiento.', thumbnail: '/assets/botines/b22.jpg', price: 130 },
  { id: 123, title: 'Nike Mercurial Superfly 8 Elite', description: 'La combinación de ligereza y tracción en estos botines los hace ideales para jugadores que priorizan la velocidad y el cambio de dirección.', thumbnail: '/assets/botines/b23.jpg', price: 130 },
  { id: 124, title: 'Nike Mercurial Vapor Edge Speed 360', description: 'Con una suela innovadora, estos botines están diseñados para jugadores de velocidad que desean dominar cada partido con rapidez y precisión.', thumbnail: '/assets/botines/b24.jpg', price: 130 },
  { id: 125, title: 'Nike Tiempo Legend', description: 'Elegancia y control, estos botines ofrecen una comodidad insuperable y un rendimiento excelente en el campo.', thumbnail: '/assets/botines/b25.jpg', price: 130 },
  { id: 126, title: 'Nike Air Zoom Mercurial Superfly IX Elite', description: 'Los Air Zoom Mercurial proporcionan un ajuste preciso y una suela optimizada para jugadores que necesitan velocidad sin comprometer el control.', thumbnail: '/assets/botines/b26.jpg', price: 130 },
  { id: 127, title: 'Adidas SG Mixtos', description: 'Con una suela especialmente diseñada para césped híbrido, estos botines ofrecen un rendimiento superior tanto en césped natural como artificial.', thumbnail: '/assets/botines/b27.jpg', price: 130 },
  { id: 128, title: 'Adidas X CrazyFast Total Black', description: 'El diseño total black de estos botines está pensado para los jugadores que desean destacar con un estilo único mientras juegan con la mejor tecnología.', thumbnail: '/assets/botines/b28.jpg', price: 130 },
  { id: 129, title: 'Nike Phantom GX Elite', description: 'Ideal para jugadores que buscan un ajuste ceñido y la mejor tracción para controlar el juego con velocidad y precisión.', thumbnail: '/assets/botines/b29.jpg', price: 130 },
  { id: 130, title: 'Nike Phantom GX Vapor Silver', description: 'La combinación de materiales livianos y la tecnología avanzada en la suela te permitirán moverte con rapidez y ejecutar movimientos precisos en cualquier terreno.', thumbnail: '/assets/botines/b30.jpg', price: 130 }
    ];

    const selectedProduct = customBotines.find((botin) => botin.id === parseInt(itemId));

    if (selectedProduct) {
      setProduct(selectedProduct);
    }
    setLoading(false);
  }, [itemId]);

  if (loading) return <p>Cargando...</p>;
  if (!product) return <p>Producto no encontrado</p>;

  return (
    <div className="item-detail-container">
      <div className="image-container">
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <div className="details-container">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>Precio: ${product.price}</p>
        <button onClick={() => addToCart(product)}></button>
      </div>
    </div>
  );
}

export default ItemDetailContainer;

