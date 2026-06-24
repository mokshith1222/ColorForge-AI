import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface ColorState {
  currentColor: string;
  savedColors: string[];
  recentColors: string[];
  savedPalettes: string[][];
  recentSearches: string[];
  
  setCurrentColor: (color: string) => void;
  addSavedColor: (color: string) => void;
  removeSavedColor: (color: string) => void;
  addRecentColor: (color: string) => void;
  
  addSavedPalette: (palette: string[]) => void;
  removeSavedPalette: (index: number) => void;
  
  addRecentSearch: (search: string) => void;
  clearRecentSearches: () => void;
}

export const useColorStore = create<ColorState>()(
  persist(
    (set, get) => ({
      currentColor: '#6366F1', // Default to brand primary
      savedColors: [],
      recentColors: [],
      savedPalettes: [],
      recentSearches: [],

      setCurrentColor: (color) => {
        set({ currentColor: color });
        get().addRecentColor(color);
      },
      
      addSavedColor: (color) => set((state) => {
        if (!state.savedColors.includes(color)) {
          return { savedColors: [...state.savedColors, color] };
        }
        return state;
      }),
      
      removeSavedColor: (color) => set((state) => ({
        savedColors: state.savedColors.filter((c) => c !== color)
      })),
      
      addRecentColor: (color) => set((state) => {
        const filtered = state.recentColors.filter((c) => c !== color);
        return { recentColors: [color, ...filtered].slice(0, 20) };
      }),
      
      addSavedPalette: (palette) => set((state) => ({
        savedPalettes: [...state.savedPalettes, palette]
      })),
      
      removeSavedPalette: (index) => set((state) => ({
        savedPalettes: state.savedPalettes.filter((_, i) => i !== index)
      })),
      
      addRecentSearch: (search) => set((state) => {
        const filtered = state.recentSearches.filter((s) => s !== search);
        return { recentSearches: [search, ...filtered].slice(0, 10) };
      }),
      
      clearRecentSearches: () => set({ recentSearches: [] }),
    }),
    {
      name: 'colorforge-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
