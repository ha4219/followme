import DragDrop from "@components/DragDrop";
import styled from "@emotion/styled";
import useInput from "@hooks/useInput";
import { Button, TextField } from "@mui/material";
import { idState } from "@store/auth";
import { insertEnterpriseMenu } from "api/enterprise";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { useRecoilValue } from "recoil";

const ProfileEnterpriseMenuInsert = () => {
  const [name, setName, onChangeName] = useInput("");
  const [explanation, setExplanation, onChangeExplanation] = useInput("");
  const [menuImg, setMenuImg] = useState("");
  const id = useRecoilValue(idState);
  const router = useRouter();

  const onSubmit = useCallback(async () => {
    try {
      if (id) {
        const data = await insertEnterpriseMenu({
          enterId: id,
          name: name,
          explanation: explanation,
          menuImg: menuImg,
        });
        if (data.data === "success") {
          toast.success("성공");
          router.reload();
        }
      }
    } catch (e) {
      console.log("menu insert", e);
    }
  }, [menuImg, name, explanation]);

  return (
    <ProfileEnterpriseMenuInsertContainer>
      <div className="profileEnterpriseMenuInsertContainerLabel">메뉴 추가</div>
      <div className="profileEnterpriseMenuInsertContainerFlex">
        <div>
          <DragDrop url={menuImg} setUrl={setMenuImg} />
        </div>
        <div>
          <div>
            <TextField
              fullWidth
              label="name"
              value={name}
              onChange={onChangeName}
            />
          </div>
          <div>
            <TextField
              fullWidth
              className="profileEnterpriseMenuInsertContainerExplanation"
              multiline={true}
              label="explanation"
              value={explanation}
              onChange={onChangeExplanation}
            />
          </div>
        </div>
      </div>
      <div className="profileEnterpriseMenuInsertContainerBtn">
        <Button
          onClick={onSubmit}
          variant="contained"
          disabled={!name || !explanation}
        >
          추가
        </Button>
      </div>
    </ProfileEnterpriseMenuInsertContainer>
  );
};

const ProfileEnterpriseMenuInsertContainer = styled.div`
  & .profileEnterpriseMenuInsertContainerLabel {
    font-family: paybooc-Bold;
  }
  & .profileEnterpriseMenuInsertContainerFlex {
    display: flex;
    width: 100%;
    padding: 1rem 0;

    & div {
      width: 100%;
    }

    & .profileEnterpriseMenuInsertContainerExplanation {
    }
  }

  & .profileEnterpriseMenuInsertContainerBtn {
    display: flex;
    justify-content: center;
  }
`;

export default ProfileEnterpriseMenuInsert;
