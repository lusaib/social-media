import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  SxProps,
} from "@mui/material";

type FormSelectProps = {
  disabled: boolean;
  error: boolean;
  label: string;
  id: string;
  value: string;
  itemList: { name: string | number; value: string | number }[];
  onChange: (event: SelectChangeEvent) => void;
  helperText?: string;
  sx?: SxProps;
};

export function FormSelect(props: FormSelectProps) {
  return (
    <FormControl
      sx={{ minWidth: 80, ...props.sx }}
      fullWidth
      size="small"
      disabled={props.disabled}
      error={props.error}
    >
      <InputLabel id={`${props.id}-label`}>{props.label}</InputLabel>
      <Select
        labelId={`${props.id}-label`}
        id={props.id}
        name={props.id}
        value={props.value}
        label={props.label}
        onChange={props.onChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {props.itemList.map((e, i) => (
          <MenuItem key={i} value={e.value}>
            {e.name}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{props.helperText || ""}</FormHelperText>
    </FormControl>
  );
}

export function SelectInInputField(props: FormSelectProps) {
  return (
    <FormControl
      sx={{ minWidth: 60, ml: 0, ...props.sx }}
      fullWidth
      size="small"
      disabled={props.disabled}
      error={props.error}
    >
      <Select
        labelId={`${props.id}-label`}
        id={props.id}
        value={props.value}
        label={props.label}
        onChange={props.onChange}
        variant="standard"
        disableUnderline
      >
        <MenuItem value="" sx={{}}>
          <em>None</em>
        </MenuItem>
        {props.itemList.map((e) => (
          <MenuItem value={e.value}>{e.name}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
