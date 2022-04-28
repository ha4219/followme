import { atom } from "recoil";

export const mapState = atom({
  key: "latlon",
  default: [33.452613, 126.570888],
});

export const mapSelectedState = atom({
  key: "mapSelect",
  default: ["", "", "", 0, [""]],
});

export const curMapState = atom({
  key: "curLatlon",
  default: [33.452613, 126.570888],
});

export const curLimitDis = atom({
  key: "limitDis",
  default: 5000,
});

export const enterSignupState = atom({
  key: "enterSignup",
  default: [33.452613, 126.570888],
});

export const enterPickState = atom({
  key: "enterkey",
  default: [-1, ""],
});
