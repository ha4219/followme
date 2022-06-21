import { atom } from "recoil";

export const editorState = atom({
  key: "editorState",
  default: [], // editor idx
});

export const checkedList = atom<string[]>({
  key: "checkedList",
  default: [],
});
