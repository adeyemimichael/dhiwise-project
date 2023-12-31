import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/frametwentyfive">FrameTwentyFive</Link>
        </li>
        <li>
          <Link to="/macbookpro16twelve">MacBookPro16Twelve</Link>
        </li>
        <li>
          <Link to="/frametwentysix">FrameTwentySix</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
