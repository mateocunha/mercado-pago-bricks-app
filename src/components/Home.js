import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [publicKey, setPublicKey] = useState('');
  const [preferenceId, setPreferenceId] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (publicKey.trim() && preferenceId.trim()) {
      navigate(`/public_key/${publicKey}/preference/${preferenceId}`);
    }
  };

  return (
    <div className="home-container">
      <h2>Mercado Pago Bricks Integration</h2>
      <p>Enter your Mercado Pago credentials to proceed to payment:</p>
      <form onSubmit={handleSubmit} className="preference-form">
        <input
          type="text"
          value={publicKey}
          onChange={(e) => setPublicKey(e.target.value)}
          placeholder="Enter Mercado Pago Public Key"
          required
          className="preference-input"
        />
        <input
          type="text"
          value={preferenceId}
          onChange={(e) => setPreferenceId(e.target.value)}
          placeholder="Enter Preference ID"
          required
          className="preference-input"
        />
        <button type="submit" className="proceed-button">
          Proceed to Payment
        </button>
      </form>
      <div className="info-note">
        <p><strong>Note:</strong> You need both a valid Mercado Pago public key and preference ID.</p>
        <p>You can create a preference using the <a href="https://www.mercadopago.com/developers/en/reference/preferences/_checkout_preferences/post" target="_blank" rel="noopener noreferrer">Mercado Pago API</a>.</p>
      </div>
    </div>
  );
};

export default Home;
