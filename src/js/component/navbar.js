import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
			<div className="container-fluid">
				{/* Logo */}
				<Link className="navbar-brand" to="/" style={{ fontFamily: 'Star Jedi, sans-serif', fontSize: '2rem', color: '#FFD700' }}>
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Star_Wars_Logo..png"
						alt="Star Wars Logo"
						style={{ width: '80px', height: '50px', marginRight: '10px' }}
					/>
				</Link>
				{/* Botones de navegación */}
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item">
							<a className="nav-link" href="#starWarsCarousel" style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '1.2rem', color: '#FFD700' }}>Home</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#starWarsCarousel" style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '1.2rem', color: '#FFD700' }}>Characters</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#starWarsCarousel" style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '1.2rem', color: '#FFD700' }}>Planets</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#starWarsCarousel" style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '1.2rem', color: '#FFD700' }}>Vehicles</a>
						</li>
						<li>
							<div className="btn-group">
								<button
									className="btn btn-secondary btn-lg dropdown-toggle"
									type="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
									style={{
										fontFamily: 'Orbitron, sans-serif',
										fontSize: '1.2rem',
										color: '#FFD700',
										border: '1px solid #FFD700',
										backgroundColor: '#212529',
										margin: '0 0 0 10px'
									}}
								>
									Favorites
								</button>
								<ul className="dropdown-menu bg-secondary">
									<li className="text-warning">
										<a className="dropdown-item" href="#">Hola</a>
									</li>
								</ul>
							</div>
						</li>

					</ul>
				</div>
			</div>
		</nav>
	);
};
