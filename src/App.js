import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../src/pages/landing-page/landing-page";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}>
          {" "}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
