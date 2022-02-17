import MapEditor from "@components/MapEditor";
import styled from "@emotion/styled";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Checkbox,
} from "@mui/material";
import dynamic from "next/dynamic";
import { useCallback, useEffect, useRef, useState, useMemo } from "react";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import CheckContainer from "@components/CheckContainer";
import useInput from "@hooks/useInput";
import { v1 } from "uuid";
// import S3 from "react-aws-s3";
// import S3FileUpload from "react-s3";
import AWS from "aws-sdk";
import { config } from "@config/s3Config";
import { API } from "@src/API";

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

// Quill Toolbar component
export const QuillToolbar = () => (
  <div id="toolbar">
    <span className="ql-formats">
      <select className="ql-font" defaultValue="arial">
        <option value="arial">Arial</option>
        <option value="comic-sans">Comic Sans</option>
        <option value="courier-new">Courier New</option>
        <option value="georgia">Georgia</option>
        <option value="helvetica">Helvetica</option>
        <option value="lucida">Lucida</option>
      </select>
      <select className="ql-size" defaultValue="medium">
        <option value="extra-small">Size 1</option>
        <option value="small">Size 2</option>
        <option value="medium">Size 3</option>
        <option value="large">Size 4</option>
      </select>
      <select className="ql-header" defaultValue="3">
        <option value="1">Heading</option>
        <option value="2">Subheading</option>
        <option value="3">Normal</option>
      </select>
    </span>
    <span className="ql-formats">
      <button className="ql-bold" />
      <button className="ql-italic" />
      <button className="ql-underline" />
      <button className="ql-strike" />
    </span>
    <span className="ql-formats">
      <button className="ql-list" value="ordered" />
      <button className="ql-list" value="bullet" />
      <button className="ql-indent" value="-1" />
      <button className="ql-indent" value="+1" />
    </span>
    <span className="ql-formats">
      <button className="ql-script" value="super" />
      <button className="ql-script" value="sub" />
      <button className="ql-blockquote" />
      <button className="ql-direction" />
    </span>
    <span className="ql-formats">
      <select className="ql-align" />
      <select className="ql-color" />
      <select className="ql-background" />
    </span>
    <span className="ql-formats">
      <button className="ql-link" />
      <button className="ql-image" />
      <button className="ql-video" />
    </span>
    <span className="ql-formats">
      <button className="ql-formula" />
      <button className="ql-code-block" />
      <button className="ql-clean" />
    </span>
    <span className="ql-formats">
      <button className="ql-undo">
        <CustomUndo />
      </button>
      <button className="ql-redo">
        <CustomRedo />
      </button>
    </span>
  </div>
);

const CustomEditor = () => {
  const ref = useRef();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [dialogImg, setDialogImg] = useState();
  const [day, setDay] = useState(1);
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);

  const onCloseDialog = useCallback(() => {
    setOpen(false);
  }, []);

  const onSubmitDialog = () => {
    console.log();
  };

  useEffect(() => {
    console.log();
  }, [dialogImg]);

  const onChangeDialog = (e) => {
    setDialogImg(e.target.files[0]);
  };

  const onTagKeyDown = (e) => {
    if (e.keyCode === 13) {
      console.log(tags);
      setTags([...tags, tag]);
    }
  };

  const onTagClick = (index) => {
    const arr = [...tags];
    arr.pop(index);
    setTags(arr);
  };

  const [region1, setRegion1, onChangeRegion1] = useInput("국내");
  const [region2, setRegion2, onChangeRegion2] = useInput("서울");
  const [date1, setDate1, onChangeDate1] = useInput(1);
  const [date2, setDate2, onChangeDate2] = useInput(2);
  useEffect(() => {
    console.log(value);
  }, [value]);

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
              `${process.env.NEXT_PUBLIC_S3URL}${fileName}`
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
    const regex = /<img.*?src=['"](.*?)['"]/;
    let mainImage = null;
    try {
      mainImage = regex.exec(value)[1];
    } catch (e) {
      console.log("not main image");
      mainImage = "";
    }
    API.post("main/insertTravelBoards", {
      title: title,
      tags: tags,
      shortContent: "",
      content: value,
      mainImg: mainImage,
      isLocal: 1,
      schedule: "2박3일",
      region: "jeju",
      season: "spring",
      writer: "admin",
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
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
          ["image", "video"],
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
      <Dialog open={open} onClose={onCloseDialog}>
        <Box sx={{ width: "400px", height: "400px" }}>
          <MapEditor />
          <img />
          <input type="file" accept="image/*" onChange={onChangeDialog} />
          <div>
            <TextField placeholder="title" />
          </div>
          <div>
            <TextField placeholder="content" />
          </div>
          <DialogActions>
            <Button onClick={onSubmitDialog}>submit</Button>
            <Button onClick={onCloseDialog}>close</Button>
          </DialogActions>
        </Box>
      </Dialog>
      <OptionContainer>
        <div className="checkContainer">
          <div className="checkbox">
            <Checkbox />
            <span>추천코스</span>
          </div>
          <div className="checkbox">
            <Checkbox />
            <span>테마여행</span>
          </div>
        </div>
        <div className="region">
          <p className="label">지역</p>
          {/* <InputLabel id="region1-select-label">선택</InputLabel> */}
          <Select value={region1} onChange={onChangeRegion1} label="선택">
            <MenuItem value="국내">국내</MenuItem>
            <MenuItem value="해외">해외</MenuItem>
          </Select>
          <Select value={region2} onChange={onChangeRegion2}>
            <MenuItem value="서울">서울</MenuItem>
            <MenuItem value="경기">경기</MenuItem>
          </Select>
        </div>
        <div className="date">
          <p className="label">일정</p>
          <Select value={date1} onChange={onChangeDate1}>
            <MenuItem value={0}>0박</MenuItem>
            <MenuItem value={1}>1박</MenuItem>
            <MenuItem value={2}>2박</MenuItem>
            <MenuItem value={3}>3박</MenuItem>
            <MenuItem value={4}>4박</MenuItem>
            <MenuItem value={5}>5박</MenuItem>
            <MenuItem value={6}>6박</MenuItem>
            <MenuItem value={7}>7박</MenuItem>
            <MenuItem value={8}>8박</MenuItem>
            <MenuItem value={9}>9박+</MenuItem>
          </Select>
          <Select value={date2} onChange={onChangeDate2}>
            <MenuItem value={1}>1일</MenuItem>
            <MenuItem value={2}>2일</MenuItem>
            <MenuItem value={3}>3일</MenuItem>
            <MenuItem value={4}>4일</MenuItem>
            <MenuItem value={5}>5일</MenuItem>
            <MenuItem value={6}>6일</MenuItem>
            <MenuItem value={7}>7일</MenuItem>
            <MenuItem value={8}>8일</MenuItem>
            <MenuItem value={9}>9일+</MenuItem>
          </Select>
        </div>
      </OptionContainer>
      <TextField
        fullWidth
        placeholder="제목을 입력해주세요."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <MapAddContainer>
        <div className="label">
          <Button className="btn" size="small" onClick={() => setDay(day + 1)}>
            +
          </Button>
          {day}일차
          <Button className="btn" size="small" onClick={() => setDay(day - 1)}>
            -
          </Button>
        </div>

        <Button onClick={() => setOpen(true)}>
          <AddLocationIcon />
          <div className="add">업체 리스트 검색</div>
        </Button>
      </MapAddContainer>
      <div>
        {/* <QuillToolbar />
        <Quill
          forwardedRef={ref}
          onChange={setValue}
          modules={modules}
          formats={formats}
        /> */}
        <Quill forwardedRef={ref} onChange={setValue} modules={modules} />
        <div dangerouslySetInnerHTML={{ __html: value }} />
      </div>
      <TagContainer>
        <TextField
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          onKeyDown={onTagKeyDown}
          fullWidth
          placeholder="#태그를 입력해주세요. (최대 10개)"
        />
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
      </TagContainer>
      <Button variant="contained" onClick={onSubmit}>
        제출
      </Button>
    </MainContainer>
  );
};

const MainContainer = styled.div``;

const OptionContainer = styled.div`
  display: flex;
  padding: 1rem 0;
  background-color: #aaaaaa;
  & .checkContainer {
    display: flex;
    margin-right: 1rem;
    & .checkbox {
      display: flex;
      align-items: center;
    }
  }

  & .region {
    display: flex;
    margin-right: 1rem;

    & p {
      margin-right: 1rem;
    }
  }
  & .date {
    display: flex;
    & p {
      margin-right: 1rem;
    }
  }
`;

const MapAddContainer = styled.div`
  display: flex;
  padding: 6px 0;
  margin: 1rem 0;
  margin-bottom: 2rem;

  & .label {
    margin: auto 0px;
    padding: 6px 0;
    border: 1px solid #111111;
    border-radius: 1rem;
    font-weight: bold;
    font-size: 0.9rem;
    margin-right: 1rem;
    & .btn {
      padding: 3px 0;
    }
  }

  & .add {
    background-color: #aaaaaa;
    border-radius: 1rem;
    padding: 6px 1rem;
  }
`;

const TagContainer = styled.div`
  margin: 1rem 0;

  & .list {
    margin-top: 5px;
    float: left;
    width: 100%;
    border-radius: 1rem;
    padding: 1rem;
    background-color: #aaaaaa;

    & .item {
      display: inline-block;
      border: 1px solid #000000;
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

export default CustomEditor;
