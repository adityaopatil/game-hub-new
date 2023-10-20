import { create } from "zustand";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

// Here we define the shape of our store
interface GameQueryStore {
  gameQuery: GameQuery;
  // Now we need function to update our gameQuery properties
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  // When the user searches for a text we should clear other filters
  //becoz otherwise user might have selected a wrong Genre or wrong platform and
  //with that we wont be able to find the game we are looking for.
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
  // here we first store or copy all the other properties.
  setGenreId: (genreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  setPlatformId: (platformId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
  setSortOrder: (sortOrder) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
}));

export default useGameQueryStore;
