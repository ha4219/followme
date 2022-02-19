import { COURSETAGS } from "@data/CourseData";
import { Grid } from "@mui/material";
import { FC } from "react";
import TagContainerVertical from "../TagContainerVertical";

const CourseLeftLayout: FC = ({ children }) => {
  return (
    <Grid container>
      <Grid item xs={3}>
        <TagContainerVertical tags={COURSETAGS} />
      </Grid>
      <Grid item xs={9}>
        {children}
      </Grid>
    </Grid>
  );
};

export default CourseLeftLayout;
