import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [preferenceId, setPreferenceId] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (preferenceId.trim()) {
      navigate(`/payment/${preferenceId}`);
    }
  };

  return (
    <div className="home-container">
      <h2>Mercado Pago Bricks Integration</h2>
      <p>Enter a preference ID to proceed to payment:</p>
      <form onSubmit={handleSubmit} className="preference-form">
        <input
          type="text"
          value={preferenceId}
          onChange={(e) => setPreferenceId(e.target.value)}
          placeholder="Enter preference ID"
          required
          className="preference-input"
        />
        <button type="submit" className="proceed-button">
          Proceed to Payment
        </button>
      </form>
      <div className="info-note">
        <p><strong>Note:</strong> You need a valid Mercado Pago preference ID to test the payment.</p>
        <p>You can create one using the <a href="https://www.mercadopago.com/developers/en/reference/preferences/_checkout_preferences/post" target="_blank" rel="noopener noreferrer">Mercado Pago API</a>.</p>
      </div>
    </div>
  );
};

export default Home;
