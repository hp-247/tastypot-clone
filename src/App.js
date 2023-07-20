import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import PotDetailsPage from "./components/PotDetailsPage";
import About from "./components/About";
import Locations from "./components/Locations";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Order from "./pages/Order";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/pot" element={<PotDetailsPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/order" element={<Order />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
