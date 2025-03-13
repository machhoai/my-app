import { useParams } from "react-router-dom";
import React, { useState } from 'react';
import movies from "../movies";
import Button from 'react-bootstrap/Button';

export default function MovieDetail(){
  const { id } = useParams();
  const movie = movies.find((m) => m.id === id);
  
  const [title, setTitle] = useState(movie.title);
  const [genre, setGenre] = useState(movie.genre);
  const [director, setDirector] = useState(movie.director);
  const [releaseYear, setReleaseYear] = useState(movie.releaseYear);
  const [duration, setDuration] = useState(movie.duration);
  const [cast, setCast] = useState(movie.cast);
  const [boxOffice, setBoxOffice] = useState(movie.boxOffice);
  const [image, setImage] = useState(movie.image);

    
  if (!movie) {
    return <h1 className="text-center text-2xl mt-10">Movie not found</h1>;
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    return (
      alert("Success! Movie is updated.")
    )
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file.name);
    }
  };
  
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl font-bold mb-6 w-full text-center">Edit Movie</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-semibold">Title:</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">Director:</label>
          <input
            type="text"
            name="director"
            value={director}
            onChange={(e) => setDirector(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-semibold">Release Year:</label>
            <input
              type="number"
              name="releaseYear"
              value={releaseYear}
              onChange={(e) => setReleaseYear(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Duration (min):</label>
            <input
              type="number"
              name="duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">Box Office:</label>
          <input
            type="text"
            name="boxOffice"
            value={boxOffice}
            onChange={(e) => setBoxOffice(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">Genres (comma-separated):</label>
          <input
            type="text"
            name="genre"
            value={genre.join(", ")}
            onChange={(e) => setGenre(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">Cast (comma-separated):</label>
          <input
            type="text"
            name="cast"
            value={cast.join(", ")}
            onChange={(e) => setCast(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">Cast (comma-separated):</label>
          <input
            type="file"
            name="Image"
            onChange={handleImageUpload}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        {image && (
          <div className="image-preview">
            <img src={image} alt="Preview" />
          </div>
        )}
        <div className="flex w-full gap-2">
          <Button onClick={() => window.history.back()} className="border-none w-[20%]" variant="secondary">Cancel</Button>

          <Button type="submit" className="w-full text-white py-2 rounded-lg hover:bg-yellow-500 transition border-none" variant="warning">Save Changes</Button>
        </div>
      </form>
    </div>
  );
};