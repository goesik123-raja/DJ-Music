import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Events from "./Events";
import Navbar from "./Navbar";
import User from "./User";
import Music from "./Music";
import Data from "./Data";
import './index.css';

import './Events.css';
import './User.css';
import './Music.css';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Events" element={<Events />} />
                <Route path="/User" element={<User />} />
                <Route path="/Music" element={<Music />} />
                <Route path="/Data" element={<Data/>} />
            </Routes>

        </BrowserRouter>
    );
}

export default App;