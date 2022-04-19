import { Route, Routes } from "react-router-dom";
import NowPlaying from "./components/home/NowPlaying";

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<NowPlaying />} />
    </Routes>
    </div>
  );
}

export default App;
