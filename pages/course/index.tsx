import CustomEditor from "@components/CustomEditor";
import LeftLayout from "@components/LeftLayout";
import { Container, Grid, Box } from "@mui/material";
import { useEffect, useState } from "react";

const Course = () => {
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log(value.split("⁂"));
  }, [value]);

  return (
    <Container>
      <LeftLayout>
        <Box>
          <CustomEditor />
          {/* <TestEditor description={value} setDescription={setValue} /> */}
        </Box>
      </LeftLayout>
    </Container>
  );
};

export default Course;
