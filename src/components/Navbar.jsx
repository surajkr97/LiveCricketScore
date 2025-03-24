import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between px-6 p-4 bg-sky-200 shadow-md">
      <h1 className="text-xl font-bold cursor-pointer">LiveScore</h1>
      <div className="hidden md:flex space-x-10 cursor-pointer">
        <ul>🏏Cricket</ul>
        <ul>🏑Hockey</ul>
        <ul>♟️Chess</ul>
      </div>
      <div className="flex gap-6 cursor-pointer">
        <button className="font-bold cursor-pointer">Login</button>
        <button className="font-bold cursor-pointer">SignUp</button>
      </div>
    </div>
  );
};

export default Navbar;
