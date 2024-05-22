import React, { useContext } from "react";
import "../../styles/home.css";
import { Characters } from "../component/characters";
import { Planets } from "../component/planets";
import { Vehicles } from "../component/vehicles";
import { Context } from "../store/appContext";

export const Home = () => {
	const {store} = useContext(Context);
	return(
	<div>
		{store.characters.map(person => (
			// add props here
			<Characters name={person.name} gender={person.gender} hairColor={person.hair_color} eyeColor={person.eye_color}/>
		))};

		{store.planets.map(planet => (
			// add props here
			<Planets planetName={planet.name} population={planet.population} terrain={planet.terrain}/>
		))};

		{store.vehicles.map(vehicle => (
			// add props here
			<Vehicles vehicleName={vehicle.name} model={vehicle.model} vehicleClass={vehicle.vehicle_class}/>
		))};
	</div>
	);
};
{/* <button onClick={store.actions.getCharacters}>get characters</button> */}