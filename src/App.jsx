import React from "react";
import "./App.css";

import CardDetails from "./components/CardDetails";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import useAPI from "./components/useAPI";

export let devContent = React.createContext();

function App() {
  const api = useAPI();
  return (
    <devContent.Provider value={api}>
      <div className="w-full h-screen bg-[#F6F8FF] flex flex-col gap-5 items-center ">
        <Header />
        <SearchBar />
        <CardDetails cardDetails={api} />
      </div>
    </devContent.Provider>
  );
}

export default App;
