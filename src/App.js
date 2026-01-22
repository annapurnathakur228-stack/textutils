import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import Alert from "./components/Alert";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [textcolor, setTextcolor] = useState("text-dark");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type });
    setTimeout(() => setAlert(null), 1500);
  };

  const toggle = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(16 18 38)";
      setTextcolor("text-light");
      showAlert("Dark Mode Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setTextcolor("text-dark");
      showAlert("Light Mode Enabled", "success");
    }
  };

  const resetAll = () => {
    setMode("light");
    setTextcolor("text-dark");
    document.body.style.backgroundColor = "white";
  };

  return (
    <Router>
      {/* ✅ Navbar ALWAYS visible */}
      <Navbar
        title="TextUtils"
        AboutTextutils="About"
        mode={mode}
        toggle={toggle}
        textcolor={textcolor}
      />

      <Alert alert={alert} />

      <div className="container my-3">
        <Routes>
          {/* ✅ HOME ROUTE */}
          <Route
            path="/"
            element={
              <TextForm
                heading="Enter the text to analyze"
                textcolor={textcolor}
                showAlert={showAlert}
                resetAll={resetAll}
              />
            }
          />

          {/* ✅ ABOUT ROUTE */}
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
