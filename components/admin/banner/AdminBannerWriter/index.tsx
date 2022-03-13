import DragDrop from "@components/DragDrop";
import styled from "@emotion/styled";
import { DesktopDatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { Button, TextField } from "@mui/material";
import { addBanner } from "api/admin";
import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";

const AdminBannerWriter = () => {
  const [url, setUrl] = useState("");
  const [endTo, setEndTo] = useState();
  const [urlTo, setUrlTo] = useState("");
  const onChangeUrlTo = useCallback(
    (e) => {
      setUrlTo(e.target.value);
    },
    [urlTo]
  );
  const onChangeEndTo = useCallback(
    (newValue) => {
      setEndTo(newValue);
    },
    [endTo]
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      try {
        addBanner({
          imgURL: url,
          urlTo: urlTo,
          endTo: endTo,
        });
      } catch (e) {
        console.log(e);
      }
    },
    [url, endTo, urlTo]
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
              inputFormat="MM/dd/yyyy"
              value={endTo}
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
