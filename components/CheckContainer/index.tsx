import { Box, Checkbox } from "@mui/material";
import { VFC } from "react";

interface Props {
  tag: string;
}

const CheckContainer: VFC<Props> = ({ tag }) => {
  return (
    <Box>
      <Checkbox sx={{ padding: 0, paddingRight: 1 }} />
      <span>{tag}</span>
    </Box>
  );
};

export default CheckContainer;
