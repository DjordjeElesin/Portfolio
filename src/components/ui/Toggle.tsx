import React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Moon, Sun } from '@phosphor-icons/react';

const CustomSwitch = styled(Switch)(({ theme }) => ({
  width: 60,   
  height: 34,  
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  '& .MuiSwitch-switchBase': {
    padding: 3,  
    '&.Mui-checked': {
      transform: 'translateX(26px)', 
      '& + .MuiSwitch-track': {
        backgroundColor: '#e0e0e0', 
      },
      '& .MuiSwitch-thumb': {
        backgroundColor: '#cacaca', 
      },
    },
  },
  '& .MuiSwitch-thumb': {
    width: 28,  
    height: 28, 
    backgroundColor: '#666666',
    boxShadow: 'none',  
  },
  '& .MuiSwitch-track': {
    borderRadius: 34 / 2, 
    backgroundColor: '#1A1A1A', 
    opacity: 1,
    boxSizing: 'border-box',  
  },
}));

export default function Toggle({onChange}: {onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void}) {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    if(!onChange) return 
    onChange(event)
  };

  return (
    <FormControlLabel className={`flex gap-2 ${checked ? 'text-light-100' : 'text-dark-100'}`}
      control={
        <CustomSwitch
          checked={checked}
          onChange={handleChange}
        />
      }
      label={checked ?  <Sun size={20}/>  : <Moon size={20}/>}
    />
  );
}
