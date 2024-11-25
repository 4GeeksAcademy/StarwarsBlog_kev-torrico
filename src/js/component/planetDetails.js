import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from "react";

export const PlanetDetails = () => {
    const { id } = useParams(); 
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.loadPlanetsDetails(id);
        console.log(store.planetsDetails);
    }, [id, actions]);

    const planet = store.planetsDetails?.properties || {};

    return (
        <div style={{ marginBottom: "100px" }}>
            <h1 style={{ margin: "75px 0 30px" }}>Planet Details for {planet.name}</h1>
            <div className="character-container d-flex">
                <img
                    src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                    className="img-fluid rounded ms-4 my-auto"
                    alt="Planet"
                    style={{ Width: '500px' }}
                />

                <div className="bg-secondary text-white p-3 rounded mx-auto" style={{ width: "700px" }}>
                    <p><strong>Description: </strong>{store.planetsDetails.description}</p>
                    <p><strong>Height:</strong> {planet.diameter} cm</p>
                    <p><strong>Diameter:</strong> {planet.rotation_period} kg</p>
                    <p><strong>Gravity:</strong> {planet.gravity}</p>
                    <p><strong>Population:</strong> {planet.population}</p>
                    <p><strong>Climate:</strong> {planet.climate}</p>
                    <p><strong>Terrain:</strong> {planet.terrain}</p>
                    <p><strong>Surface water:</strong> {planet.surface_water}</p>
                </div>



            </div>
        </div >
    );
};
