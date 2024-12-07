import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './ItemDetailContainer.css';
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const docRef = doc(db, 'Items', itemId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProducto({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.error('Producto no encontrado');
        }
      } catch (error) {
        console.error('Error al obtener el producto:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [itemId]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (!producto) {
    return <p>Producto no encontrado.</p>;
  }

  return (
    <div className="product-detail">
      <img src={producto.thumbnail} alt={producto.title} />
      <div>
        <h2>{producto.title}</h2>
        <p>{producto.description}</p>
        <h3>${producto.price.toLocaleString()}</h3>
      </div>
    </div>
  );
}

export default ItemDetailContainer;
