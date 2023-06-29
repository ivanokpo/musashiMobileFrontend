import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";

const App = () => {
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  return (
    <div className="App" style={{}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home backendUrl={backendUrl}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
