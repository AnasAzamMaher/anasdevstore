import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct.jsx";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { CartProvider } from "./utils/AppContext";
import Newsletter from "./components/Footer/Newsletter/Newsletter.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import styles
import About from "./components/About/About.jsx";
import Payment from "./components/Payment/Payment.jsx";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="category/:id" element={<Category />} />
          <Route path="product/:id" element={<SingleProduct />} />
          <Route path="about" element={<About />} />
          <Route path="payment" element={<Payment />} />
        </Routes>
        <Newsletter />
        <Footer />
        {/* Add the ToastContainer here */}
        <ToastContainer
          position="top-left"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
