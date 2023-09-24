// App.js
import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from 'react-router-dom';
import Container from './components/contener/Contener'; // Import renamed component
import DetailsPage from "./components/detailsPage/detailsPage"; // Import detailsPage component
import Checkout from "./components/Checkout/Checkout";

const defaultTheme = createTheme();

function App() {
  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <Header />
        <Routes>
          <Route path='/' element={<Container />} /> {/* Use renamed component */}
          <Route path='/product/:id' element={<DetailsPage />} /> {/* Use detailsPage component */}
          <Route path='/checkout' element={<Checkout />} /> {/* Use detailsPage component */}

        </Routes>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
