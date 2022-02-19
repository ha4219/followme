import { Box, Drawer, Grid, TextField, Typography } from "@mui/material";
import ShadowTag from "@components/ShadowTag";
import {
  CheckContainerSeason,
  CheckContainerOverseas,
  CheckContainerDomestic,
} from "@components/CheckContainer";
import { FC, useCallback, useState } from "react";
// import { DATA } from "@data/LeftCheckBox";
import EditorTag from "@components/editor/EditorTag";
import { useRecoilState } from "recoil";
import { tagState } from "@store/tag";

interface IProps {
  editorTags?: string[];
  setTag?: any;
}

interface ICheck {
  name: string;
  value: string;
}

const SEASONS: ICheck[] = [
  { name: "봄", value: "spring" },
  { name: "여름", value: "summer" },
  { name: "가을", value: "autumn" },
  { name: "겨울", value: "winter" },
];
const DOMESTICREGIONS: ICheck[] = [
  { name: "서울", value: "서울" },
  { name: "경기도", value: "경기도" },
  { name: "강원도", value: "강원도" },
];
const OVERSEASREGIONS: ICheck[] = [
  { name: "일본", value: "일본" },
  { name: "미국", value: "미국" },
  { name: "중국", value: "중국" },
];

const LeftLayout: FC<IProps> = ({ children, editorTags }) => {
  const [selectedTag, setSelectedTag] = useRecoilState(tagState);
  const [value, setValue] = useState("");

  const onChangeValue = useCallback(
    (e) => {
      setValue(e.target.value);
    },
    [value]
  );

  const onKeyDownValue = useCallback(
    (e) => {
      if (e.keyCode === 13) {
        setSelectedTag(value);
        setValue("");
      }
    },
    [value]
  );

  return (
    <Grid container>
      <Grid item xs={3} sx={{ fontFamily: "paybooc-Medium" }}>
        <Box py={2}>
          <Box pr={2}>
            <TextField
              fullWidth
              value={value}
              onChange={onChangeValue}
              onKeyDown={onKeyDownValue}
            />
          </Box>
          {editorTags?.map((tag, index) => (
            <EditorTag key={index} tag={tag} />
          ))}
        </Box>
        <Box py={2}>
          <Typography
            py={1}
            sx={{ fontFamily: "paybooc-Bold", fontSize: "1.2rem" }}
          >
            {"계절별"}
          </Typography>
          {SEASONS.map((item, index) => (
            <CheckContainerSeason
              key={index}
              tag={item.name}
              value={item.value}
            />
          ))}
        </Box>
        <Box py={2}>
          <Typography
            py={1}
            sx={{ fontFamily: "paybooc-Bold", fontSize: "1.2rem" }}
          >
            {"지역별(국내)"}
          </Typography>
          {DOMESTICREGIONS.map((item, index) => (
            <CheckContainerDomestic
              key={index}
              tag={item.name}
              value={item.value}
            />
          ))}
        </Box>
        <Box py={2}>
          <Typography
            py={1}
            sx={{ fontFamily: "paybooc-Bold", fontSize: "1.2rem" }}
          >
            {"지역별(해외)"}
          </Typography>
          {OVERSEASREGIONS.map((item, index) => (
            <CheckContainerOverseas
              key={index}
              tag={item.name}
              value={item.value}
            />
          ))}
        </Box>
      </Grid>
      <Grid item xs={9}>
        {children}
      </Grid>
    </Grid>
  );
};

export default LeftLayout;
