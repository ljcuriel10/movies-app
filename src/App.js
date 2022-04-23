import { Route, Routes } from "react-router-dom";
import ComingSoon from "./components/movie/ComingSoon";
import NowPlaying from "./components/home/NowPlaying";
import Movie from "./components/movie/Movie";
import Nav from "./components/navigation/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<NowPlaying />} />
        <Route path='/movie/:movieId' element={<Movie />} />
        <Route path='/comingSoon' element={<ComingSoon /> } />
      </Routes>
    </div>
  );
}

export default App;
