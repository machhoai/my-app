import React, { useState } from "react";

const FilterMovie = ({onFilterChange, allGenres}) => {
    const [selectedGenres, setSelectedGenres] = useState([]);

    const handleGenreChange = (genre) => {
        setSelectedGenres((prev) => {
            const updatedGenres = prev.includes(genre)
                ? prev.filter((g) => g !== genre) // Bỏ thể loại nếu đã chọn
                : [...prev, genre]; // Thêm thể loại mới
        
            onFilterChange(updatedGenres); // Gửi danh sách thể loại lên cha
            return updatedGenres;
        });
    };

    return (
      <div className="flex gap-2 justify-center flex-wrap w-[40%] mx-[auto]" >
        {allGenres.map((genre) => (
          <div key={genre}>
            <input
              name={genre}
              type="checkbox"
              className="btn-check"
              id={`btn-check-${genre}`}
              autoComplete="off"
              onChange={() => handleGenreChange(genre)}
            />
            <label className="btn btn-outline-primary rounded-xl" htmlFor={`btn-check-${genre}`}>
              {genre}
            </label>
          </div>
        ))}
      </div>
    );
};

export default FilterMovie;