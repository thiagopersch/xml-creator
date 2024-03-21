import { TextField } from "@mui/material";
import { useState } from "react";

const Looktypes = () => {
  const [monster, setMonster] = useState({
    looktypeType: 0,
    looktypeHead: 0,
    looktypeBody: 0,
    looktypeLegs: 0,
    looktypeFeet: 0,
    looktypeAddons: 0,
    looktypeTypeEx: 0,
    looktypeCorpse: 0,
  });

  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setMonster((prevMonster) => ({
      ...prevMonster,
      [name]: Number(value),
    }));
  };

  return (
    <>
      <TextField
        type="number"
        name="looktypeType"
        label="Looktype"
        variant="filled"
        value={monster.looktypeType}
        onChange={handleNumberChange}
        required
        fullWidth
      />
      <TextField
        type="number"
        name="looktypeHead"
        label="Looktype Head"
        variant="filled"
        value={monster.looktypeHead}
        onChange={handleNumberChange}
        required
        fullWidth
      />
      <TextField
        type="number"
        name="looktypeBody"
        label="Looktype Body"
        variant="filled"
        value={monster.looktypeBody}
        onChange={handleNumberChange}
        required
        fullWidth
      />
      <TextField
        type="number"
        name="looktypeLegs"
        label="Looktype Legs"
        variant="filled"
        value={monster.looktypeLegs}
        onChange={handleNumberChange}
        required
        fullWidth
      />
      <TextField
        type="number"
        name="looktypeFeet"
        label="Looktype Feet"
        variant="filled"
        value={monster.looktypeFeet}
        onChange={handleNumberChange}
        required
        fullWidth
      />
      <TextField
        type="number"
        name="looktypeAddons"
        label="Looktype Addons"
        variant="filled"
        value={monster.looktypeAddons}
        onChange={handleNumberChange}
        required
        fullWidth
      />
      <TextField
        type="number"
        name="looktypeTypeEx"
        label="Looktype Typeex"
        variant="filled"
        value={monster.looktypeTypeEx}
        onChange={handleNumberChange}
        required
        fullWidth
      />
      <TextField
        type="number"
        name="looktypeCorpse"
        label="Looktype Corpse"
        variant="filled"
        value={monster.looktypeCorpse}
        onChange={handleNumberChange}
        required
        fullWidth
      />
    </>
  );
};

export default Looktypes;
