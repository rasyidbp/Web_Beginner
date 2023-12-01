import './App.css';
import Navigasi from './components/navigasi.js';
import Home from './home';
import DataSmartphones from './category/smartphones.js';
import DataLaptops from './category/laptops.js';
import DataFragrances from './category/fragrances.js';
import DataSkincares from './category/skincares.js';
import DataGroceries from './category/groceries.js';
import DataDecors from './category/decors.js';
import {
    BrowserRouter,
    Link,
    Route,
    Routes,
  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
    return (
        <>
        <BrowserRouter>
            <Navigasi />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/smartphones" element={<DataSmartphones />} />
        <Route path="/laptops" element={<DataLaptops />} />
        <Route path="/fragrances" element={<DataFragrances />} />
        <Route path="/skincare" element={<DataSkincares />} />
        <Route path="/groceries" element={<DataGroceries />} />
        <Route path="/decors" element={<DataDecors />} />
      </Routes>
    </BrowserRouter>
        </>
    );
}
export default App;