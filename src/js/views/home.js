import React, { useEffect, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { useContext } from "react";
import { getActions } from "../store/flux.js";
import { useNavigate } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();

	//nacimiento del componente
	useEffect(() => {
		actions.loadCharacters();
	}, [])


	return (
		<div className="text-center home">
			<h1>STAR WARS!</h1>
			<div id="starWarsCarousel" className="carousel slide mt-2 mb-2" data-bs-ride="carousel">
				<div className="carousel-inner">
					{/* Slide 1: Personajes */}
					<div className="carousel-item active">
						<img src="https://starwars-visualguide.com/assets/img/characters/4.jpg" className="d-block w-100" alt="Personajes" />
						<div className="carousel-caption d-md-block">
							<h2 className="bg-dark text-light p-2 rounded custom-heading">Explore Iconic Characters!</h2>
							<p className="bg-secondary text-light p-2 rounded custom-paragraph">
								Dive into the universe of Star Wars and uncover the skills, and fascinating details about your favorite characters.
							</p>
						</div>
					</div>

					{/* Slide 2: Planetas */}
					<div className="carousel-item">
						<img src="https://starwars-visualguide.com/assets/img/planets/10.jpg" className="d-block w-100" alt="Planetas" />
						<div className="carousel-caption d-md-block">
							<h2 className="bg-dark text-light p-2 rounded custom-heading">Discover Unique Planets!</h2>
							<p className="bg-secondary text-light p-2 rounded custom-paragraph">
								Travel across the galaxy to explore the most iconic Star Wars worlds, their geography, cultures, and inhabitants.
							</p>
						</div>
					</div>

					{/* Slide 3: Vehículos */}
					<div className="carousel-item">
						<img src="https://starwars-visualguide.com/assets/img/vehicles/26.jpg" className="d-block w-100" alt="Vehículos" />
						<div className="carousel-caption d-md-block">
							<h2 className="bg-dark text-light p-2 rounded custom-heading">Pilot Legendary Vehicles!</h2>
							<p className="bg-secondary text-light p-2 rounded custom-paragraph">
								From the Millennium Falcon to TIE Fighters, discover the legendary ships and vehicles that shaped the Star Wars saga.
							</p>
						</div>
					</div>
					<button className="carousel-control-prev" type="button" data-bs-target="#starWarsCarousel" data-bs-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Anterior</span>
					</button>
					<button className="carousel-control-next" type="button" data-bs-target="#starWarsCarousel" data-bs-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Siguiente</span>
					</button>
				</div>
			</div>

			{
				store.isLoading &&
				(
					<div class="spinner-border m-5" role="status">
						<span class="visually-hidden">Loading...</span>
					</div>
				)
			}
			<div className="container mt-5">
				<div className="d-flex overflow-auto" style={{ gap: '1rem', padding: '10px 0' }}>
					{
						store.characters.map(people => (
							<div className="card" style={{ width: "18rem", flexShrink: 0 }}>
								<img
									src={`https://starwars-visualguide.com/assets/img/characters/${people.uid}.jpg`}
									className="card-img-top"
									alt="Character"
								/>
								<div className="card-body">
									<h5 className="card-title">{people.name}</h5>
									<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
									<a href="#" className="btn btn-primary">Go somewhere</a>
								</div>
							</div>
						))
					}
				</div>
			</div>

		</div>
	)
};
