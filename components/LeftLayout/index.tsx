import { Box, Drawer, Grid, Typography } from "@mui/material";
import ShadowTag from "@components/ShadowTag";

const EDITORTAGS: string[] = ["해시태그", "해시태그", "해시태그", "해시태그"];

const LeftLayout = () => {
  return (
    <Grid item xs={2} sx={{ fontFamily: "paybooc-Medium" }}>
      <Box>
        <Typography mb={1} sx={{ fontFamily: "paybooc-Bold" }}>
          {"Editor's Pick"}
        </Typography>
        {EDITORTAGS.map((tag, index) => (
          <ShadowTag key={index} tag={tag} />
        ))}
      </Box>
      <Box>
        <Typography mb={1} sx={{ fontFamily: "paybooc-Bold" }}>
          {"Editor's Pick"}
        </Typography>
        {EDITORTAGS.map((tag, index) => (
          <ShadowTag key={index} tag={tag} />
        ))}
      </Box>
    </Grid>
  );
};

export default LeftLayout;
