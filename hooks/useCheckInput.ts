import { Dispatch, SetStateAction, useCallback, useState } from "react";

type ReturnTypes<T = any> = [T, (e: any) => void, Dispatch<SetStateAction<T>>];

const useCheckInput = <T = any>(initialData: T): ReturnTypes => {
  const [value, setValue] = useState(initialData);
  const handler = useCallback(
    (e) => {
      setValue(e.target.checked);
    },
    [value]
  );
  return [value, setValue, handler];
};

export default useCheckInput;
