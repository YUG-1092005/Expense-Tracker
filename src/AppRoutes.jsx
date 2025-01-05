import {
  Route,
  Routes,
} from "react-router-dom";
import Homepage from "./components/HomePage/home";
import Tracker from "./components/Calculate/Tracker";
import BudgetCards from "./components/Budget/BudgetCards";
import SignUpPage from "./components/Credentials/SignUp/SignUp";
import LoginPage from "./components/Credentials/LogIn/Login";

const AppRoutes = () => {
  return (
        <>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/calculate/expense" element={<Tracker/>} />
            <Route path="/budgets" element={<BudgetCards/>} />
            <Route path="/spendwise/signup" element={<SignUpPage/>} />
            <Route path="/spendwise/login" element={<LoginPage/>} />
          </Routes>
        </>
  );
};

export default AppRoutes;
