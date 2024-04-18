import React from "react";
import Home from "./pages/home/home";
import Pages from "./pages/pages";
import { BrowserRouter, Router } from 'react-router-dom'


function App() {
  return (

      <BrowserRouter>
        <Pages />
      </BrowserRouter>
  );
}

export default App;
