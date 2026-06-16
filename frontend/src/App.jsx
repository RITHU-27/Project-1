import { useState } from "react";
import "./App.css";

function App() {
  const [balance, setBalance] = useState(10000);
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [transactions, setTransactions] = useState([]);

  const handleDeposit = () => {
    const value = Number(amount);

    if (value <= 0) {
      setMessage("⚠ Please enter a valid amount");
      return;
    }

    setBalance((prev) => prev + value);
    setTransactions([
      ...transactions,
      `Deposited ₹${value}`
    ]);
    setMessage(`✅ Successfully deposited ₹${value}`);
    setAmount("");
  };

  const handleWithdraw = () => {
    const value = Number(amount);

    if (value <= 0) {
      setMessage("⚠ Please enter a valid amount");
      return;
    }

    if (value > balance) {
      setMessage("❌ Insufficient Balance");
      return;
    }

    setBalance((prev) => prev - value);
    setTransactions([
      ...transactions,
      `Withdrawn ₹${value}`
    ]);
    setMessage(`✅ Successfully withdrawn ₹${value}`);
    setAmount("");
  };

  return (
    <div className="atm-container">
      <div className="atm-card">
        <h4>🏧 ATM Management System</h4>

        <div className="balance-box">
          <h2>Available Balance</h2>
          <p>₹ {balance}</p>
        </div>

        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <div className="button-group">
          <button className="deposit-btn" onClick={handleDeposit}>
            Deposit
          </button>
          <button className="withdraw-btn" onClick={handleWithdraw}>
            Withdraw
          </button>
        </div>

        {message && <p className="message">{message}</p>}

        <div className="history">
          <h3>Transaction History</h3>
          {transactions.length === 0 ? (
            <p>No transactions yet</p>
          ) : (
            <ul>
              {transactions.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;