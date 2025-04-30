  import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
  import Navbar from "./Navbar";
  import Counter from "./Counter";
  import CardList from "./Cardlist";
  import Footer from "./Footer";
  import LoginRegister from "./LoginRegister";

  function Home() {
    return (
      <>
        <Counter />
        <CardList />
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
        </Routes>
      </Router>
    );
  }
