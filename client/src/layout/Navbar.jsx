import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand me-2" href="https://mdbgo.com/">
          <img
            src="https://cdn.pixabay.com/photo/2023/01/07/09/20/ai-generated-7702855_1280.jpg"
            height="40"
            alt="MDB Logo"
            loading="lazy"
            style={{ marginTop: '-1px', borderRadius: '30px' }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarButtonsExample"
          aria-controls="navbarButtonsExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarButtonsExample">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Dashboard
              </a>
            </li>
          </ul>

          <div className="d-flex flex-wrap align-items-center">
            <Dropdown className="me-3">
              <Dropdown.Toggle
                variant="link"
                id="dropdownMenuButton"
                className="nav-link p-0"
              >
                Summarize
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#option1">Option 1</Dropdown.Item>
                <Dropdown.Item href="#option2">Option 2</Dropdown.Item>
                <Dropdown.Item href="#option3">Option 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div className="d-flex align-items-center">
            <button type="button" className="btn btn-link px-3 me-2">
              Login
            </button>
            </div>
            <div>
            <button type="button" className="btn btn-primary">
              Sign up for free
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
