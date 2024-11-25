import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from "react";

export const CharacterDetails = () => {
    const { id } = useParams(); 
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.loadCharactersDetails(id);
    }, [id, actions]);

    const character = store.charactersDetails?.properties || {};

    return (
        <div style={{ marginBottom: "100px" }}>
            <h1 style={{ margin: "75px 0 30px" }}>Character Details for {character.name}</h1>
            <div className="character-container d-flex">
                <img
                    src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                    className="img-fluid rounded ms-4 my-auto"
                    alt="Character"
                    style={{ Width: '500px' }}
                />

                <div className="bg-secondary text-white p-3 rounded mx-auto" style={{ width: "700px" }}>
                    <p><strong>Description: </strong>{store.charactersDetails.description}</p>
                    <p><strong>Height:</strong> {character.height} cm</p>
                    <p><strong>Mass:</strong> {character.mass} kg</p>
                    <p><strong>Gender:</strong> {character.gender}</p>
                    <p><strong>Birth Year:</strong> {character.birth_year}</p>
                    <p><strong>Hair color:</strong> {character.hair_color}</p>
                    <p><strong>Eye color:</strong> {character.eye_color}</p>
                    <p><strong>Skin color:</strong> {character.skin_color}</p>
                </div>



            </div>
        </div >
    );
};
