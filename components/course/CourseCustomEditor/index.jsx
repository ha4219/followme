import styled from "@emotion/styled";
import { Button, TextField } from "@mui/material";
import dynamic from "next/dynamic";
import { useCallback, useEffect, useRef, useState, useMemo } from "react";
import { v1 } from "uuid";
// import S3 from "react-aws-s3";
// import S3FileUpload from "react-s3";
import AWS from "aws-sdk";
import { config } from "@config/s3Config";
import { API, getPayload } from "@src/API";
import { useRecoilValue } from "recoil";
import { idState } from "@store/auth";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { insertCourseBoard } from "api/board";

AWS.config.update({
  accessKeyId: config.accessKeyID,
  secretAccessKey: config.secretAccessKey,
});

const myBucket = new AWS.S3({
  params: { Bucket: config.bucketName },
  region: config.region,
});

// const Quill = dynamic(import("react-quill"), {
//   ssr: false,
//   loading: () => <p>Loading ...</p>,
// });
const Quill = dynamic(
  async () => {
    const { default: RQ } = await import("react-quill");
    return function comp({ forwardedRef, ...props }) {
      return <RQ ref={forwardedRef} {...props} />;
    };
  },
  { ssr: false }
);

const CourseCustomEditor = () => {
  const ref = useRef();
  const router = useRouter();
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);
  const isLoggedInId = useRecoilValue(idState);

  const onTagKeyDown = (e) => {
    if (e.keyCode === 13) {
      setTags([...tags, tag]);
    }
  };

  const onTagClick = (index) => {
    const arr = [...tags];
    arr.pop(index);
    setTags(arr);
  };
  const [date1, setDate1] = useState();
  const [date2, setDate2] = useState();
  const onChangeDate1 = (newValue) => {
    setDate1(newValue);
  };
  const onChangeDate2 = (newValue) => {
    setDate2(newValue);
  };

  const putObjectWrapper = (params) => {
    return new Promise((resolve, reject) => {
      myBucket.putObject(params, function (err, result) {
        if (err) reject(err);
        if (result) resolve(result);
      });
    });
  };
  function imageHandler() {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.addEventListener("change", async () => {
      const file = input.files[0];
      const format = file.type.split("/")[1];
      const fileName = `${v1()}.${format}`;
      putObjectWrapper({
        Body: file,
        Bucket: config.bucketName,
        Key: fileName,
      })
        .then((res) => {
          console.log(res);
          const range = ref.current.getEditorSelection();
          ref.current
            .getEditor()
            .insertEmbed(
              range.index,
              "image",
              `${process.env.NEXT_PUBLIC_S3URL}/${fileName}`
            );
          ref.current.getEditor(range.index + 1);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          input.remove();
        });
    });
  }

  const onSubmit = async () => {
    try {
      const data = await insertCourseBoard({
        title: title,
        content: value,
        id: isLoggedInId,
      });
      if (data.data === "success") {
        toast.success("????????????");
        router.back();
      } else {
        toast.error("??????");
      }
    } catch (e) {
      toast.error("??????");
      console.log(e);
    }
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ size: ["small", false, "large", "huge"] }, { color: [] }],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
            { align: [] },
          ],
          ["image"],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    }),
    []
  );
  return (
    <MainContainer>
      <TextField
        fullWidth
        placeholder="????????? ??????????????????."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="dateContainer">
        {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
          <div className="subContainer">
            <span className="label">?????? ?????????</span>
            <DesktopDatePicker
              label="?????? ?????????"
              inputFormat="MM/dd/yyyy"
              value={date1}
              onChange={onChangeDate1}
              renderInput={(params) => <TextField {...params} />}
            />
          </div>
          <div className="subContainer">
            <span className="label">?????? ?????????</span>
            <DesktopDatePicker
              label="?????? ?????????"
              inputFormat="MM/dd/yyyy"
              value={date2}
              onChange={onChangeDate2}
              renderInput={(params) => <TextField {...params} />}
            />
          </div>
        </LocalizationProvider> */}
      </div>
      <div className="quill">
        {/* <QuillToolbar />
        <Quill
          forwardedRef={ref}
          onChange={setValue}
          modules={modules}
          formats={formats}
        /> */}
        <Quill forwardedRef={ref} onChange={setValue} modules={modules} />
      </div>
      {/* <TagContainer>
        <TextField
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          onKeyDown={onTagKeyDown}
          fullWidth
          placeholder="#????????? ??????????????????. (?????? 10???)"
        />
        {tags.length > 0 && (
          <div className="list">
            {tags.map((item, index) => (
              <Button
                className="item"
                key={index}
                onClick={() => onTagClick(index)}
              >
                #{item}
              </Button>
            ))}
          </div>
        )}
      </TagContainer> */}
      <div className="center">
        <Button variant="contained" onClick={onSubmit}>
          ??????
        </Button>
      </div>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  padding: 2rem 0;
  & .center {
    text-align: center;
  }

  & .dateContainer {
    padding: 2rem 0;
    display: flex;
    & .label {
      margin-right: 5px;
    }

    & .subContainer {
      display: flex;
      align-items: center;

      margin-right: 1rem;
    }
  }

  & .quill {
    padding: 1rem 0;
  }
`;

const TagContainer = styled.div`
  margin: 3rem 0;

  & .list {
    margin-top: 1rem;
    float: left;
    width: 100%;
    border-radius: 1rem;
    padding: 1rem;
    background-color: #f1f3f7;

    & .item {
      display: inline-block;
      color: #191919;
      border: 1px solid #191919;
      border-radius: 1rem;
      padding: 0.5rem 1rem;
      margin-right: 1rem;
      background-color: #ffffff;

      :hover {
        background-color: red;
      }
    }
  }
`;

export default CourseCustomEditor;
