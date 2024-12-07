// Checkout.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../../../firebase/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { useContext } from 'react';
import { CartContext } from '../../CartContext/CartContext';

const Checkout = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [emailConfirm, setEmailConfirm] = useState('');
  const [loading, setLoading] = useState(false);
  const { cart, getTotal } = useContext(CartContext);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (email !== emailConfirm) {
      alert("Los correos electrónicos no coinciden");
      return;
    }

    setLoading(true);
    try {
      const order = {
        items: cart,
        total: getTotal(),
        name,
        surname,
        phone,
        email,
        date: new Date(),
        status: 'generated'
      };

      const docRef = await addDoc(collection(db, 'orders'), order);
      alert(`Compra realizada con éxito. Número de orden: ${docRef.id}`);
      navigate('/');
    } catch (error) {
      console.error("Error al crear la orden:", error);
      alert("Hubo un error al procesar la compra");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <div>
        <input type="text" placeholder="Nombre" onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Apellido" onChange={(e) => setSurname(e.target.value)} />
        <input type="text" placeholder="Teléfono" onChange={(e) => setPhone(e.target.value)} />
        <input type="email" placeholder="Correo electrónico" onChange={(e) => setEmail(e.target.value)} />
        <input type="email" placeholder="Confirmar correo electrónico" onChange={(e) => setEmailConfirm(e.target.value)} />
      </div>
      <button onClick={handleSubmit} disabled={loading}>Realizar compra</button>
    </div>
  );
};

export default Checkout;
