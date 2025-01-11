import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./UserDashboard.css";
import { Banknote, HandCoins, FileDigit } from "lucide-react";
import { RadialProgress } from "../RadialProgress/Radial";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const mockData = {
  totalBudget: 5000,
  totalSpent: 3750,
  numberOfBudgets: 5,
  spendingHistory: [
    { month: "Jan", amount: 500 },
    { month: "Feb", amount: 700 },
    { month: "Mar", amount: 600 },
    { month: "Apr", amount: 950 },
    { month: "May", amount: 1000 },
  ],
  budgets: [
    { name: "Groceries", amount: 500, spent: 450 },
    { name: "Entertainment", amount: 300, spent: 275 },
    { name: "Transportation", amount: 200, spent: 180 },
    { name: "Utilities", amount: 400, spent: 395 },
    { name: "Savings", amount: 1000, spent: 1000 },
  ],
};

const AnimatedCounter = ({ value, duration = 1 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value.toString().substring(0, 3));
    if (start === end) return;

    let totalMilSecDur = parseInt(duration.toString().substring(0, 2)) * 50;
    let incrementTime = (totalMilSecDur / end) * 1000;

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <span>{count}</span>;
};

const BudgetCard = ({ name, amount, spent }) => {
  const percentage = amount > 0 ? Math.round((spent / amount) * 100) : 0;

  return (
    <motion.div whileHover={{ scale: 1.05 }} className="dashboard-budget-card">
      <h3 className="dashboard-budget-card-title">{name}</h3>
      <div className="dashboard-budget-card-content">
        <div className="dashboard-budget-spent">
          <div className="dashboard-budget-left">
            <p className="dashboard-budget-card-text">Budget: ${amount}</p>
          </div>
          <div className="dashboard-budget-center">
            <p className="dashboard-budget-center-text">${amount-spent}</p>
          </div>
          <div className="dashboard-budget-right">
            <p className="dashboard-budget-card-text">Spent: ${spent}</p>
          </div>
        </div>

        <div className="dashboard-card-progress">
          <div
            className="dashboard-card-progress-bar"
            style={{
              width: `${percentage}%`,
            }}
          ></div>
        </div>
      </div>
    </motion.div>
  );
};

export default function UserDashboard() {
  const spendingData = {
    labels: mockData.spendingHistory.map((item) => item.month),
    datasets: [
      {
        label: "Total spending",
        data: mockData.spendingHistory.map((item) => item.amount),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgb(75, 192, 192)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-header">Username's Dashboard</h1>

      <div className="dashboard-stats">
        <div className="dashboard-stat-card">
          <div className="dashboard-card-content">
            <header className="dashboard-sub-header">
              <h2>Total Budget</h2>
            </header>
            <div className="dashboard-stat-value">
              $4000
              {/* $<AnimatedCounter value={mockData.totalBudget} /> */}
            </div>
          </div>
          <div className="dashboard-banknote">
            <Banknote />
          </div>
        </div>
        <div className="dashboard-stat-card">
          <div className="dashboard-card-content">
            <header className="dashboard-sub-header">
              <h2>Total amount spent</h2>
            </header>
            <div className="dashboard-stat-value">
              $4000
              {/* $<AnimatedCounter value={mockData.totalBudget} /> */}
            </div>
          </div>
          <div className="dashboard-banknote">
            <HandCoins />
          </div>
        </div>
        <div className="dashboard-stat-card">
          <div className="dashboard-card-content">
            <header className="dashboard-sub-header">
              <h2>No. of budget</h2>
            </header>
            <div className="dashboard-stat-value">
              5{/* $<AnimatedCounter value={mockData.totalBudget} /> */}
            </div>
          </div>
          <div className="dashboard-banknote">
            <FileDigit />
          </div>
        </div>
      </div>

      <div className="dashboard-charts">
        <div className="dashboard-chart-card">
          <header>
            <h2>Spending Trend</h2>
          </header>
          <div className="dashboard-chart">
            <Bar data={spendingData} options={{ maintainAspectRatio: false }} />
          </div>
        </div>
        <div className="dashboard-chart-card">
          <header>
            <h2>Budget Usage</h2>
          </header>
          <div className="dashboard-chart-center">
            <RadialProgress
              percentage={
                mockData.totalBudget > 0
                  ? Math.round(
                      (mockData.totalSpent / mockData.totalBudget) * 100
                    )
                  : 0
              }
            />
          </div>
          <p style={{ opacity: "0.6" }}>
            Your total budget usage is:{" "}
            {mockData.totalBudget > 0
              ? Math.round((mockData.totalSpent / mockData.totalBudget) * 100)
              : 0}
            %
          </p>
        </div>
      </div>

      <h2 className="dashboard-section-header">Your Budgets</h2>
      <div className="dashboard-budgets">
        {mockData.budgets.map((budget, index) => (
          <BudgetCard key={index} {...budget} />
        ))}
      </div>
    </div>
  );
}
