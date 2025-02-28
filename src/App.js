import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/HomePage";
import AddPage from "./pages/AddPage";
import UpdateForm from "./pages/UpdateForm";
import ConfirmDelete from "./pages/ConfirmDelete"
import UpdatePage from "./pages/UpdatePage";
import FilterPage from "./pages/FilterPage";
import SearchPage from "./pages/SearchPage";
import DeletePage from "./pages/DeletePage";
import MovieDetail from "./pages/MovieDetail";
// import DeletePage from "./pages/DeletePage";
// import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:id" element={<MovieDetail></MovieDetail>} />
          <Route path="/add-movie" element={<AddPage />} />
          <Route path="/search-movies" element={<SearchPage />} />
          <Route path="/delete-movie" element={<DeletePage />} />
          <Route path="/update-movie/:id" element={<UpdateForm />} />
          <Route path="/delete-movie/:id" element={<ConfirmDelete />} />
          <Route path="/update-movie" element={<UpdatePage />} />
          <Route path="/filter-movies" element={<FilterPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;