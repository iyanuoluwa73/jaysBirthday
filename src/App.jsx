import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import All from "./pages/All";
import Camera from "./pages/Camera";
import Song from "./pages/Song";
import Letter from "./pages/Letter";
import Present from "./pages/Present";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/all" element={<All />} />
        <Route path="/camera" element={<Camera />} />
        <Route path="/song" element={<Song />} />
        <Route path="/letter" element={<Letter />} />
        <Route path="/present" element={<Present />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
