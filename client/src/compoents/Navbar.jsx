import React, { useState } from "react";
import { Menu, Search, Heart, User, ShoppingCart, X } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="position-relative">
      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
        <div className="container">
          {/* Left Section - Menu Button */}
          <button
            className="btn btn-light me-3"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Center - Logo */}
          <a className="navbar-brand fw-bold" href="#">
            KAYTA
          </a>

          {/* Right Section */}
          <div className="d-flex align-items-center ms-auto">
            {/* Search Input */}
            <div
              className={`input-group me-3 transition-all ${
                isSearchFocused ? "w-75" : "w-50"
              }`}
            >
              <span className="input-group-text bg-transparent border-0">
                <Search className="h-5 w-5 text-secondary" />
              </span>
              <input
                type="text"
                className="form-control border-0 border-bottom"
                placeholder="Rechercher..."
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
            </div>

            {/* Icons */}
            <button className="btn btn-light me-2">
              <Heart className="h-6 w-6" />
            </button>
            <button className="btn btn-light me-2">
              <User className="h-6 w-6" />
            </button>
            <button className="btn btn-light position-relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                0
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`offcanvas offcanvas-start ${isSidebarOpen ? "show" : ""}`}
        tabIndex="-1"
        style={{ visibility: isSidebarOpen ? "visible" : "hidden" }}
        onClick={() => setSidebarOpen(false)}
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Menu</h5>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => setSidebarOpen(false)}
          />
        </div>
        <div className="offcanvas-body">
          <ul className="list-unstyled">
            <li className="mb-2">
              <a href="#" className="text-decoration-none text-dark">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-decoration-none text-dark">
                Collection
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-decoration-none text-dark">
                New Arrivals
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-decoration-none text-dark">
                Sale
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-decoration-none text-dark">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-dark">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
