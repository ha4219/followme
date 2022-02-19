import { atom, selector } from "recoil";

export const tagState = atom({
  key: "tag",
  default: "",
});

export const seasonState = atom<string[]>({
  key: "season",
  default: [],
});

export const domesticState = atom<string[]>({
  key: "domestic",
  default: [],
});

export const overseasState = atom<string[]>({
  key: "overseas",
  default: [],
});

export const courseTagState = atom({
  key: "tag",
  default: "",
});
