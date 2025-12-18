import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Toaster position="bottom-right" />
      <Navbar />
      <main className="grow">
        <Home />
        <About />
        <Work />
        <Contact />
      </main>
    </div>
  );
};

export default App;
