import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

export default function MovieDetail(){
  const { id } = useParams();
  
  const [title, setTitle] = useState();
  const [genre, setGenre] = useState([]);
  const [director, setDirector] = useState();
  const [releaseYear, setReleaseYear] = useState();
  const [duration, setDuration] = useState();
  const [cast, setCast] = useState([]);
  const [boxOffice, setBoxOffice] = useState();
  const [image, setImage] = useState();

  useEffect(() => {
    fetch(`http://localhost:8000/movie/${id}`,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.data === null) {
          return <h1 className="text-center text-2xl mt-10">Movie not found</h1>;
        }
        setTitle(data.data.title);
        setGenre(data.data.genre);
        setDirector(data.data.director);
        setReleaseYear(data.data.releaseYear);
        setDuration(data.data.duration);
        setCast(data.data.cast);
        setBoxOffice(data.data.boxOffice);
        setImage(data.data.image);
      })
      .catch((error) => { 
        console.error("Error:", error);
      });
  }, [id]);

  
  const handleSubmit = (e) => {
    const updatedMovie = {
      id: id,
      title: title,
      genre: genre,
      director: director,
      releaseYear: releaseYear,
      duration: duration,
      cast: cast,
      boxOffice: boxOffice,
      image: image,
    }

    fetch("http://localhost:8000/update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({movie: updatedMovie})
    }) // Fetch data from the server
      .then((response) => response.json())  // Parse the JSON data
      .then((data) => {                   
        alert(data.message);
        window.history.back();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700 font-semibold">Title:</label>
          <input
            type="text"
            name="title"
            value={title}
            required
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
            required
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
              required
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
              required
              onChange={(e) => {
                if(e.target.value >= 0){
                  setDuration(e.target.value)
                }
                else{
                  alert("Duration mustn't be smaller than 0")
                }
              }}
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
            required
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
            required
            onChange={(e) => {
              setGenre(e.target.value.split(", "))
            }}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">Cast (comma-separated):</label>
          <input
            type="text"
            name="cast"
            value={cast.join(", ")}
            required
            onChange={(e) => setCast(e.target.value.split(", "))}
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

          <Button onClick={handleSubmit} className="w-full text-white py-2 rounded-lg hover:bg-yellow-500 transition border-none" variant="warning">Save Changes</Button>
        </div>
      </form>
    </div>
  );
};