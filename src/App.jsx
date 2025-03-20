import "./App.css";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Card from "./components/Card";

function App() {

  return (
    <>
      <Navbar/>
      <Searchbar/>
      <h1 className="flex justify-center m-10 text-2xl md:text-3xl">🔴 Live Cricket Score</h1>
      <Card/>
    </>
  );
}

export default App;
