import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light mb-3">
			<Link to="/">
				<img className="navbar-brand mb-0 logo" src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" alt="Star Wars" />
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-warning navbtn">Favorites</button>
				</Link>
			</div>
		</nav>
	);
};
