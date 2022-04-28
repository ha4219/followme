import styled from "@emotion/styled";
import { toBase64 } from "@helpers/programHelper";
import { Button } from "@mui/material";
import { useState } from "react";
import { IEnterpriseMenuType } from "types/apiType";

const MapDialogMenuItem = ({
  menuImg,
  name,
  explanation,
  idx,
  fk_user_enterMenus_id,
}: IEnterpriseMenuType) => {
  return (
    <MapDialogMenuItemContainer>
      <img
        className="mapDialogMenuItemImg"
        src={`${toBase64(menuImg)}`}
        alt={name}
      />
      <div className="mapDialogMenuItemBody">
        <div className="mapDialogMenuItemBodyName">{name}</div>
        <div className="mapDialogMenuItemBodyExp">{explanation}</div>
      </div>
    </MapDialogMenuItemContainer>
  );
};

const DATA: IEnterpriseMenuType[] = [
  {
    idx: 0,
    fk_user_enterMenus_id: "dongha",
    name: "test",
    explanation: "testtest",
    menuImg: "/noimage.jpeg",
  },
  {
    idx: 1,
    fk_user_enterMenus_id: "dongha",
    name: "test1",
    explanation: "testtest1111111",
    menuImg:
      "https://bisfollowme.s3.ap-northeast-2.amazonaws.com/5bddb000-aa55-11ec-8d50-c784b24fbfbe.59",
  },
];

const MapDialogMenus = ({ menus }: { menus: IEnterpriseMenuType[] }) => {
  const [show, setShow] = useState(false);
  return (
    <MapDialogMenusContainer>
      {show && (
        <div className="mapDialogMenuItems">
          {menus.map((item, idx) => {
            return <MapDialogMenuItem key={item.idx} {...item} />;
          })}
        </div>
      )}
      <Button onClick={() => setShow(!show)} fullWidth variant="contained">
        {show ? "메뉴 접기" : "메뉴 열기"}
      </Button>
    </MapDialogMenusContainer>
  );
};

const MapDialogMenusContainer = styled.div`
  padding: 1rem;
`;

const MapDialogMenuItemContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #818181;
  margin-bottom: 1rem;
  padding: 0.5rem 0;

  & .mapDialogMenuItemImg {
    width: 200px;
    height: 200px;
    border-radius: 200px;
    margin-right: 1rem;
  }

  & .mapDialogMenuItemBody {
    width: 100%;
    & .mapDialogMenuItemBodyName {
      font-family: paybooc-Bold;
      height: 2rem;
      font-size: 1.2rem;
    }

    & .mapDialogMenuItemBodyExp {
      height: 10rem;
    }
  }
`;

export default MapDialogMenus;
