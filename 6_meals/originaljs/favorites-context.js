import { createContext, useState } from "react";

//Make sure to export this
export const FavoritesContext = createContext({
	ids: [],
	addFavorite: (id) => {},
	removeFavorite: (id) => {}
});

function FavoritesContextProvider({children}) {
	const [favoriteMealIds, setFavoriteMealIds] = useState([]);

	function addFavorite(id) {
		setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]
		//current array -> make new array (BE CAREFUL TO USE THE RIGHT BRACKETS) [...destructured orig array, new entry]
		)
	}

	function removeFavorite(id) {
		setFavoriteMealIds((currentFavIds) => currentFavIds.filter(mealId => mealId !== id));
		//Filter meal id -> if mealId doesn't equal id, keep it.
	}

	const value = {
		//values are given to the context created above (array, 2 functions)
		ids: favoriteMealIds,
		addFavorite: addFavorite,
		removeFavorite: removeFavorite,
	}

	return <FavoritesContext.Provider value={value}>
		{/* value is assigned to the provider, any children 
		wrapped in it have access */}
		{children}
	</FavoritesContext.Provider>
}

export default FavoritesContextProvider;

