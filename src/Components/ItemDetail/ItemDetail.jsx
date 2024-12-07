import React from 'react';

const ItemDetail = ({ item }) => {
  return (
    <div>
      <h2>{item.title}</h2>
      <img src={item.thumbnail} alt={item.title} />
      <p>Precio: {item.price}</p>
    </div>
  );
};

export default ItemDetail;
