const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characters: [],
			vehicles: [],
			planets: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},

			getCharacters: () => {
				console.log("getting characters");
				fetch("https://www.swapi.tech/api/people/")
				.then(res => res.json())
				.then(data => setStore(data.results))
				.catch(err => console.error(err))
			},

			getPlanets: () => {
				fetch("https://www.swapi.tech/api/planets/")
				.then(res => res.json())
				.then(data => console.log(data.results))
				.catch(err => console.error(err))
			},

			getVehicles: () => {
				fetch("https://www.swapi.tech/api/vehicles/")
				.then(res => res.json())
				.then(data => console.log(data.results))
				.catch(err => console.error(err))
			}
		}
	};
};

export default getState;
