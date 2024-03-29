import { atom } from "jotai";

// FUNCTION: Valores por defecto de la pagina
export const defaultOptions = atom({
  theme: "light",
  language: "ES",
});

// FUNCTION: Valores actuales de la URL
export const queryOptions = atom({
  theme: undefined,
  language: undefined,
});

// FUNCTION: Contenido de la pagina
export const languageAtom = atom([]);
