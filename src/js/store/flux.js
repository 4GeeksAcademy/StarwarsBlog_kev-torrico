const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [

			],
			planets: [

			],
			vehicles: [

			],
			charactersDetails: [

			],
			planetsDetails: [

			],
			vehiclesDetails: [

			],
			isLoading: false,
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
			]
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
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			loadCharacters: async () => {
				try {
					setStore({ isLoading: true })
					const response = await fetch(`https://www.swapi.tech/api/people/`, {
						method: "GET"
					});
					const data = await response.json()
					console.log("Api datos:", data);
					setStore({ characters: data.results, isLoading: false })
				} catch (error) {
					console.log(error);
				}
			},
			loadVehicles: async () => {
				try {
					setStore({ isLoading: true })
					const response = await fetch(`https://www.swapi.tech/api/vehicles/`, {
						method: "GET"
					});
					const data = await response.json()
					console.log("Api vehicles:", data);
					setStore({ vehicles: data.results, isLoading: false })
				} catch (error) {
					alert(error);
				}
			},
			loadPlanets: async () => {
				try {
					setStore({ isLoading: true })
					const response = await fetch(`https://www.swapi.tech/api/planets/`, {
						method: "GET"
					});
					const data = await response.json()
					console.log("Api planets:", data);
					setStore({ planets: data.results, isLoading: false })
				} catch (error) {
					console.log(error);
				}
			},
			loadCharactersDetails: async (id) => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
					const data = await response.json();
					console.log("Character Details:", data);
					setStore({ charactersDetails: data.result });
				} catch (error) {
					console.error('Error loading character details:', error);
				}
			},
			loadPlanetsDetails: async (id) => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/planets/${id}`);
					const data = await response.json();
					console.log("Planet Details:", data);
					setStore({ planetsDetails: data.result });
				} catch (error) {
					console.error('Error loading planet details:', error);
				}
			},
			loadVehiclesDetails: async (id) => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/vehicles/${id}`);
					const data = await response.json();
					console.log("Planet Details:", data);
					setStore({ vehiclesDetails: data.result });
				} catch (error) {
					console.error('Error loading planet details:', error);
				}
			},
		}
	};
};

export default getState;
