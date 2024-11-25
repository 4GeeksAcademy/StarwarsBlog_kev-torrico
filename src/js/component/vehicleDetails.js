import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from "react";

export const VehicleDetails = () => {
    const { id } = useParams(); 
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.loadVehiclesDetails(id);
        console.log(store.vehiclesDetails);
    }, [id, actions]);

    const vehicle = store.vehiclesDetails?.properties || {};



    return (
        <div style={{ marginBottom: "100px" }}>
            <h1 style={{ margin: "75px 0 30px" }}>Vehicle Details for {vehicle.name}</h1>
            <div className="character-container d-flex">
                <img
                    src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`}
                    className="img-fluid rounded ms-4 my-auto"
                    alt="Vehicle"
                    style={{ Width: '500px' }}
                />

                <div className="bg-secondary text-white p-3 rounded mx-auto" style={{ width: "700px" }}>
                    <p><strong>Description: </strong>{store.vehiclesDetails.description}</p>
                    <p><strong>Model:</strong> {vehicle.model} cm</p>
                    <p><strong>Vehicle Class:</strong> {vehicle.vehicle_class} kg</p>
                    <p><strong>Manufacturer:</strong> {vehicle.manufacturer}</p>
                    <p><strong>Cost in credits:</strong> {vehicle.cost_in_credits}</p>
                    <p><strong>Length:</strong> {vehicle.length}</p>
                    <p><strong>Crew:</strong> {vehicle.crew}</p>
                    <p><strong>Passengers:</strong> {vehicle.passengers}</p>
                    <p><strong>Cargo Capacity:</strong> {vehicle.cargo_capacity}</p>
                    <p><strong>Consumables:</strong> {vehicle.consumables}</p>
                </div>



            </div>
        </div >
    );
};
