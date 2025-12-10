import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { initMercadoPago, Payment as PaymentBrick } from '@mercadopago/sdk-react';

const Payment = () => {
  const { preferenceId } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const initialization = {
    amount: 100, // This will be overridden by the preference
    preferenceId: preferenceId,
  };
  const navigate = useNavigate();

  // Initialize Mercado Pago with your public key
  // Replace 'YOUR_PUBLIC_KEY' with your actual Mercado Pago public key
  useEffect(() => {
    const init = async () => {
      try {
        await initMercadoPago('APP_USR-40b76792-6418-4be9-8a9a-0144db8b9b30', {
          locale: 'es-AR',
        });
        setLoading(false);
      } catch (err) {
        console.error('Error initializing Mercado Pago:', err);
        setError('Failed to initialize payment processor. Please try again later.');
        setLoading(false);
      }
    };

    init();
  }, []);

  const handleError = async (error) => {
    console.error('Payment error:', error);
    setError('An error occurred while processing your payment. Please try again.');
  };

  const onSubmit = async ({ selectedPaymentMethod, formData }) => {
    // callback called when clicking on submit data button
    // Here you would send the payment data to your backend
    console.log('Payment submitted:', { selectedPaymentMethod, formData });
    
    return new Promise((resolve, reject) => {
      // You should send this data to your backend to process the payment
      // For now, we'll just resolve after a short delay
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  };

  const onReady = async () => {
    // Callback called when Brick is ready
    console.log('Payment Brick is ready');
  };

  if (loading) {
    return <div className="loading">Loading payment processor...</div>;
  }

  if (error) {
    return (
      <div className="error-container">
        <p className="error-message">{error}</p>
        <button onClick={() => navigate('/')} className="back-button">
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="payment-container">
      <h2>Complete Your Payment</h2>
      <p>Preference ID: {preferenceId}</p>
      
      <div className="payment-brick-container">
        <PaymentBrick
          initialization={initialization}
          customization={{
            paymentMethods: {
              creditCard: 'all',
              debitCard: 'all',
              ticket: 'all',
              bankTransfer: 'all',
              atm: 'all',
              mercadoPago: 'all',
            },
          }}
          onSubmit={onSubmit}
          onReady={onReady}
          onError={handleError}
        />
      </div>
      
      <button onClick={() => navigate('/')} className="back-button">
        Back to Home
      </button>
    </div>
  );
};

export default Payment;
