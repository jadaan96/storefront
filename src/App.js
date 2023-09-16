// import './App.css';
import * as React from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Product from "./components/product/Product";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();
function App() {
  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <Header />
        <Hero />
        <Product />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
