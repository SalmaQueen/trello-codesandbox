// linear-gradient(rgb(234, 230, 255), rgb(255, 255, 255)) no-repeat;
import React from "react";
import "./banner.css";
const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="left">
          <h1>Trello brings all your tasks, teammates, and tools together</h1>
          <p className="p">
            Keep everything in the same place—even if your team isn’t.
          </p>
          <div className="cta">
            <input type="email" placeholder="Email" />
            {/* <input type="email" placeholder="Email" /> */}
            <button type="submit" className="btn btn-primary">
              Sign up - it’s free
            </button>
          </div>
        </div>
        <div className="right">
          <img
            src="https://images.ctfassets.net/rz1oowkt5gyp/5QIzYxue6b7raOnVFtMyQs/113acb8633ee8f0c9cb305d3a228823c/hero.png?w=931&fm=webp"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
