import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import Alert from "./components/Alert";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [textcolor, setTextcolor] = useState("text-dark");
  const [alert, setAlert] = useState(null);
  const [mycolor, setMycolor] = useState("white");

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 500);
  };

  const toggle = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "rgb(16 18 38)";
      setTextcolor("text-light");
      showAlert("Dark Mode Enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      setTextcolor("text-dark");
      showAlert("Light Mode Enabled", "success");
    }
  };

  const resetAll = () => {
    setmode("light");
    setTextcolor("text-dark");
    setMycolor("white");
    setAlert(null);
    document.body.style.backgroundColor = "white";
  };

  return (
    <Router>
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
          <Route
            path="/Home"
            element={
              <TextForm
                heading="Enter the text to analyze"
                textcolor={textcolor}
                showAlert={showAlert}
                resetAll={resetAll}
              />
            }
          />

          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
