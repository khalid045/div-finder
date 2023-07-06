import React, { useContext, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { devContent } from "../App";

const SearchBar = () => {
  const [username, setUsername] = useState("");
  const api = useContext(devContent);
  //const { divData, fetchData } = useAPI();
  //const { user, searchUser, error, message } = useContext();
  //const [searchTerm, setSearchTerm] = useState("");
  const { fetchData } = api;
  const handleForm = (e) => {
    setUsername(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username !== "") {
      fetchData(username);
      setUsername("");
    } else {
      alert("Please enter username");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" w-[90%] md:w-[60%] lg:w-[45%] flex justify-between items-center px-2 py-4 rounded-md bg-cWhite "
    >
      <div className=" flex gap-2 justify-center items-center ">
        <span>
          <CiSearch className="text-lg text-Lightblue " />
        </span>
        <input
          type="text"
          placeholder="Search Github userName"
          value={username}
          onChange={handleForm}
          className="borde-0 text-cLightgray focus:outline-none font-spacemono text-sm "
        />
      </div>
      <div>
        <button className="bg-Lightblue px-3 py-1 rounded-md text-cWhite text-[130x] ">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
