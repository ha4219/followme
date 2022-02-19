import { Box, Drawer, Grid, Typography } from "@mui/material";
import ShadowTag from "@components/ShadowTag";
import CheckContainer from "@components/CheckContainer";
import { FC, useCallback, useEffect, useState } from "react";
// import { DATA } from "@data/LeftCheckBox";
import EditorTag from "@components/editor/EditorTag";

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
const KOREAREGIONS: ICheck[] = [
  { name: "서울", value: "서울" },
  { name: "경기도", value: "경기도" },
  { name: "강원도", value: "강원도" },
];
const FOREIGNREGIONS: string[] = ["일본", "태국", "필리핀", "미국"];

const LeftLayout: FC<IProps> = ({ children, editorTags, setTag }) => {
  useEffect(() => {
    // setSeason({});
  }, []);

  return (
    <Grid container>
      <Grid item xs={3} sx={{ fontFamily: "paybooc-Medium" }}>
        <Box py={2}>
          <Typography
            py={1}
            sx={{ fontFamily: "paybooc-Bold", fontSize: "1.2rem" }}
          >
            {"Editor's Pick"}
          </Typography>
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
          {SEASONS.map((tag, index) => (
            <CheckContainer key={index} tag={tag.name} />
          ))}
        </Box>
        <Box py={2}>
          <Typography
            py={1}
            sx={{ fontFamily: "paybooc-Bold", fontSize: "1.2rem" }}
          >
            {"지역별(국내)"}
          </Typography>
          {KOREAREGIONS.map((tag, index) => (
            <CheckContainer key={index} tag={tag.name} />
          ))}
        </Box>
        <Box py={2}>
          <Typography
            py={1}
            sx={{ fontFamily: "paybooc-Bold", fontSize: "1.2rem" }}
          >
            {"지역별(해외)"}
          </Typography>
          {FOREIGNREGIONS.map((tag, index) => (
            <CheckContainer key={index} tag={tag} />
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
