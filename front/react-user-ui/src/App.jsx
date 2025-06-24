import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Menubar from "./components/Menubar";
import Footer from "./components/Footer";
import GenerateFromImage from "./pages/GenerateFromImage";
import GenerateFromText from "./pages/GenerateFromText";
import Pricing from "./components/Pricing";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      
      <Menubar />

         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/GenerateFromImage" element={<GenerateFromImage />} />
          <Route path="/GenerateFromText" element={<GenerateFromText />} />
         <Route path="/Pricing" element={<Pricing />} />


        </Routes>
              
            

           <Footer />
      </div>
  );
};

export default App;