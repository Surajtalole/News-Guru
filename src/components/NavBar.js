import React, { Component } from "react";
import { Link } from "react-router-dom";
export class NavBar extends Component {
  render() {
    return (
      <div className="wrapper">
        <nav>
          <input type="checkbox" id="show-search" />
          <input type="checkbox" id="show-menu" />
          <label htmlFor="show-menu" className="menu-icon">
            <i className="fas fa-bars"></i>
          </label>
          <div className="content">
            <div className="logo">
              <a href="#">NEWS GURU</a>
            </div>
            <ul className="links">
              <li>
                <Link to="/general">Home</Link>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#" className="desktop-link">
                  Features
                </a>
                <input type="checkbox" id="show-features" />
                <label htmlFor="show-features">Features</label>
                <ul>
                  <li>
                    <a href="#">Drop Menu 1</a>
                  </li>
                  <li>
                    <a href="#">Drop Menu 2</a>
                  </li>
                  <li>
                    <a href="#">Drop Menu 3</a>
                  </li>
                  <li>
                    <a href="#">Drop Menu 4</a>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/category" className="desktop-link">
                  Categories
                </Link>
                <input type="checkbox" id="show-services" />

                <label htmlFor="show-services">Categories</label>

                <ul>
                  <li>
                    <Link to="/business">Business</Link>
                  </li>
                  <li>
                    <Link to="/entertainment">Entertainment</Link>
                  </li>
                  <li>
                    <Link to="/general">General</Link>
                  </li>
                  <li>
                    <Link to="/More Items" className="desktop-link">
                      More Items
                    </Link>
                    <input type="checkbox" id="show-items" />
                    <label htmlFor="show-items">More Items</label>
                    <ul>
                      <li>
                        <Link to="/health">Health</Link>
                      </li>
                      <li>
                        <Link to="/science">Science</Link>
                      </li>
                      <li>
                        <Link to="/sports">Sports</Link>
                      </li>
                      <li>
                        <Link to="/technology">Technology</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Feedback</a>
              </li>
            </ul>
          </div>
          <label htmlFor="show-search" className="search-icon">
            <i className="fas fa-search"></i>
          </label>
          <form action="#" className="search-box">
            <input
              type="text"
              placeholder="Type Something to Search..."
              required
            />
            <button type="submit" className="go-icon">
              <i className="fas fa-long-arrow-alt-right"></i>
            </button>
          </form>
        </nav>
      </div>
    );
  }
}

export default NavBar;
