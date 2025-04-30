  import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
  import Navbar from "./Navbar";
  import Welcome from "./Welcome";
  import ECommercePage from "./ECommercePage";
  import Footer from "./Footer";
  import LoginRegister from "./LoginRegister";
  import Profile from "./Profile";
  import Faq from "./Faq";
  import About from "./About";

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
          <Route path="/profile" element={<Profile />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    );
  }
