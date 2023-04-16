import { create } from "zustand"

//Set the types for the state that the zustand store uses (including functions)
interface FavoritesState {
	ids: string[],
	//function name: (params : params type) => output type
	logIds: (ids : string[]) => void,
	// addFavorite: (id : string) => void,
	// removeFavorite: (id : string) => void,
}

// const storeName = create<State type>()(set ??) => ({all fields in state})
const useStore = create<FavoritesState>()((set) => ({
	ids: [],
	logIds: (ids) => {console.log(ids)},
	// addFavorite: (newId) => set((state) => ({ ids: [...state.ids, newId]})),
	// removeFavorite: (targetId) => set((state)=> state.ids.filter((currentId : string) => targetId !== currentId))
}))

export default useStore