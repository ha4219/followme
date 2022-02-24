import { Box, Grid, TextField, Typography } from "@mui/material";
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
import { DOMESTIC, OVERSEAS, SEASON } from "@data/OptionData";
import { COURSETAGS } from "@data/CourseData";

const LeftLayout: FC = ({ children }) => {
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
      <Grid item xs={12} sm={12} md={3} sx={{ fontFamily: "paybooc-Medium" }}>
        <Box py={2}>
          <Box pr={2}>
            <TextField
              fullWidth
              value={value}
              onChange={onChangeValue}
              onKeyDown={onKeyDownValue}
            />
          </Box>
          {COURSETAGS.map((tag, index) => (
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
          {SEASON.map((item, index) => (
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
          {DOMESTIC.map((item, index) => (
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
          {OVERSEAS.map((item, index) => (
            <CheckContainerOverseas
              key={index}
              tag={item.name}
              value={item.value}
            />
          ))}
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={9}>
        {children}
      </Grid>
    </Grid>
  );
};

export default LeftLayout;
