import React, { useState, useEffect } from 'react';
import { db } from '../../firebase/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import Item from '../Item/Items'; 

const ItemListContainer = () => {
  const [items, setItems] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'Items'));
        const productos = querySnapshot.docs.map((doc) => doc.data());
        setItems(productos); 
        setLoading(false); 
      } catch (error) {
        console.error("Error al cargar los productos:", error);
        setLoading(false); 
      }
    };

    fetchItems(); 
  }, []);

 
  if (loading) {
    return <div>Cargando...</div>; 
  }

  return (
    <div>
      {items.length === 0 ? (
        <p>No hay productos disponibles.</p>
      ) : (
        <div>
          {items.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
