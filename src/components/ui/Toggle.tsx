import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

const CustomSwitch = styled(Switch)(({ theme }) => ({
  width: 60,
  height: 34,
  padding: 0,
  display: "flex",
  alignItems: "center",
  "& .MuiSwitch-switchBase": {
    padding: 3,
    "&.Mui-checked": {
      transform: "translateX(26px)",
      "& + .MuiSwitch-track": {
        backgroundColor: "#e0e0e0",
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
    boxShadow: "none",
  },
  "& .MuiSwitch-track": {
    borderRadius: 34 / 2,
    backgroundColor: "#1A1A1A",
    opacity: 1,
    boxSizing: "border-box",
  },
}));

type ToggleProps = {
  uncheckedLabel: React.ReactNode;
  checkedLabel: React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Toggle({
  uncheckedLabel,
  checkedLabel,
  onChange,
}: ToggleProps) {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    if (!onChange) return;
    onChange(event);
  };

  return (
    <FormControlLabel
      className={`toggle flex gap-2 ${checked ? "text-light-100" : "text-dark-100"}`}
      control={
        <CustomSwitch
          checked={checked}
          onChange={handleChange}
        />
      }
      label={checked ? checkedLabel : uncheckedLabel}
    />
  );
}
