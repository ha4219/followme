import styled from "@emotion/styled";
import { idState } from "@store/auth";
import { useRecoilValue } from "recoil";
import TextField from "@mui/material/TextField";
import useInput from "@hooks/useInput";
import Button from "@mui/material/Button";
import { useState } from "react";
import { DesktopDatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { addNotice } from "api/admin";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const AdminNoticeWriteEditor = () => {
  const id = useRecoilValue(idState);
  const [title, setTitle, onChangeTitle] = useInput("");
  const [content, setContent, onChangeContent] = useInput("");
  const [date, setDate] = useState(new Date().toISOString());
  const router = useRouter();
  const onChangeDate = (newValue) => {
    setDate(newValue);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await addNotice({
        title: title,
        content: content,
        writer: id,
        createdAt: date,
      });
      if (data.data === "success") {
        toast.success("작성완료");
        router.back();
      } else {
        toast.error("작성실패");
      }
    } catch (e) {
      console.log(e);
      toast.error("작성에러");
    }
  };
  return (
    <AdminNoticeWriteEditorContainer>
      <form onSubmit={onSubmit}>
        <div className="adminNoticeWriteEditorContainerMain">
          <TextField value={id} size="small" />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <div className="adminNoticeWriteEditorContainerSubContainer">
              <DesktopDatePicker
                label="공지사항 작성일"
                inputFormat="MM/dd/yyyy"
                value={date}
                onChange={onChangeDate}
                renderInput={(params) => <TextField size="small" {...params} />}
              />
            </div>
          </LocalizationProvider>
        </div>
        <TextField
          label="제목"
          className="adminNoticeWriteEditorContainerField"
          value={title}
          fullWidth
          onChange={onChangeTitle}
        />
        <TextField
          className="adminNoticeWriteEditorContainerField adminNoticeWriteEditorContainerArea"
          label="내용"
          multiline={true}
          value={content}
          fullWidth
          onChange={onChangeContent}
        />
        <div className="adminNoticeWriteEditorContainerBtns">
          <Button type="submit" variant="contained">
            ADD
          </Button>
        </div>
      </form>
    </AdminNoticeWriteEditorContainer>
  );
};

const AdminNoticeWriteEditorContainer = styled.div`
  padding: 1rem;
  & form {
    display: block;
    padding: 1rem;

    & .adminNoticeWriteEditorContainerField {
      margin: 1rem 0;
    }

    & .adminNoticeWriteEditorContainerArea {
      height: 20rem;
    }
    & .adminNoticeWriteEditorContainerBtns {
      display: flex;
      justify-content: flex-end;
    }

    & .adminNoticeWriteEditorContainerMain {
      display: flex;
      justify-content: space-between;
    }
  }
`;

export default AdminNoticeWriteEditor;
