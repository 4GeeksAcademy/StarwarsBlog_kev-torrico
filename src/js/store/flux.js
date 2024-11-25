const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [

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
			loadCharacters: async()=>{
				try{
					setStore({isLoading: true})
					const response = await fetch(`https://www.swapi.tech/api/people/`, {
						method: "GET"
					});
					const data = await response.json()
					console.log("Api datos:", data);
					setStore({characters: data.results, isLoading: false})
				}catch(error){
					alert(error);
				}
			},
		}
	};
};

export default getState;
