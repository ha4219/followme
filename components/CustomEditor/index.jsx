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
import useInput from "@hooks/useInput";
import { v1 } from "uuid";
// import S3 from "react-aws-s3";
// import S3FileUpload from "react-s3";
import AWS from "aws-sdk";
import { config } from "@config/s3Config";
import { API, getPayload } from "@src/API";
import { DOMESTIC, OVERSEAS, SEASON } from "data/OptionData";
import { useRecoilValue } from "recoil";
import { idState } from "@store/auth";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

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

const CustomEditor = () => {
  const ref = useRef();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [dialogImg, setDialogImg] = useState();
  const [day, setDay] = useState(1);
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);
  const isLoggedInId = useRecoilValue(idState);

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
      setTags([...tags, tag]);
    }
  };

  const onTagClick = (index) => {
    const arr = [...tags];
    arr.pop(index);
    setTags(arr);
  };
  const [season, setSeason, onChangeSeason] = useInput("spring");
  const [region1, setRegion1, onChangeRegion1] = useInput(1);
  const [region2, setRegion2, onChangeRegion2] = useInput("??????");
  const [date1, setDate1, onChangeDate1] = useInput(1);
  const [date2, setDate2, onChangeDate2] = useInput(2);
  // useEffect(() => {
  //   console.log(value);
  // }, [value]);

  useEffect(() => {
    setRegion2(region1 ? DOMESTIC[0].value : OVERSEAS[0].value);
  }, [region1]);

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
    const regex = /<img.*?src=['"](.*?)['"]/;
    // ????????????????????? shortContent ??????
    const shortContent = value.replace(/(<([^>]+)>)/gi, "").slice(0, 50);
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
      shortContent: shortContent,
      content: value,
      mainImg: mainImage,
      isLocal: region1,
      schedule: `${date1}???${date2}???`,
      region: region2,
      season: season,
      writer: isLoggedInId,
    })
      .then((res) => {
        toast.success("????????????");
        router.back();
      })
      .catch((err) => {
        toast.error("??????");
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
      <Dialog open={open} onClose={onCloseDialog}>
        {/* <Box sx={{ width: "400px", height: "400px" }}> */}
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
        {/* </Box> */}
      </Dialog>
      <OptionContainer>
        <div className="checkContainer">
          <div className="checkbox">
            <Checkbox />
            <span>????????????</span>
          </div>
          <div className="checkbox">
            <Checkbox />
            <span>????????????</span>
          </div>
        </div>
        <div className="season">
          <p className="label">??????</p>
          <Select value={season} onChange={onChangeSeason} label="??????">
            {SEASON.map((item, index) => (
              <MenuItem key={index} value={item.value}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div className="region">
          <p className="label">??????</p>
          <Select value={region1} onChange={onChangeRegion1} label="??????">
            <MenuItem value={1}>??????</MenuItem>
            <MenuItem value={0}>??????</MenuItem>
          </Select>
          {region1 ? (
            <Select value={region2} onChange={onChangeRegion2}>
              {DOMESTIC.map((item, index) => (
                <MenuItem key={index} value={item.value}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          ) : (
            <Select value={region2} onChange={onChangeRegion2}>
              {OVERSEAS.map((item, index) => (
                <MenuItem key={index} value={item.value}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          )}
        </div>
        <div className="date">
          <p className="label">??????</p>
          <Select value={date1} onChange={onChangeDate1}>
            <MenuItem value={0}>0???</MenuItem>
            <MenuItem value={1}>1???</MenuItem>
            <MenuItem value={2}>2???</MenuItem>
            <MenuItem value={3}>3???</MenuItem>
            <MenuItem value={4}>4???</MenuItem>
            <MenuItem value={5}>5???</MenuItem>
            <MenuItem value={6}>6???</MenuItem>
            <MenuItem value={7}>7???</MenuItem>
            <MenuItem value={8}>8???</MenuItem>
            <MenuItem value={9}>9???+</MenuItem>
          </Select>
          <Select value={date2} onChange={onChangeDate2}>
            <MenuItem value={1}>1???</MenuItem>
            <MenuItem value={2}>2???</MenuItem>
            <MenuItem value={3}>3???</MenuItem>
            <MenuItem value={4}>4???</MenuItem>
            <MenuItem value={5}>5???</MenuItem>
            <MenuItem value={6}>6???</MenuItem>
            <MenuItem value={7}>7???</MenuItem>
            <MenuItem value={8}>8???</MenuItem>
            <MenuItem value={9}>9???+</MenuItem>
          </Select>
        </div>
      </OptionContainer>
      <TextField
        fullWidth
        placeholder="????????? ??????????????????."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <MapAddContainer>
        <div className="label">
          <Button className="btn" size="small" onClick={() => setDay(day + 1)}>
            +
          </Button>
          {day}??????
          <Button className="btn" size="small" onClick={() => setDay(day - 1)}>
            -
          </Button>
        </div>

        <Button onClick={() => setOpen(true)}>
          <AddLocationIcon />
          <div className="add">?????? ????????? ??????</div>
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
      </div>
      <TagContainer>
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
      </TagContainer>
      <div className="center">
        <Button variant="contained" onClick={onSubmit}>
          ??????
        </Button>
      </div>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  & .center {
    text-align: center;
  }
`;

const OptionContainer = styled.div`
  display: flex;
  padding: 1rem 0;
  justify-content: space-around;
  background-color: #f1f3f7;
  margin-bottom: 2rem;
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

  & .season {
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
    background-color: #f1f3f7;
    border-radius: 1rem;
    padding: 6px 1rem;
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

export default CustomEditor;
