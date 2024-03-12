import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem, { MenuItemProps } from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import * as React from "react";

type SelectRacesProps = {
  name: string;
  label: string;
  value?: string[];
  menuItems: MenuItemProps[];
};

const SelectRaces = ({ label, name, value, menuItems }: SelectRacesProps) => {
  const [race, setRace] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setRace(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id={label}>{label}</InputLabel>
        <Select
          labelId={label}
          id={label}
          value={race}
          name={name}
          label={label}
          variant="filled"
          onChange={handleChange}
        >
          {menuItems.map(({ value, children, ...props }, index) => (
            <MenuItem key={index} value={value} {...props}>
              {children}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectRaces;
