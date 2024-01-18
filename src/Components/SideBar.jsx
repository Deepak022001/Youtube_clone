import React from "react";
import { useSelector } from "react-redux";
// import { Link, Routes, Route } from "react-router-dom";

// const Demo = () => {
//   return <div>Demo Component</div>;
// };

const Sidebar = () => {
    const isMenuOpen=useSelector(store=>store.app.isMenuOpen)
    // early return
    if(!isMenuOpen)return null;
  return (
    <div className="p-5 shadow-lg w-48">
      <ul>
        <li>
          {/* <Link to="/">Home</Link> */}
        </li>
        <li>
          {/* <Link to="/demo">Demo</Link> */}
        </li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>

      {/* Define routes using the Routes component */}
      {/* <Routes> */}
        {/* <Route path="/demo" element={<Demo />} /> */}
      {/* </Routes> */}
    </div>
  );
};

export default Sidebar;
