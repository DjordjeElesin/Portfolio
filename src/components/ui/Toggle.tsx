import React from "react";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import { styled } from "@mui/material/styles";

interface ToggleProps {
  uncheckedLabel: React.ReactNode;
  checkedLabel: React.ReactNode;
  checked: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

// Separate the styled component definition
const StyledSwitch = styled(Switch)({
  width: 60,
  height: 34,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 3,
    "&.Mui-checked": {
      transform: "translateX(26px)",
      "& + .MuiSwitch-track": {
        backgroundColor: "#e0e0e0 !important",
      },
      "& .MuiSwitch-thumb": {
        backgroundColor: "#cacaca",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    width: 28,
    height: 28,
    backgroundColor: "#666666",
  },
  "& .MuiSwitch-track": {
    borderRadius: 17,
    backgroundColor: "#000 !important",
    opacity: "1 !important",
  },
});

function Toggle(props: ToggleProps) {
  const { uncheckedLabel, checkedLabel, checked, onChange } = props;
  
  return (
    <FormControlLabel
      className={`toggle flex gap-2 ${checked ? "text-light-100" : "text-dark-100"}`}
      control={
        <StyledSwitch 
          checked={checked} 
          onChange={onChange}
        />
      }
      label={checked ? checkedLabel : uncheckedLabel}
    />
  );
}

export default Toggle;