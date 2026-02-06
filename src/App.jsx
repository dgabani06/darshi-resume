import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";

export default function App() {
    return (
        <div className="min-h-screen text-white bg-gradient-to-br from-black to-blue-950">

            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </div>
    );
}
