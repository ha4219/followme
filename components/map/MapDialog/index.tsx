import styled from "@emotion/styled";
import { toBase64 } from "@helpers/programHelper";
import { Dialog } from "@mui/material";
import { enterPickState } from "@store/map";
import {
  getEnterpriseDetail,
  getEnterpriseMenu,
  getEnterpriseReview,
} from "api/enterprise";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import MapDialogStars from "../MapDialogStars";
import MapDialogTags from "../MapDialogTags";

interface IProps {
  onClose: any;
  show: boolean;
}

const MapDialog = ({ onClose, show }: IProps) => {
  const enterPick = useRecoilValue(enterPickState);
  const [enterprise, setEnterPrise] = useState();
  const [menus, setMenu] = useState([]);
  const [reviews, setReview] = useState([]);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [score, setScore] = useState(0);
  const [tags, setTags] = useState([]);
  const [profileImage, setProfileImage] = useState("");

  const getEnterDetail = async () => {
    try {
      const data = await getEnterpriseDetail({ idx: enterPick });

      setEnterPrise(data[0]);
      setName(data[0].name);
      setContent(data[0].content);
      setCategory(data[0].category);
      setScore(data[0].score);
      setTags(data[0].tags);
      setProfileImage(`${toBase64(data[0].profileImage)}`);
    } catch (e) {
      console.log("enter detail error ", e);
    }
  };

  const getEnterMenu = async () => {
    try {
      const data = await getEnterpriseMenu({ idx: enterPick });
      setMenu(data);
    } catch (e) {
      console.log("enter detail error ", e);
    }
  };

  const getEnterReview = async () => {
    try {
      const data = await getEnterpriseReview({ idx: enterPick });
      setReview(data);
    } catch (e) {
      console.log("enter detail error ", e);
    }
  };

  useEffect(() => {
    if (enterPick !== -1) {
      getEnterDetail();
      getEnterMenu();
      getEnterReview();
    }
  }, [enterPick]);

  return (
    <Dialog open={show} onClose={onClose}>
      <MapDialogContainer>
        <img className="mapDialogContainerImg" src={profileImage} alt={name} />
        <div className="mapDialogContainerBody">
          <div className="mapDialogContainerBodyTitle">{name}</div>
          <div className="mapDialogContainerBodyContent">{content}</div>
          <div className="mapDialogContainerBodyStars">
            <MapDialogStars score={score} />
          </div>
          <div className="mapDialogContainerBodyTags">
            <MapDialogTags tags={tags} />
          </div>
        </div>
      </MapDialogContainer>
    </Dialog>
  );
};

const MapDialogContainer = styled.div`
  font-family: paybooc-Light;
  display: flex;
  padding: 1rem;

  & .mapDialogContainerImg {
    width: 200px;
    height: 200px;
    margin-right: 1rem;
    border-radius: 200px;
  }

  & .mapDialogContainerBody {
    & .mapDialogContainerBodyTitle {
      font-family: paybooc-Bold;
      height: 2rem;
      font-size: 1.2rem;
    }

    & .mapDialogContainerBodyContent {
      height: 4rem;
    }

    & .mapDialogContainerBodyStars {
      height: 2rem;
    }

    & .mapDialogContainerBodyTags {
      height: 2rem;
    }
  }
`;

export default MapDialog;
