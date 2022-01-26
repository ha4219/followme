import { SignupContainer } from "./styles";
import TextField from "@mui/material/TextField";
import { Button, FormHelperText } from "@mui/material";
import { Dispatch } from "react";

interface Props {
  id?: string;
  type?: string;
  label: string;
  value: string;
  onChange: Dispatch<any>;
  placeholder: string;
  helperText?: string;
  btnLabel?: string;
  btnActive?: boolean;
  onClickBtn?: () => void;
}

const SignupTextField = ({
  id,
  type,
  label,
  value,
  onChange,
  placeholder,
  helperText,
  btnLabel,
  btnActive,
}: Props) => {
  return (
    <SignupContainer>
      <div className="label">{label}</div>
      <TextField
        className="textInput"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        helperText={helperText}
        size="small"
      />
      {/* {helperText && <FormHelperText>{helperText}</FormHelperText>} */}

      {btnLabel && (
        <Button className="btn" variant="contained" disabled={!btnActive}>
          {btnLabel}
        </Button>
      )}
    </SignupContainer>
  );
};

SignupTextField.defaultProps = {
  type: "text",
};

export default SignupTextField;
