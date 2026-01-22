import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/Home">
          {props.title}
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/Home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.AboutTextutils}
              </Link>
            </li>
          </ul>
        </div>

        <div className={`form-check form-switch ${props.textcolor}`}>
          <input
            className="form-check-input"
            onClick={props.toggle}
            type="checkbox"
            role="switch"
            id="switchCheckDefault"
          />

          <button
            className="btn btn-secondary bg-white text-dark btn-sm p-0 mx-1"
            style={{ width: "32px", height: "32px" }}
            onClick={() => props.togglecolor("white")}
          ></button>
          <button
            className="btn btn-primary btn-sm p-0 mx-1"
            style={{ width: "32px", height: "32px" }}
            onClick={() => props.togglecolor("blue")}
          ></button>
          <button
            className="btn btn-info btn-sm p-0 mx-1"
            style={{ width: "32px", height: "32px" }}
            onClick={() => props.togglecolor("cyan")}
          ></button>
          <button
            className="btn btn-warning btn-sm p-0 mx-1"
            style={{ width: "32px", height: "32px" }}
            onClick={() => props.togglecolor("yellow")}
          ></button>
          <button
            className="btn btn-danger btn-sm p-0 mx-1"
            style={{ width: "32px", height: "32px" }}
            onClick={() => props.togglecolor("red")}
          ></button>

          <label className="form-check-label" htmlFor="switchCheckDefault my-2">
            {props.switchlabel}
          </label>
        </div>
      </div>
    </nav>
  );
}
