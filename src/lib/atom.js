import { atom } from "jotai";

export const defaultOptions = atom({
  theme: "light",
  language: "ES",
});

export const queryOptions = atom({
  theme: undefined,
  language: undefined,
});
