import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface ColorHistoryItem {
  hex: string;
  timestamp: number;
}

interface ColorState {
  activeColor: string;
  recentColors: string[];
  savedColors: string[];
  savedPalettes: string[][];
  setActiveColor: (color: string) => void;
  addRecentColor: (color: string) => void;
  saveColor: (color: string) => void;
  removeSavedColor: (color: string) => void;
  savePalette: (palette: string[]) => void;
  removeSavedPalette: (paletteId: string) => void;
  clearHistory: () => void;
}

export const useColorStore = create<ColorState>()(
  persist(
    (set, get) => ({
      activeColor: '#3b82f6', // Default blue
      recentColors: [],
      savedColors: [],
      savedPalettes: [],
      
      setActiveColor: (color) => {
        set({ activeColor: color });
        get().addRecentColor(color);
      },
      
      addRecentColor: (color) => set((state) => {
        const currentColors = Array.isArray(state.recentColors) 
          ? state.recentColors.map((c: any) => typeof c === 'string' ? c : (c.hex || '')) 
          : [];
        const filtered = currentColors.filter((c: string) => c !== color && c !== '');
        return {
          recentColors: [color, ...filtered].slice(0, 50)
        };
      }),
      
      saveColor: (color) => set((state) => {
        const currentSaved = Array.isArray(state.savedColors) ? state.savedColors : [];
        if (!currentSaved.includes(color)) {
          return { savedColors: [...currentSaved, color] };
        }
        return state;
      }),
      
      removeSavedColor: (color) => set((state) => ({
        savedColors: (Array.isArray(state.savedColors) ? state.savedColors : []).filter(c => c !== color)
      })),

      savePalette: (palette) => set((state) => {
        try {
          if (!Array.isArray(palette)) return state;
          const currentPalettes = Array.isArray(state.savedPalettes) 
             ? state.savedPalettes.filter(p => Array.isArray(p)) 
             : [];
          const exists = currentPalettes.some(p => p.join(',') === palette.join(','));
          if (!exists && palette.length > 0) {
            return { savedPalettes: [...currentPalettes, palette] };
          }
        } catch (e) {
          console.error("Failed to save palette", e);
        }
        return state;
      }),

      removeSavedPalette: (paletteId) => set((state) => ({
        savedPalettes: (Array.isArray(state.savedPalettes) ? state.savedPalettes : [])
           .filter(p => Array.isArray(p) && p.join(',') !== paletteId)
      })),
      
      clearHistory: () => set({ recentColors: [] }),
    }),
    {
      name: 'colorforge-storage',
    }
  )
);
