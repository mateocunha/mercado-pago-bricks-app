# Mercado Pago Bricks Integration

This is a React application that demonstrates how to integrate Mercado Pago Bricks for processing payments. The application allows users to enter a Mercado Pago preference ID and process payments using the Bricks UI component.

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- A Mercado Pago account with API credentials

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mercado-pago-bricks-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up your Mercado Pago public key**
   - Open `src/components/Payment.js`
   - Replace `'YOUR_PUBLIC_KEY'` with your actual Mercado Pago public key

4. **Start the development server**
   ```bash
   npm start
   ```
   This will start the application on [http://localhost:3000](http://localhost:3000)

## How to Use

1. **Home Page**
   - The home page displays a form where you can enter a Mercado Pago preference ID.
   - You can get a test preference ID by creating one using the [Mercado Pago API](https://www.mercadopago.com/developers/en/reference/preferences/_checkout_preferences/post).

2. **Payment Page**
   - After entering a preference ID and clicking "Proceed to Payment", you'll be redirected to the payment page.
   - The page will load the Mercado Pago Bricks payment form based on the provided preference ID.
   - Users can complete the payment using the Bricks UI component.

## Features

- Clean, responsive design
- Error handling for invalid preference IDs
- Loading states for better user experience
- Easy navigation between pages

## Environment Variables

For production, you should set your Mercado Pago public key as an environment variable. Create a `.env` file in the root of your project and add:

```
REACT_APP_MERCADO_PAGO_PUBLIC_KEY=your_public_key_here
```

Then update the `Payment.js` component to use this environment variable.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production

## Learn More

- [Mercado Pago Bricks Documentation](https://www.mercadopago.com/developers/en/guides/online-payments/checkout-bricks/introduction)
- [React Documentation](https://reactjs.org/)
- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)

## License

This project is open source and available under the MIT License.
