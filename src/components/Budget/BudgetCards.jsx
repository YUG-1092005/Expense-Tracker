import React from "react";
import "./BudgetCards.css";
import { motion } from "framer-motion";


const BudgetCards = () => {
  const budgets = [
    {
      title: "Shopping",
      items: 1,
      total: 2500,
      spent: 270,
      icon: "🛍️",
    },
    {
      title: "Home Decor",
      items: 3,
      total: 3800,
      spent: 3300,
      icon: "🏠",
    },
    {
      title: "Garden",
      items: 2,
      total: 1500,
      spent: 160,
      icon: "🌴",
    },
    {
      title: "Car",
      items: 1,
      total: 2500,
      spent: 120,
      icon: "🚗",
    },
    {
      title: "Youtube",
      items: 2,
      total: 5000,
      spent: 1100,
      icon: "📹",
    },
  ];

  return (
    <div className="budget-cards-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="budget-cards-title">My Budgets</h2>
        <div className="budget-cards-grid">
          <div className="budget-card-create">
            <div className="budget-card-create-content">
              <span>+</span>
              <p>Create New Budget</p>
            </div>
          </div>
          {budgets.map((budget, index) => (
            <div className="budget-card" key={index}>
              <div className="budget-card-header">
                <div className="budget-title-icon">
                  <div className="budget-card-icon">{budget.icon}</div>
                  <div className="budget-card-details">
                    <h3>{budget.title}</h3>
                  </div>
                </div>
                <div className="budget-total-items">
                  <span className="budget-card-total">${budget.total}</span>
                  <p style={{ color: "#0f4147" }}>
                    {budget.items} Item{budget.items > 1 ? "s" : ""}
                  </p>
                </div>
              </div>

              <div className="budget-remain-spent">
                <p className="budget-card-spent">${budget.spent} Spent</p>
                <p className="budget-card-remaining">
                  ${budget.total - budget.spent} Remaining
                </p>
              </div>

              <div className="budget-card-progress">
                <div
                  className="budget-card-progress-bar"
                  style={{
                    width: `${(budget.spent / budget.total) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default BudgetCards;
