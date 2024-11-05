import React from 'react';

export default function Navbar({logout, loading}) {
    return (
      <nav className="navbar bg-primary border-bottom shadow sticky-top">
        <div className="container">
          <h1 className="navbar-brand text-white m-0">
            <i className="bi bi-robot"></i> LumoshiveAI
          </h1>
          <button
            onClick={logout}
            className="btn btn-danger"
            disabled={loading}
          >
            <i
              className={`bi me-2 ${
                loading ? "bi-arrow-clockwise" : "bi-box-arrow-right"
              }`}
            ></i>
            Logout
          </button>
        </div>
      </nav>
    );
}