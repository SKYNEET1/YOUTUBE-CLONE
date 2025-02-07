import React from "react";
import Navbar from "./components/Navbar";
import {Route,Routes} from "react-router-dom";
import Search from "./components/Search";
import Playingvideo from "./components/Playingvideo";
import Home from "./components/Home";
import { useprovider } from "./Contextapi/Provider";
import Loader from "./Loader/Loader";

// import { useprovider } from "./Contextapi/Provider";


function App() {
  // const {loading,data} = useprovider();
  // console.log(loading);
  // console.log(data);
  // for testing purpose and its working this is how you can access the contextapi
  const {loading} = useprovider()
  return (
    <div className="">
      {loading && <Loader/>}
      <Navbar />
      {/* defening routes */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:searchQuery" element={<Search />} />
        <Route path="/video/:id" element={<Playingvideo />} />
      </Routes>
    </div>
  );
}

export default App;
