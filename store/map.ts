import { atom, selector } from "recoil";

export const mapState = atom({
  key: "latlon",
  default: [33.452613, 126.570888],
});

export const mapSelectedState = atom({
  key: "mapSelect",
  default: ["", "", "", 0, [""]],
});
