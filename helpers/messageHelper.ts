import { deleteDes } from "@data/Description";

export const showConfirm = async (onClickDel) => {
  const check = await confirm(deleteDes);
  if (check) {
    onClickDel();
  }
};
