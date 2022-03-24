import styled from "@emotion/styled";
import { toBase64 } from "@helpers/programHelper";
import { Avatar } from "@mui/material";
import { idState } from "@store/auth";
import { getUserProfileById } from "api/auth";
import {
  getEnterpriseDetail,
  getEnterpriseMenu,
  getEnterpriseReview,
  getEnterprises,
} from "api/enterprise";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import EnterpriseMenus from "../EnterpriseMenus";
import EnterpriseReviews from "../EnterpriseReviews";

const ProfileEnterpriseDetail = () => {
  const id = useRecoilValue(idState);
  const [user, setUser] = useState();
  const [enterprise, setEnterprise] = useState();
  const [menus, setMenus] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [score, setScore] = useState(0);
  const [enterId, setEnterId] = useState("");
  const [tags, setTags] = useState([]);
  const [profileImage, setProfileImage] = useState("");

  const getEnterDetail = async (idx) => {
    try {
      const data = await getEnterpriseDetail({ idx: idx });

      setEnterprise(data[0]);
      setName(data[0].name);
      setContent(data[0].content);
      setCategory(data[0].category);
      setScore(data[0].score);
      setEnterId(data[0].id);
      setTags(data[0].tags);
      setProfileImage(`${toBase64(data[0].profileImage)}`);
    } catch (e) {
      console.log("enter detail error ", e);
    }
  };

  const getEnterMenu = async (idx) => {
    try {
      const data = await getEnterpriseMenu({ idx: idx });
      setMenus(data);
    } catch (e) {
      console.log("enter detail error ", e);
    }
  };

  const getEnterReview = async (idx) => {
    try {
      const data = await getEnterpriseReview({ idx: idx });
      setReviews(data);
    } catch (e) {
      console.log("enter detail error ", e);
    }
  };

  const getUser = async () => {
    // const data = await getUserProfileById({ id });

    // setUser(data.userData[0]);
    // getEnterDetail(data.userData[0].idx);
    // getEnterReview(data.userData[0].idx);
    // getEnterMenu(data.userData[0].idx);
    try {
      const data = await getEnterprises();
      const target = data.find((item) => item.id === id);
      getEnterDetail(target.idx);
      getEnterReview(id);
      getEnterMenu(id);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <ProfileEnterpriseDetailContainer>
      <div className="profileEnterpriseDetailContainerProfile">
        <Avatar
          alt={name}
          src={profileImage}
          className="profileEnterpriseDetailContainerProfileAvatar"
        />
        <div className="profileEnterpriseDetailContainerProfileTitle">
          {name}
        </div>
      </div>
      <EnterpriseReviews reviews={reviews} />
      <EnterpriseMenus menus={menus} />
    </ProfileEnterpriseDetailContainer>
  );
};

const ProfileEnterpriseDetailContainer = styled.div`
  & .profileEnterpriseDetailContainerProfile {
    border-bottom: 1px solid #3e3e3e;
    display: flex;

    & .profileEnterpriseDetailContainerProfileAvatar {
      width: 5rem;
      height: 5rem;
      margin-right: 1rem;
    }

    & .profileEnterpriseDetailContainerProfileTitle {
      font-family: paybooc-Bold;
    }
  }
`;

export default ProfileEnterpriseDetail;
