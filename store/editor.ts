import { atom, selector } from "recoil";

export const editorState = atom({
  key: "mapSelect",
  default: ["", "", "", 0, []], // url, title, content, score tags
});
