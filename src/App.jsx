import Navbar from "./components/Navbar/Navbar.jsx";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes.jsx";
import Footer from "./components/Footer/Footer.jsx";


function App() {

  return (
    <>
     
        <BrowserRouter>
          <Navbar/>
          <AppRoutes />
          {/* <Footer /> */}
        </BrowserRouter>
    </>
  );
}

export default App;
