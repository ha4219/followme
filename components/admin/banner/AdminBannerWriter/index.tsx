import DragDrop from "@components/DragDrop";
import styled from "@emotion/styled";
import { DesktopDatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { Button, TextField } from "@mui/material";
import { addBanner } from "api/admin";
import { useRouter } from "next/router";
import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

const AdminBannerWriter = () => {
  const router = useRouter();
  const [url, setUrl] = useState("");
  const [endDate, setEndDate] = useState();
  const [urlTo, setUrlTo] = useState("");
  const onChangeUrlTo = useCallback(
    (e) => {
      setUrlTo(e.target.value);
    },
    [urlTo]
  );
  const onChangeEndTo = useCallback(
    (newValue) => {
      setEndDate(newValue);
    },
    [endDate]
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      try {
        addBanner({
          imgURL: url,
          urlTo: urlTo,
          endDate: endDate,
        }).then((res: any) => {
          if (res.data === "success") {
            toast.success("작성완료");
            router.back();
          } else {
            toast.error("작성실패");
          }
        });
      } catch (e) {
        console.log(e);
      }
    },
    [url, endDate, urlTo]
  );

  return (
    <AdminBannerWriterContainer>
      <form onSubmit={onSubmit}>
        <DragDrop url={url} setUrl={setUrl} />
        <TextField
          size="small"
          placeholder="https://"
          value={urlTo}
          onChange={onChangeUrlTo}
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <div className="subContainer">
            <DesktopDatePicker
              // label="출발 예정일"
              inputFormat="yyyy/MM/dd"
              value={endDate}
              onChange={onChangeEndTo}
              renderInput={(params) => <TextField {...params} />}
            />
          </div>
        </LocalizationProvider>
        <Button variant="contained" type="submit">
          write
        </Button>
      </form>
    </AdminBannerWriterContainer>
  );
};

const AdminBannerWriterContainer = styled.div`
  padding: 1rem;
  & form {
    display: block;

    & div {
      display: block;
    }
  }
`;

export default AdminBannerWriter;
