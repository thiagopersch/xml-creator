import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";

type DataMonsterBasics = {
  monsters: Dispatch<SetStateAction<any>>;
};

const Basics = ({ monsters }: DataMonsterBasics) => {
  const [monster, setMonster] = useState({
    name: "",
    description: "",
    race: "",
    experience: 0,
    speed: 0,
    heathMin: 0,
    heathMax: 0,
  });
  const [race, setRace] = useState(monster.race);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setMonster((prevMonster) => ({
      ...prevMonster,
      [name]: value,
    }));
  };

  const handleChangeRace = (event: SelectChangeEvent) => {
    setRace(event.target.value as string);
    setMonster((prevMonster) => ({ ...prevMonster, race: event.target.value }));
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
          value={monster.name}
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
            value={race}
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
          value={monster.experience}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          type="number"
          name="speed"
          label="Speed"
          variant="filled"
          value={monster.speed}
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
          value={monster.heathMin}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          type="number"
          name="heathMax"
          label="Health Max"
          variant="filled"
          value={monster.heathMax}
          onChange={handleChange}
          required
          fullWidth
        />
      </Box>
    </>
  );
};

export default Basics;
