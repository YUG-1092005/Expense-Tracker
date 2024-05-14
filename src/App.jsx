import Navbar from "./components/Navbar";
import Tracker from "./components/Tracker";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <h2
          style={{ textAlign: "center", margin: "2rem", color: "#19524d" }}
          className="title"
        >
          SpendWise- Tracking Expenses, Maximizing Income!
        </h2>
      </div>

      <Tracker />
    </>
  );
}

export default App;
