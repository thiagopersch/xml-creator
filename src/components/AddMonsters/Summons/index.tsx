import { Box, TextField } from "@mui/material";
import { useState } from "react";

const Summons = () => {
  const [monster, setMonster] = useState({
    summonsName: "",
    summonsInterval: 0,
    summonsChance: 0,
    summonsQtdMax: 0,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setMonster((prevMonster) => ({
      ...prevMonster,
      [name]: value,
    }));
  };

  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setMonster((prevMonster) => ({
      ...prevMonster,
      [name]: Number(value),
    }));
  };

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gap: "0.5rem",
      }}
    >
      <TextField
        type="text"
        name="summonsName"
        label="Summons Name"
        variant="filled"
        value={monster.summonsName}
        onChange={handleChange}
        required
        fullWidth
      />
      <TextField
        type="number"
        name="summonsInterval"
        label="Summons Interval"
        variant="filled"
        value={monster.summonsInterval}
        onChange={handleNumberChange}
        required
        fullWidth
      />
      <TextField
        type="number"
        name="summonsChance"
        label="Summons Chance"
        variant="filled"
        value={monster.summonsChance}
        onChange={handleNumberChange}
        required
        fullWidth
      />
      <TextField
        type="number"
        name="summonsQtdMax"
        label="Summons Qtd Max"
        variant="filled"
        value={monster.summonsQtdMax}
        onChange={handleNumberChange}
        required
        fullWidth
      />
    </Box>
  );
};

export default Summons;
