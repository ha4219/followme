import { SignupContainer } from "./styles";
import TextField from "@mui/material/TextField";
import { Button, FormHelperText } from "@mui/material";
import { Dispatch } from "react";

interface Props {
  id?: string;
  type?: string;
  label: string;
  value: string | number;
  onChange?: Dispatch<any>;
  placeholder: string;
  helperText?: string;
  btnLabel?: string;
  disabled?: boolean;
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
  onClickBtn,
  disabled,
}: Props) => {
  return (
    <SignupContainer>
      <div className="label">{label}</div>
      <div className="inputContainer">
        <TextField
          disabled={disabled}
          className="textInput"
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          size="small"
        />
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </div>
      {btnLabel && (
        <Button
          className="btn"
          variant="contained"
          disabled={!btnActive}
          onClick={onClickBtn}
        >
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
