import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Card from "./components/Card";

function App() {

  const [userSearch,setUserSearch] = useState("");

  return (
    <>
      <Navbar/>
      <Searchbar setUserSearch={setUserSearch} />
      <h1 className="flex justify-center m-10 text-2xl md:text-3xl text-white">🔴 Live Cricket Score</h1>
      <Card userSearch={userSearch}/>
    </>
  );
}

export default App;
