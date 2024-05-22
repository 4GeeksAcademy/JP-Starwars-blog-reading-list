import React from "react";
import "../../styles/characters.css";

export const Planets = (planetName, population, terrain) => {

    return(
        <>
            <div className="row g-4 d-flex flex-row flex-nowrap overflow-auto">
                <div className="col">
                    <div className="card">
                        <div className="container img-container">
                             <img src="..." className="card-img-top" alt="..."/>
                        </div>    
                        <div className="card-body">
                            <h5 className="card-title">{planetName}</h5>
                            <p className="card-text">Population: {population}</p>
                            <p className="card-text">Terrain: {terrain}</p>
                            <div className="button-container">
                                <button type="button" className="btn details-button btn-outline-info">Learn more!</button>
                                <button type="button" className="btn favorite-button btn-outline-warning">heart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};