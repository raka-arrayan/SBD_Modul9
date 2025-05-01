import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Welcome from "./Welcome";
import Footer from "./Footer";
import LoginRegister from "./LoginRegister";
import Profile from "./Profile";
import Faq from "./Faq";
import About from "./About";
import Store from "./Store";
import Item from "./Item";
import Transaction from "./Transaction";
import Topup from "./Topuup";
import CartSummary  from "./CartSummary";


function Home() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Welcome />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Topup />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <Store />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <Item />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
        viewport={{ once: true }}
      >
        <Transaction />
      </motion.div>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginRegister />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Faq" element={<Faq />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<CartSummary />} />
      </Routes>
    </Router>
  );
}
