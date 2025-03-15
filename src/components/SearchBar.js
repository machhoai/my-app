import React, { useState } from "react";

const Search = ({ onSearchChange }) => {
    const [searchText, setSearchText] = useState("");
  
    const handleChange = (e) => {
      const text = e.target.value;
      setSearchText(text);
      onSearchChange(text); // Gửi text lên cha
    };
  
    return (
        <div className="my-4 flex justify-center w-[40%] mx-[auto]">
            <div class="input-group mb-3">
            <input type="text" class="form-control rounded-xl p-2 px-4" placeholder="Type to search" aria-label="Type to search" aria-describedby="button-addon2"
            value={searchText}
            onChange={(e)=>{handleChange(e)}}
            />
            {/* <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button> */}
            </div>
        </div>
    //   <div>
    //     <h3>Search by Title</h3>
    //     <input type="text" value={searchText} onChange={handleChange} placeholder="Enter movie title..." />
    //   </div>
    );
  };
  
  export default Search;