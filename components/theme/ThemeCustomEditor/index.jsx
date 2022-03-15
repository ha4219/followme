import MapEditor from "@components/MapEditor";
import styled from "@emotion/styled";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  MenuItem,
  Select,
  TextField,
  Checkbox,
} from "@mui/material";
import { useCallback, useEffect, useRef, useState, useMemo } from "react";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import useInput from "@hooks/useInput";
import StarGenerator from "@components/StarGenerator";
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
import ThemeCustomRightScrollTable from "../ThemeCustomRightScrollTable";
import { mapSelectedState } from "@store/map";
import { editorState } from "@store/editor";
import CustomEditorTag from "@components/CustomEditorTag";
import QuillCSR, { Quill } from "react-quill";

AWS.config.update({
  accessKeyId: config.accessKeyID,
  secretAccessKey: config.secretAccessKey,
});

const myBucket = new AWS.S3({
  params: { Bucket: config.bucketName },
  region: config.region,
});

const Inline = Quill.import("blots/inline");
const BlockEmbed = Quill.import("blots/block/embed");

class MapContainerClass extends Inline {
  static create(params) {
    const node = super.create();
    // node.setAttribute("class", val.className);
    // node.setAttribute("id", val.id);
    console.log(node, typeof node);
    node.setAttribute("style", "display: flex");
    return node;
  }
}

MapContainerClass.blotName = "map";
MapContainerClass.tagName = "div";

class MapContainerImgClass extends BlockEmbed {
  static create(params) {
    const node = super.create();
    // node.setAttribute("class", val.className);
    // node.setAttribute("id", val.id);
    // console.log(node, typeof node);
    node.setAttribute("alt", params);
    node.setAttribute("src", params);
    console.log(params);
    // node.innerHTML = `<div style='display:flex'><div><img src='${params[0]}'/></div></div>`;
    // node.setAttribute("style", "display: flex");
    return node;
  }
  static value(node) {
    return {
      alt: node.getAttribute("alt"),
      url: node.getAttribute("src"),
    };
  }
}
MapContainerImgClass.tagName = "img";
MapContainerImgClass.blotName = "mapImg";

class MapContainerTestClass extends BlockEmbed {
  static create(params) {
    const node = super.create();
    const count = Math.ceil(params[3]);
    const fillStar = `<svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        style="fill: #f3c221;"
      >
        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
      </svg>
    `;
    const outlineStar = `<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M15.668 8.626l8.332 1.159-6.065 5.874 1.48 8.341-7.416-3.997-7.416 3.997 1.481-8.341-6.064-5.874 8.331-1.159 3.668-7.626 3.669 7.626zm-6.67.925l-6.818.948 4.963 4.807-1.212 6.825 6.068-3.271 6.069 3.271-1.212-6.826 4.964-4.806-6.819-.948-3.002-6.241-3.001 6.241z"/></svg>`;
    const starsBody = "";
    for (let i = 0; i < 5; i++) {
      if (count - 1 >= i) {
        starsBody += fillStar;
      } else {
        starsBody += outlineStar;
      }
    }
    const stars = `<div style="display: flex;">${starsBody}</div>`;
    const tag = (value) => `<div style="display: inline-block;
  color: #b69775;
  font-family: paybooc-Bold;
  font-size: 0.8rem;
  padding: 0.2rem;
  margin-right: 5px;
  border: 1px solid #b69775;
  border-radius: 12px;">${value}</div>`;
    const tags = "";
    for (let i = 0; i < params[4].length; i++) {
      tags += tag(params[4][i]);
    }
    node.innerHTML = `<div style='display:flex; padding: 1rem;'><img src='${params[0]}' style="width: 200px; height: 200px;margin-right: 1rem; border-radius: 200px" alt=${params[0]}/><div style="font-family: paybooc-Light;"><div style="font-family: paybooc-Bold; height: 2rem; font-size: 1.2rem;">${params[1]}</div><div style="height: 4rem;">${params[2]}</div><div style="height: 2rem">${stars}</div><div style="height: 2rem">${tags}</div></div></div>`;
    return node;
  }
  // static value(node) {
  //   return {
  //     alt: node.getAttribute("alt"),
  //     url: node.getAttribute("src"),
  //   };
  // }
}

MapContainerTestClass.tagName = "div";
MapContainerTestClass.blotName = "test";

// MapContainerClass.tagName = "div";
Quill.register("formats/map", MapContainerClass);
Quill.register("formats/mapImg", MapContainerImgClass);
Quill.register("formats/test", MapContainerTestClass);

const formats = [
  "map",
  "mapImg",
  "test",
  "bold",
  "color",
  "size",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "image",
  "list",
  "indent",
];

// const Quill = dynamic(import("react-quill"), {
//   ssr: false,
//   loading: () => <p>Loading ...</p>,
// });
// const QuillCSR = dynamic(
//   async () => {
//     const { default: RQ } = await import("react-quill");
//     // console.log(RQ.Quill.import("blots/inline"));

//     return function comp({ forwardedRef, ...props }) {
//       return <RQ ref={forwardedRef} {...props} />;
//     };
//   },
//   { ssr: false }
// );

// const Inline = dynamic(
//   async () => {
//     const inlineChild = await Quill.import("blots/inline");
//     return inlineChild;
//   },
//   {
//     ssr: false,
//   }
// );
// const Inline = Quill.import("blots/inline");

const ThemeCustomEditor = () => {
  const ref = useRef();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [dialogImg, setDialogImg] = useState();
  const [day, setDay] = useState(1);
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);
  const [checked, setChecked] = useState([true, false]);
  const isLoggedInId = useRecoilValue(idState);
  const mapSelectState = useRecoilValue(mapSelectedState);

  const onCloseDialog = useCallback(() => {
    setOpen(false);
  }, []);
  const handleChange1 = (event) => {
    if (event.target.checked) {
      setChecked([true, false]);
    } else {
      setChecked([false, true]);
    }
  };
  const handleChange2 = (event) => {
    if (event.target.checked) {
      setChecked([false, true]);
    } else {
      setChecked([true, false]);
    }
  };

  const onSubmitDialog = () => {
    // console.log(Inline);
    // QuillCSR.register(Block);
    const editor = ref.current.getEditor();
    const range = ref.current.getEditorSelection()?.index
      ? ref.current.getEditorSelection()?.index
      : 0;
    // console.log(editor, ref.current.getEditorConfig());
    // editor.insertEmbed(range + 1, "boldbold", true, Quill.sources.USER);
    // editor.insertText(range, " ", { map: mapSelectState });
    editor.insertEmbed(range, "test", mapSelectState, Quill.sources.USER);
    // editor.insertEmbed(range + 1, "mapImg", mapSelectState[0]);
    // console.log(createElementWithClassName());
    // setValue(value + createElementWithClassName());
  };

  // useEffect(() => {}, [dialogImg]);

  // const onChangeDialog = (e) => {
  //   setDialogImg(e.target.files[0]);
  // };

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
  const [region2, setRegion2, onChangeRegion2] = useInput("서울");
  const [date1, setDate1, onChangeDate1] = useInput(1);
  const [date2, setDate2, onChangeDate2] = useInput(2);
  useEffect(() => {
    console.log(value);
  }, [value]);

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
    if (checked[0] + checked[1] !== 1) {
      toast.error("게시판을 제대로 선택해주세요");
      return;
    }
    if (!title.length) {
      toast.error("제목을 입력해주세요");
      return;
    }
    const regex = /<img.*?src=['"](.*?)['"]/;
    // 정규표현식으로 shortContent 받기
    const shortContent = value.replace(/(<([^>]+)>)/gi, "").slice(0, 50);
    let mainImage = null;
    try {
      mainImage = regex.exec(value)[1];
    } catch (e) {
      console.log("not main image");
      mainImage = "";
    }
    API.post(
      checked[0]
        ? "recommend/insertRecommendBoards"
        : "/theme/insertThemeBoards",
      {
        title: title,
        tags: tags,
        shortContent: shortContent,
        content: value,
        mainImg: mainImage,
        isLocal: region1,
        schedule: `${date1}박${date2}일`,
        region: region2,
        season: season,
        writer: isLoggedInId,
      }
    )
      .then((res) => {
        toast.success("등록완료");
        router.back();
      })
      .catch((err) => {
        toast.error("에러");
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
      <Dialog open={open} onClose={onCloseDialog} fullWidth>
        <ThemeCustomEditorDialog>
          <div className="themeCustomEditorDialogLayout">
            <div className="themeCustomEditorDialogBody">
              <MapEditor />
              {/* <img /> */}
              {/* <input type="file" accept="image/*" onChange={onChangeDialog} /> */}
              <div className="themeCustomEditorDialogContainer">
                <img
                  src={mapSelectState[0]}
                  alt={mapSelectState[0]}
                  className="themeCustomEditorDialogContainerImg"
                />
                <div className="themeCustomEditorDialogContainerBody">
                  <div className="themeCustomEditorDialogTitle">
                    {/* 식당명칭이 들어갈 자 */}
                    {mapSelectState[1]}
                  </div>
                  <div className="themeCustomEditorDialogContent">
                    {/* 본문에 있는 내용 중, 해당 컨텐츠를 잘 설명할 수 있는 핵심
                      문장을 인용하여 이용자에게 보여줄 수 있습니다. 본문에 있는
                      내용 중, 해당 컨텐츠를 잘 설명할 수 있는 핵심 문장을
                      인용하여 이용자에게 보여줄 수 있습니다. */}
                    {mapSelectState[2]}
                  </div>
                  <div className="themeCustomEditorDialogScore">
                    {/* {mapSelectState[3]} */}
                    <StarGenerator count={mapSelectState[3]} />
                  </div>
                  <div className="themeCustomEditorDialogTags">
                    {mapSelectState[4].map((item, index) => {
                      return <CustomEditorTag tag={item} key={index} />;
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="themeCustomEditorDialogRightScroll">
              <ThemeCustomRightScrollTable />
            </div>
          </div>
          <DialogActions>
            <Button onClick={onSubmitDialog} variant="contained">
              submit
            </Button>
            <Button onClick={onCloseDialog} variant="contained" color="error">
              close
            </Button>
          </DialogActions>
        </ThemeCustomEditorDialog>
      </Dialog>
      <OptionContainer>
        <div className="checkContainer">
          <div className="checkbox">
            <Checkbox checked={checked[0]} onChange={handleChange1} />
            <span>추천코스</span>
          </div>
          <div className="checkbox">
            <Checkbox checked={checked[1]} onChange={handleChange2} />
            <span>테마여행</span>
          </div>
        </div>
        <div className="season">
          <p className="label">계절</p>
          <Select value={season} onChange={onChangeSeason} label="선택">
            {SEASON.map((item, index) => (
              <MenuItem key={index} value={item.value}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div className="region">
          <p className="label">지역</p>
          <Select value={region1} onChange={onChangeRegion1} label="선택">
            <MenuItem value={1}>국내</MenuItem>
            <MenuItem value={0}>해외</MenuItem>
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
        {/* <div className="label">
          <Button className="btn" size="small" onClick={() => setDay(day + 1)}>
            +
          </Button>
          {day}일차
          <Button className="btn" size="small" onClick={() => setDay(day - 1)}>
            -
          </Button>
        </div> */}

        <Button
          onClick={() => {
            // toast.info("추가 예정입니다.");
            setOpen(true);
          }}
        >
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
        <QuillCSR
          ref={ref}
          formats={formats}
          onChange={setValue}
          modules={modules}
        />
      </div>
      <TagContainer>
        <TextField
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          onKeyDown={onTagKeyDown}
          fullWidth
          placeholder="#태그를 입력해주세요. (최대 10개)"
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
          등록
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

const ThemeCustomEditorDialog = styled.div`
  display: block;
  padding: 1rem;

  & .themeCustomEditorDialogLayout {
    display: block;

    & .themeCustomEditorDialogContainer {
      display: flex;

      & .themeCustomEditorDialogContainerImg {
        width: 200px;
        height: 200px;
        backround-color: black;
        border-radius: 200px;
      }

      & .themeCustomEditorDialogContainerBody {
        // width: 100px;
        width: 100%;
        font-family: paybooc-Light;
        padding: 1rem;
        padding-left: 2rem;

        & .themeCustomEditorDialogTitle {
          font-family: paybooc-Bold;
          height: 2rem;
          font-size: 1.2rem;
        }

        & .themeCustomEditorDialogContent {
          height: 4rem;
        }
      }
    }

    & .themeCustomEditorDialogRightScroll {
      // overflow: auto;
      // background-color: black;
      // width: 200px;
      // overflow: hidden;
      // overflow: auto;
      // border-left: 1px solid #000000;
    }
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
        background-color: #ff4e40;
        color: #ffffff;
      }
    }
  }
`;

export default ThemeCustomEditor;
