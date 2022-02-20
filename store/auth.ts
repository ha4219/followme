import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const authState = atom({
  key: "loggedIn",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const idState = atom({
  key: "id",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const tokenState = atom({
  key: "token",
  default: false,
});
