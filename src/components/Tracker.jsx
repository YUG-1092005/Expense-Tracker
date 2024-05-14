import React, { useState, useEffect } from "react";
import "./Tracker.css";

const Tracker = () => {
  const [expense, setExpense] = useState(false);
  const [income, setIncome] = useState(false);
  const [transaction, setTransaction] = useState([]);
  const [amount, setAmount] = useState([]);
  const [description, setDescription] = useState([]);
  const [expenseBalance, setExpenseBalance] = useState(0);
  const [incomeBalance, setIncomeBalance] = useState(0);
  const [showInfo, setShowInfo] = useState(false);
  const [showGreeting, setShowGreeting] = useState(true);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowGreeting(false);
    }, 3000);
  }, []);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  const handleAmt = (e) => {
    setAmount(e.target.value);
  };

  const handleDesc = (e) => {
    setDescription(e.target.value);
  };

  const expenseCheckbox = () => {
    setExpense(!expense);
  };

  const incomeCheckbox = () => {
    setIncome(!income);
  };

  const addTransaction = () => {
    if (description.length == 0 || amount.length == 0) {
      setShowAlert(true);

      setTimeout(() => {
        setShowAlert(false);
      }, 3000);

      return;
    }

    const newTranscation = {
      amount: parseFloat(amount),
      description: description,
      type: expense ? "expense" : "income",
    };
    console.log(newTranscation);
    setTransaction([...transaction, newTranscation]);
    setAmount("");
    setDescription("");
    if (newTranscation.type === "income") {
      setIncomeBalance((prevBalance) => prevBalance + newTranscation.amount);
    } else {
      setExpenseBalance((prevBalance) => prevBalance + newTranscation.amount);
    }
    setShowAlert(false);
  };

  const totalBalance = incomeBalance - expenseBalance;

  let totalBalanceStyle;
  let totalBalanceText;
  if (totalBalance <= 0.0) {
    totalBalanceStyle = { fontWeight: "bold", color: "red" };
    totalBalanceText = `Your current balance is \u20B9 0`;
  } else {
    totalBalanceStyle = {
      fontWeight: "bold",
      color: "darkgreen",
      fontSize: "1.3rem",
    };
    totalBalanceText = `Your Balance is \u20B9 ${totalBalance.toFixed(2)}`;
  }

  return (
    <div>
      {showGreeting && (
        <h4 className="greeting">
          Welcome! Start by checking the "Income" box and adding your monthly
          income.
        </h4>
      )}
      {showAlert && (
        <h4 className="greeting" style={{ color: "red" }}>
          Please enter both description and amount.
        </h4>
      )}
      <div className="container">
        <div className="add" style={{ textAlign: "center" }}>
          {totalBalanceText && (
            <h3>
              <span style={totalBalanceStyle}>{totalBalanceText}</span>
            </h3>
          )}
          <button className="addBtn" onClick={toggleInfo}>
            Add
          </button>
        </div>
        <div className={`info ${showInfo ? "active" : ""}`}>
          <input
            type="number"
            placeholder="Enter Amount"
            min={1}
            value={amount}
            onChange={handleAmt}
            className="inputs"
            disabled={totalBalance <= 0.0 && !income}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={handleDesc}
            className="inputs"
            disabled={(totalBalance <= 0.0) & !income}
          />
          <br />
          <br />
          <br />
          <input
            type="checkbox"
            disabled={income}
            checked={expense}
            onChange={expenseCheckbox}
            className="checkbox"
          />
          &nbsp;&nbsp;Expense
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="checkbox"
            disabled={expense}
            checked={income}
            onChange={incomeCheckbox}
            className="checkbox"
          />
          &nbsp;&nbsp;Income
          <br />
          <br />
          <button
            onClick={addTransaction}
            className="add-transc"
            style={{
              height: "30px",
              backgroundColor: "#135D66",
              borderRadius: "4px",
              border: "none",
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            Add Amount
          </button>
        </div>
      </div>
      <br />
      <br />
      <div className="display-container">
        <div
          className="display-ruppes"
          style={{ display: "flex", gap: "2rem" }}
        >
          <div className="display">
            <p style={{ fontWeight: "bold", fontSize: "1.2rem" }}>Expense</p>
            <br />
            <p style={{ fontWeight: "bold", color: "red", fontSize: "1.3rem" }}>
              &#8377;{expenseBalance.toFixed(2)}
            </p>
          </div>
          <div className="display">
            <p style={{ fontWeight: "bold", fontSize: "1.2rem" }}>Income</p>
            <br />
            <p
              style={{
                fontWeight: "bold",
                color: "darkgreen",
                fontSize: "1.3rem",
              }}
            >
              &#8377;{incomeBalance.toFixed(2)}
            </p>
          </div>
        </div>

        {transaction.map((item, index) => (
          <div className="details" key={index}>
            <p style={{ color: "#09282c" }}>{item.description}</p>
            <p style={{ color: item.type === "income" ? "green" : "red" }}>
              &#8377;{item.amount}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Tracker;
