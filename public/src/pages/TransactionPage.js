

// src/components/TransactionPage.js
import React, { useState } from 'react';

function TransactionPage() {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [transactionStatus, setTransactionStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simulate a server request (you would replace this with your actual server logic)
    try {
      // Send data to a server and get the response (e.g., success or error message)
      // Simulate a successful response for demonstration purposes
      const response = await simulateServerRequest();
      
      // Update the transaction status based on the response
      setTransactionStatus(response);
    } catch (error) {
      // Handle any errors from the server here
      console.error('Server error:', error);
      // Update the transaction status to indicate an error
      setTransactionStatus('Transaction failed. Please try again.');
    }
  };

  // Simulated server request (replace with actual server logic)
  const simulateServerRequest = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Simulate a successful response for demonstration purposes
        resolve('Transaction successful!');
      }, 1000); // Simulating a 2-second server response time
    });
  };

  return (
    <div>
      <h1>Make a Payment</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="recipient">Recipient:</label>
          <input
            type="text"
            id="recipient"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            min="0"
            required
          />
        </div>
        <button type="submit">Submit Payment</button>
      </form>

      {transactionStatus && <div className="transaction-status">{transactionStatus}</div>}
    </div>
  );
}

export default TransactionPage;
