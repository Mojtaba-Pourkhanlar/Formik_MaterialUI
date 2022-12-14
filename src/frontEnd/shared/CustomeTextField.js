import { TextField } from "@mui/material";
import React from "react";

export const CustomeTextField = ({
  name,
  value,
  onChange,
  error,
  helperText,
  label,
  type,
}) => {
  const CssTextField = {
    margin: "30px 0 3px",
    width: "100%",
    "& label": {
      color: "#048830",
    },
    "& label.Mui-focused": {
      color: "#048830",
    },
    "& input": {
      color: "#212121 !important",
      fontSize: "20px",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#ccc",
      },
      "&:hover fieldset": {
        borderColor: "#616161",
      },
      "&.Mui-focused fieldset": {
        borderColor: "green",
      },
    },
    "& .css-p51h6s-MuiInputBase-input-MuiOutlinedInput-input:-webkit-autofill":
      {
        boxShadow: "none",
        " -webkit-text-fill-color": "#000",
      },
  };
  return (
    <TextField
      sx={CssTextField}
      fullWidth
      id={name}
      type={type}
      name={name}
      label={label}
      onChange={onChange}
      helperText={helperText}
      error={error}
      value={value}
    />
  );
};
