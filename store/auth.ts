import { atom, selector } from "recoil";

export const authState = atom({
  key: "loggedIn",
  default: false,
});
