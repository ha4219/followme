import { getEditorAllBoard } from "api/board";
import { useEffect, useState } from "react";
import { ICourse } from "types/apiType";

interface IProps {
  recommend: ICourse[];
  theme: ICourse[];
}

const AdminEditorChoices = () => {
  const [picks, setPicks] = useState<ICourse[]>([]);

  const getPicks = async () => {
    try {
      const data = await getEditorAllBoard({});
      setPicks([...data.recommend, ...data.theme]);
    } catch (e) {
      console.log("get editors pick", e);
    }
  };

  useEffect(() => {
    getPicks();
  }, []);
  return <div>{picks.length}</div>;
};

export default AdminEditorChoices;
