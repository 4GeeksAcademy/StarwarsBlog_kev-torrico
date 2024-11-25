import React from "react";
import { Link } from "react-router-dom";

export const Navbar = ({ favorites, setFavorites }) => {
	const handleRemoveFavorite = (index) => {
		const updatedFavorites = favorites.filter((_, i) => i !== index);
		setFavorites(updatedFavorites);
	};

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
							<a className="nav-link" href="#starwarsTitle" style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '1.2rem', color: '#FFD700' }}>Home</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#characters" style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '1.2rem', color: '#FFD700' }}>Characters</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#vehicles" style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '1.2rem', color: '#FFD700' }}>Vehicles</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#planets" style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '1.2rem', color: '#FFD700' }}>Planets</a>
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
										margin: '0 20px 0 20px'
									}}
								>
									Favorites
								</button>
								<ul className="dropdown-menu" aria-labelledby="favoritesDropdown">
									{favorites.length === 0 ? (
										<li>
											<span className="dropdown-item">No favorites added</span>
										</li>
									) : (
										favorites.map((name, index) => (
											<li key={index} className="d-flex justify-content-between align-items-center" style={{ marginLeft: "10px", marginRight: "10px" }}>
												<span>{name}</span>
												<button
													className="btn btn-danger btn-sm"
													onClick={() => handleRemoveFavorite(index)}
													style={{ marginLeft: "10px", marginTop: "5px" }}
												>
													<i className="fas fa-trash"></i>
												</button>
											</li>
										))
									)}
								</ul>
							</div>
						</li>

					</ul>
				</div>
			</div>
		</nav>
	);
};
