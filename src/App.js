import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import Events from "./components/Events";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<IndexPage />}></Route>
      </Routes>
    </Router>
  );
}

const IndexPage = () => {
  return (
    <div className="App">
      <Header />
      <Events />
      <Footer />
    </div>
  );
};

export default App;
