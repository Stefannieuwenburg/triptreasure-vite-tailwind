import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Post from './components/Post';
import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Services from "./components/Services";
import About from "./components/About";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <div className="pt-6 px-4">
                <Post />
                {/* other content */}
              </div>
            </>
          }
        />
        <Route path="/blog" element={<Post />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
