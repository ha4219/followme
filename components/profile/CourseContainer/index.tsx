import { Grid } from "@mui/material";
import { VFC } from "react";
import { ICourse } from "types/apiType";
import CourseContent from "../CourseContent";

interface IProps {
  courses: ICourse[];
  like: boolean;
}
const CourseContainer: VFC<IProps> = ({ courses, like }) => {
  return (
    <Grid container spacing={1}>
      {courses?.map((item, index) => (
        <CourseContent key={index} course={item} like={like} />
      ))}
    </Grid>
  );
};

export default CourseContainer;
