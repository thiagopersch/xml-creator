/* eslint-disable react-hooks/rules-of-hooks */
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type DatamonstroBasics = {
  monstros: Dispatch<SetStateAction<any>>;
  monster: any;
};

const Basics = ({ monstros, monster }: DatamonstroBasics) => {
  const [monstro, setMonstro] = useState({
    name: "",
    description: "",
    race: "",
    experience: 0,
    speed: 0,
    heathMin: 0,
    heathMax: 0,
  });

  useEffect(() => {
    monstros(monstro);
  }, [monstro, monstros]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setMonstro((prevmonstro) => ({
      ...prevmonstro,
      [name]: value,
      description: value.toLowerCase(), // Atualizando a descrição com o nome do monstro em minúsculas
    }));
  };

  const handleChangeRace = (event: SelectChangeEvent) => {
    setMonstro((prevmonstro) => ({ ...prevmonstro, race: event.target.value }));
  };

  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gap: "0.5rem",
        }}
      >
        <TextField
          type="text"
          name="name"
          label="Nome do monstro"
          variant="filled"
          value={monstro.name}
          onChange={handleChange}
          required
          fullWidth
        />
        <FormControl fullWidth required>
          <InputLabel id="races" variant="filled">
            Raças
          </InputLabel>
          <Select
            labelId="races"
            id="race"
            value={monstro.race}
            variant="filled"
            onChange={handleChangeRace}
            required
            fullWidth
          >
            <MenuItem value="blood">blood</MenuItem>
            <MenuItem value="venom">venom</MenuItem>
            <MenuItem value="energy">energy</MenuItem>
            <MenuItem value="fire">fire</MenuItem>
            <MenuItem value="undead">undead</MenuItem>
          </Select>
        </FormControl>
        <TextField
          type="number"
          name="experience"
          label="Experience"
          variant="filled"
          value={monstro.experience}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          type="number"
          name="speed"
          label="Speed"
          variant="filled"
          value={monstro.speed}
          onChange={handleChange}
          fullWidth
          required
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "1rem",
        }}
      >
        <TextField
          type="number"
          name="heathMin"
          label="Health Min"
          variant="filled"
          value={monstro.heathMin}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          type="number"
          name="heathMax"
          label="Health Max"
          variant="filled"
          value={monstro.heathMax}
          onChange={handleChange}
          required
          fullWidth
        />
      </Box>
    </>
  );
};

export default Basics;
