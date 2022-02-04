import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const authState = atom({
  key: "loggedIn",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
