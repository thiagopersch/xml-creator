import { Box, TextField } from "@mui/material";
import { useState } from "react";

const Elements = () => {
  const [monster, setMonster] = useState({
    elementsFirePercent: 0,
    elementsEnergyPercent: 0,
    elementsIcePercent: 0,
    elementsPoisonPercent: 0,
    elementsHolyPercent: 0,
    elementsDeathPercent: 0,
    elementsDrownPercent: 0,
    elementsEarthPercent: 0,
    elementsPhysicalPercent: 0,
    elementsLifedrainPercent: 0,
    elementsManadrainPercent: 0,
    elementsHealingPercent: 0,
    elementsUndefinedPercent: 0,
  });

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
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
        gap: "0.5rem",
      }}
    >
      <TextField
        type="number"
        name="elementsFirePercent"
        label="Elements Fire Percent"
        variant="filled"
        value={monster.elementsFirePercent}
        onChange={handleNumberChange}
        required
        fullWidth
      />
      <TextField
        type="number"
        name="elementsEnergyPercent"
        label="Elements Energy Percent"
        variant="filled"
        value={monster.elementsEnergyPercent}
        onChange={handleNumberChange}
        required
        fullWidth
      />
      <TextField
        type="number"
        name="elementsIcePercent"
        label="Elements Ice Percent"
        variant="filled"
        value={monster.elementsIcePercent}
        onChange={handleNumberChange}
        required
        fullWidth
      />
      <TextField
        type="number"
        name="elementsPoisonPercent"
        label="Elements Poison Percent"
        variant="filled"
        value={monster.elementsPoisonPercent}
        onChange={handleNumberChange}
        required
        fullWidth
      />
      <TextField
        type="number"
        name="elementsHolyPercent"
        label="Elements Holy Percent"
        variant="filled"
        value={monster.elementsHolyPercent}
        onChange={handleNumberChange}
        required
        fullWidth
      />
      <TextField
        type="number"
        name="elementsDeathPercent"
        label="Elements Death Percent"
        variant="filled"
        value={monster.elementsDeathPercent}
        onChange={handleNumberChange}
        required
        fullWidth
      />
      <TextField
        type="number"
        name="elementsDrownPercent"
        label="Elements Drown Percent"
        variant="filled"
        value={monster.elementsDrownPercent}
        onChange={handleNumberChange}
        required
        fullWidth
      />
      <TextField
        type="number"
        name="elementsEarthPercent"
        label="Elements Earth Percent"
        variant="filled"
        value={monster.elementsEarthPercent}
        onChange={handleNumberChange}
        required
        fullWidth
      />
      <TextField
        type="number"
        name="elementsPhysicalPercent"
        label="Elements Physical Percent"
        variant="filled"
        value={monster.elementsPhysicalPercent}
        onChange={handleNumberChange}
        required
        fullWidth
      />
      <TextField
        type="number"
        name="elementsLifedrainPercent"
        label="Elements Lifedrain Percent"
        variant="filled"
        value={monster.elementsLifedrainPercent}
        onChange={handleNumberChange}
        required
        fullWidth
      />
      <TextField
        type="number"
        name="elementsManadrainPercent"
        label="Elements Manadrain Percent"
        variant="filled"
        value={monster.elementsManadrainPercent}
        onChange={handleNumberChange}
        required
        fullWidth
      />
      <TextField
        type="number"
        name="elementsHealingPercent"
        label="Elements Healing Percent"
        variant="filled"
        value={monster.elementsHealingPercent}
        onChange={handleNumberChange}
        required
        fullWidth
      />
      <TextField
        type="number"
        name="elementsUndefinedPercent"
        label="Elements Undefined Percent"
        variant="filled"
        value={monster.elementsUndefinedPercent}
        onChange={handleNumberChange}
        required
        fullWidth
      />
    </Box>
  );
};

export default Elements;
