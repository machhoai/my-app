import { useParams } from "react-router-dom";
import movies from "../movies";
import Button from 'react-bootstrap/Button';

const MovieDetail = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === id);
console.log(movie);
    
  if (!movie) {
    return <h1 className="text-center text-2xl mt-10">Movie not found</h1>;
  }
  
  const handleSubmit = () => {
    return (
      alert("Success! Movie is updated.")
    )
  }
  
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl font-bold mb-6">Edit Movie</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-semibold">Title:</label>
          <input
            type="text"
            name="title"
            value={movie.title}
            // onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">Director:</label>
          <input
            type="text"
            name="director"
            value={movie.director}
            // onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-semibold">Release Year:</label>
            <input
              type="number"
              name="releaseYear"
              value={movie.releaseYear}
            //   onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Duration (min):</label>
            <input
              type="number"
              name="duration"
              value={movie.duration}
            //   onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">Box Office:</label>
          <input
            type="text"
            name="boxOffice"
            value={movie.boxOffice}
            // onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">Genres (comma-separated):</label>
          <input
            type="text"
            name="genre"
            value={movie.genre.join(", ")}
            // onChange={handleArrayChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">Cast (comma-separated):</label>
          <input
            type="text"
            name="cast"
            value={movie.cast.join(", ")}
            // onChange={handleArrayChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="flex w-full gap-2">
          <Button onClick={() => window.history.back()} className="w-[20%]" variant="secondary">Cancle</Button>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default MovieDetail;