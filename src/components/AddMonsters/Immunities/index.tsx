import { Box, TextField } from "@mui/material";
import { useState } from "react";

const Immunities = () => {
  const [monster, setMonster] = useState({
    immunitiesPhysical: 0,
    immunitiesEnergy: 0,
    immunitiesFire: 0,
    immunitiesPoison: 0,
    immunitiesEarth: 0,
    immunitiesIce: 0,
    immunitiesHoly: 0,
    immunitiesDeath: 0,
    immunitiesDrown: 0,
    immunitiesLifedrain: 0,
    immunitiesManadrain: 0,
    immunitiesOutfit: 0,
    immunitiesDrunk: 0,
    immunitiesInvisible: 0,
    immunitiesParalyze: 0,
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
        name="immunitiesPhysical"
        label="Immunities Physical"
        variant="filled"
        value={monster.immunitiesPhysical}
        onChange={handleNumberChange}
        required
        fullWidth
      />
      <TextField
        type="number"
        name="immunitiesEnergy"
        label="Immunities Energy"
        variant="filled"
        value={monster.immunitiesEnergy}
        onChange={handleNumberChange}
        required
        fullWidth
      />
      <TextField
        type="number"
        name="immunitiesFire"
        label="Immunities Fire"
        variant="filled"
        value={monster.immunitiesFire}
        onChange={handleNumberChange}
        required
        fullWidth
      />
      <TextField
        type="number"
        name="immunitiesPoison"
        label="Immunities Poison"
        variant="filled"
        value={monster.immunitiesPoison}
        onChange={handleNumberChange}
        required
        fullWidth
      />
      <TextField
        type="number"
        name="immunitiesEarth"
        label="Immunities Earth"
        variant="filled"
        value={monster.immunitiesEarth}
        onChange={handleNumberChange}
        required
        fullWidth
      />
      <TextField
        type="number"
        name="immunitiesIce"
        label="Immunities Ice"
        variant="filled"
        value={monster.immunitiesIce}
        onChange={handleNumberChange}
        required
        fullWidth
      />
      <TextField
        type="number"
        name="immunitiesHoly"
        label="Immunities Holy"
        variant="filled"
        value={monster.immunitiesHoly}
        onChange={handleNumberChange}
        required
        fullWidth
      />
      <TextField
        type="number"
        name="immunitiesDeath"
        label="Immunities Death"
        variant="filled"
        value={monster.immunitiesDeath}
        onChange={handleNumberChange}
        required
        fullWidth
      />
      <TextField
        type="number"
        name="immunitiesDrown"
        label="Immunities Drown"
        variant="filled"
        value={monster.immunitiesDrown}
        onChange={handleNumberChange}
        required
        fullWidth
      />
      <TextField
        type="number"
        name="immunitiesLifedrain"
        label="Immunities Lifedrain"
        variant="filled"
        value={monster.immunitiesLifedrain}
        onChange={handleNumberChange}
        required
        fullWidth
      />
      <TextField
        type="number"
        name="immunitiesManadrain"
        label="Immunities Manadrain"
        variant="filled"
        value={monster.immunitiesManadrain}
        onChange={handleNumberChange}
        required
        fullWidth
      />
      <TextField
        type="number"
        name="immunitiesOutfit"
        label="Immunities Outfit"
        variant="filled"
        value={monster.immunitiesOutfit}
        onChange={handleNumberChange}
        required
        fullWidth
      />
      <TextField
        type="number"
        name="immunitiesDrunk"
        label="Immunities Drunk"
        variant="filled"
        value={monster.immunitiesDrunk}
        onChange={handleNumberChange}
        required
        fullWidth
      />
      <TextField
        type="number"
        name="immunitiesInvisible"
        label="Immunities Invisible"
        variant="filled"
        value={monster.immunitiesInvisible}
        onChange={handleNumberChange}
        required
        fullWidth
      />
      <TextField
        type="number"
        name="immunitiesParalyze"
        label="Immunities Paralyze"
        variant="filled"
        value={monster.immunitiesParalyze}
        onChange={handleNumberChange}
        required
        fullWidth
      />
    </Box>
  );
};

export default Immunities;
