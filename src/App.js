import { Route, Routes } from "react-router-dom";
import ComingSoon from "./components/movie/ComingSoon";
import NowPlaying from "./components/home/NowPlaying";
import Movie from "./components/movie/Movie";
import Nav from "./components/navigation/Nav";
import Popular from "./components/movie/Popular";
import { CssBaseline } from "@mui/material";
import TopRated from "./components/movie/TopRated";
require('./App.css')
function App() {
  return (
    <div className="App">
    <CssBaseline />
      <Nav />
      <Routes>
        <Route path='/' element={<NowPlaying />} />
        <Route path='/movie/:movieId' element={<Movie />} />
        <Route path='/comingSoon' element={<ComingSoon /> } />
        <Route path='/popular' element={<Popular />} />
        <Route path='/topRated' element={<TopRated />} />
      </Routes>
    </div>
  );
}

export default App;
