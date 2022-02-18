import { Box, Checkbox } from "@mui/material";
import { VFC } from "react";

interface Props {
  tag: string;
  checked?: boolean;
  onChange?: any;
}

const CheckContainer: VFC<Props> = ({ tag, checked, onChange }) => {
  return (
    <Box>
      <Checkbox
        sx={{ padding: 0, paddingRight: 1 }}
        checked={checked}
        onChange={onChange}
      />
      <span>{tag}</span>
    </Box>
  );
};

export default CheckContainer;
