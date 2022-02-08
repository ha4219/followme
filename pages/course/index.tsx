import CustomEditor from "@components/CustomEditor";
import TestEditor from "@components/CustomEditor/TestEditor";
import LeftLayout from "@components/LeftLayout";
import { Container, Grid, Box } from "@mui/material";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";

const Course = () => {
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <Container>
      <Grid container>
        <LeftLayout />
        <Grid xs={9}>
          <Box>
            {/* <CustomEditor /> */}
            <TestEditor description={value} setDescription={setValue} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Course;
