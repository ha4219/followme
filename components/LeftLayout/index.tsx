import { Box, Drawer, Grid, Typography } from "@mui/material";
import ShadowTag from "@components/ShadowTag";
import CheckContainer from "@components/CheckContainer";

const EDITORTAGS: string[] = ["해시태그", "해시태그", "해시태그", "해시태그"];
const SEASONS: string[] = ["봄", "여름", "가을", "겨울"];
const KOREAREGIONS: string[] = ["서울", "경기도", "강원도", "경상도"];
const FOREIGNREGIONS: string[] = ["일본", "태국", "필리핀", "미국"];

const LeftLayout = () => {
  return (
    <Grid item xs={3} sx={{ fontFamily: "paybooc-Medium" }}>
      <Box py={2}>
        <Typography
          py={1}
          sx={{ fontFamily: "paybooc-Bold", fontSize: "1.2rem" }}
        >
          {"Editor's Pick"}
        </Typography>
        {EDITORTAGS.map((tag, index) => (
          <ShadowTag key={index} tag={tag} />
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
          <CheckContainer key={index} tag={tag} />
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
          <CheckContainer key={index} tag={tag} />
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
  );
};

export default LeftLayout;
