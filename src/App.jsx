  import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
  import Navbar from "./Navbar";
  import Welcome from "./Welcome";
  import ECommercePage from "./ECommercePage";
  import Footer from "./Footer";
  import LoginRegister from "./LoginRegister";

  function Home() {
    return (
      <>
        <Welcome />
        <ECommercePage />
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
