import {
  FormControl,
  FormHelperText,
  InputAdornment,
  InputBaseComponentProps,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import React, { HTMLInputTypeAttribute } from "react";

type FormInputFieldProps = {
  disabled: boolean;
  error?: boolean;
  labelHeading: string;
  id: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  helperText?: string;
  inputType?: HTMLInputTypeAttribute;
  inputProps?: InputBaseComponentProps;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
};

export default function FormInputField(props: FormInputFieldProps) {
  const {
    disabled,
    error,
    id,
    labelHeading,
    onChange,
    value,
    helperText,
    inputType,
    startAdornment,
    endAdornment,
    inputProps,
  } = props;
  return (
    <FormControl
      fullWidth
      size="small"
      // variant="filled"
      disabled={disabled}
      error={error}
    >
      <InputLabel htmlFor={id}>{labelHeading}</InputLabel>
      <OutlinedInput
        id={id}
        value={value}
        onChange={onChange}
        aria-describedby={`${id}-text`}
        label={labelHeading}
        inputProps={inputProps}
        startAdornment={
          startAdornment ? (
            <InputAdornment position="start">{startAdornment}</InputAdornment>
          ) : null
        }
        endAdornment={
          endAdornment ? (
            <InputAdornment position="end">{endAdornment}</InputAdornment>
          ) : null
        }
        type={inputType}
        sx={{ paddingLeft: 0 }}
        autoComplete="off"
      />
      <FormHelperText id={`${id}-text`}>{helperText || ""}</FormHelperText>
    </FormControl>
  );
}
