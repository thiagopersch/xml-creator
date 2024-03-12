"use client";

import useGenerateXML from "@/hooks/useGenerateXML";
import { Editor } from "@monaco-editor/react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const AddMonsters = () => {
  const [xmlString, setXmlString] = useState("");
  const [monster, setMonster] = useState({
    name: "",
    description: "",
    race: "",
    experience: 0,
    speed: 0,
    heath: { min: 0, max: 0 },
    looktype: {
      type: 0,
      head: 0,
      body: 0,
      legs: 0,
      feet: 0,
      addons: 0,
      typeex: 0,
      corpse: 0,
    },
    isAttack: false,
    attack: {
      name: "",
      interval: 0,
      minValueAttack: 0,
      maxValueAttack: 0,
    },
    immunities: {
      physical: 0,
      energy: 0,
      fire: 0,
      poison: 0,
      earth: 0,
      ice: 0,
      holy: 0,
      death: 0,
      drown: 0,
      lifedrain: 0,
      manadrain: 0,
      outfit: 0,
      drunk: 0,
      invisible: 0,
      paralyze: 0,
    },
    isDefenses: false,
    elements: {
      firePercent: 0,
      energyPercent: 0,
      icePercent: 0,
      poisonPercent: 0,
      holyPercent: 0,
      deathPercent: 0,
      drownPercent: 0,
      earthPercent: 0,
      physicalPercent: 0,
      lifedrainPercent: 0,
      manadrainPercent: 0,
      healingPercent: 0,
      undefinedPercent: 0,
    },
    isSummons: false,
    summons: {
      name: "",
      interval: 0,
      chance: 0,
      qtdMax: 0,
    },
    isVoices: false,
    voices: {
      message: "",
    },
    isLoot: false,
    loot: {
      name: "",
      isCountMax: false,
      countmax: 0,
      chance: 0,
    },
  });

  const [race, setRace] = useState(monster.race);

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

  const handleChangeRace = (event: SelectChangeEvent) => {
    setRace(event.target.value as string);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = {
      ...monster,
      description: monster.name.toLowerCase(),
      heath: {
        min: monster.heath.min,
        max: monster.heath.max,
      },
      attack: {
        name: monster.attack.name,
        interval: monster.attack.interval,
        minValueAttack: monster.attack.minValueAttack,
        maxValueAttack: monster.attack.maxValueAttack,
      },
      immunities: {
        physical: monster.immunities.physical,
        energy: monster.immunities.energy,
        fire: monster.immunities.fire,
        poison: monster.immunities.poison,
        earth: monster.immunities.earth,
        ice: monster.immunities.ice,
        holy: monster.immunities.holy,
        death: monster.immunities.death,
        drown: monster.immunities.drown,
        lifedrain: monster.immunities.lifedrain,
        manadrain: monster.immunities.manadrain,
        outfit: monster.immunities.outfit,
        drunk: monster.immunities.drunk,
        invisible: monster.immunities.invisible,
        paralyze: monster.immunities.paralyze,
      },
      elements: {
        firePercent: monster.elements.firePercent,
        energyPercent: monster.elements.energyPercent,
        icePercent: monster.elements.icePercent,
        poisonPercent: monster.elements.poisonPercent,
        holyPercent: monster.elements.holyPercent,
        deathPercent: monster.elements.deathPercent,
        drownPercent: monster.elements.drownPercent,
        earthPercent: monster.elements.earthPercent,
        physicalPercent: monster.elements.physicalPercent,
        lifedrainPercent: monster.elements.lifedrainPercent,
        manadrainPercent: monster.elements.manadrainPercent,
        healingPercent: monster.elements.healingPercent,
        undefinedPercent: monster.elements.undefinedPercent,
      },
      summons: {
        name: monster.summons.name,
        interval: monster.summons.interval,
        chance: monster.summons.chance,
        qtdMax: monster.summons.qtdMax,
      },
      loot: {
        name: monster.loot.name,
        isCountMax: monster.loot.isCountMax,
        countmax: monster.loot.countmax,
        chance: monster.loot.chance,
      },
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [generatedXmlString] = useGenerateXML(data);
    setXmlString(generatedXmlString);
  };

  return (
    <>
      <Box
        sx={{
          padding: "2rem",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Typography
            variant="h4"
            color="primary.light"
            fontWeight="bold"
            gutterBottom
          >
            Dados do monster
          </Typography>
          <Box
            display="grid"
            gridTemplateColumns="1fr 1fr 1fr 1fr 1fr 1fr"
            gap="1rem"
            margin="1rem 0"
            justifyContent="start"
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
              onChange={handleNumberChange}
              fullWidth
            />
            <TextField
              type="number"
              name="speed"
              label="Speed"
              variant="filled"
              value={monster.speed}
              onChange={handleNumberChange}
              fullWidth
            />
            <TextField
              type="number"
              name="heath.min"
              label="Health Min"
              variant="filled"
              value={monster.heath.min}
              onChange={handleNumberChange}
              fullWidth
            />
            <TextField
              type="number"
              name="heath.max"
              label="Health Max"
              variant="filled"
              value={monster.heath.max}
              onChange={handleNumberChange}
              fullWidth
            />
          </Box>
          {/* Looktypes */}
          <Box
            display="grid"
            gridTemplateColumns="1fr 1fr 1fr 1fr"
            gap="1rem"
            margin="1rem 0"
            justifyContent="start"
          >
            <TextField
              type="number"
              name="looktype.type"
              label="Looktype"
              variant="filled"
              value={monster.looktype.type}
              onChange={handleNumberChange}
              fullWidth
            />
            <TextField
              type="number"
              name="looktype.head"
              label="Looktype Head"
              variant="filled"
              value={monster.looktype.head}
              onChange={handleNumberChange}
              fullWidth
            />
            <TextField
              type="number"
              name="looktype.body"
              label="Looktype Body"
              variant="filled"
              value={monster.looktype.body}
              onChange={handleNumberChange}
              fullWidth
            />
            <TextField
              type="number"
              name="looktype.legs"
              label="Looktype Legs"
              variant="filled"
              value={monster.looktype.legs}
              onChange={handleNumberChange}
              fullWidth
            />
            <TextField
              type="number"
              name="looktype.feet"
              label="Looktype Feet"
              variant="filled"
              value={monster.looktype.feet}
              onChange={handleNumberChange}
              fullWidth
            />
            <TextField
              type="number"
              name="looktype.addons"
              label="Looktype Addons"
              variant="filled"
              value={monster.looktype.addons}
              onChange={handleNumberChange}
              fullWidth
            />
            <TextField
              type="number"
              name="looktype.typeex"
              label="Looktype Typeex"
              variant="filled"
              value={monster.looktype.typeex}
              onChange={handleNumberChange}
              fullWidth
            />
            <TextField
              type="number"
              name="looktype.corpse"
              label="Looktype Corpse"
              variant="filled"
              value={monster.looktype.corpse}
              onChange={handleNumberChange}
              fullWidth
            />
          </Box>
          {/* Attacks */}
          <Box
            display="grid"
            gridTemplateColumns="1fr 1fr 1fr"
            gap="1rem"
            margin="1rem 0"
            justifyContent="start"
          >
            <TextField
              type="number"
              name="attack.interval"
              label="Attack Interval"
              variant="filled"
              value={monster.attack.interval}
              onChange={handleNumberChange}
              fullWidth
            />
            <TextField
              type="number"
              name="attack.minValueAttack"
              label="Attack Min Value"
              variant="filled"
              value={monster.attack.minValueAttack}
              onChange={handleNumberChange}
              fullWidth
            />
            <TextField
              type="number"
              name="attack.maxValueAttack"
              label="Attack Max Value"
              variant="filled"
              value={monster.attack.maxValueAttack}
              onChange={handleNumberChange}
              fullWidth
            />
          </Box>
          {/* Immunities */}
          {/* <Box
            display="grid"
            gridTemplateColumns="1fr 1fr 1fr 1fr 1fr"
            gap="1rem"
            margin="1rem 0"
            justifyContent="start"
          >
            <TextField
              type="number"
              name="immunities.physical"
              label="Immunities Physical"
              variant="filled"
              value={monster.immunities.physical}
              onChange={handleNumberChange}
              fullWidth
            />
            <TextField
              type="number"
              name="immunities.energy"
              label="Immunities Energy"
              variant="filled"
              value={monster.immunities.energy}
              onChange={handleNumberChange}
              fullWidth
            />
            <TextField
              type="number"
              name="immunities.fire"
              label="Immunities Fire"
              variant="filled"
              value={monster.immunities.fire}
              onChange={handleNumberChange}
              fullWidth
            />
            <TextField
              type="number"
              name="immunities.poison"
              label="Immunities Poison"
              variant="filled"
              value={monster.immunities.poison}
              onChange={handleNumberChange}
              fullWidth
            />
            <TextField
              type="number"
              name="immunities.earth"
              label="Immunities Earth"
              variant="filled"
              value={monster.immunities.earth}
              onChange={handleNumberChange}
              fullWidth
            />
            <TextField
              type="number"
              name="immunities.ice"
              label="Immunities Ice"
              variant="filled"
              value={monster.immunities.ice}
              onChange={handleNumberChange}
              fullWidth
            />
            <TextField
              type="number"
              name="immunities.holy"
              label="Immunities Holy"
              variant="filled"
              value={monster.immunities.holy}
              onChange={handleNumberChange}
              fullWidth
            />
            <TextField
              type="number"
              name="immunities.death"
              label="Immunities Death"
              variant="filled"
              value={monster.immunities.death}
              onChange={handleNumberChange}
              fullWidth
            />
            <TextField
              type="number"
              name="immunities.drown"
              label="Immunities Drown"
              variant="filled"
              value={monster.immunities.drown}
              onChange={handleNumberChange}
              fullWidth
            />
            <TextField
              type="number"
              name="immunities.lifedrain"
              label="Immunities Lifedrain"
              variant="filled"
              value={monster.immunities.lifedrain}
              onChange={handleNumberChange}
              fullWidth
            />
            <TextField
              type="number"
              name="immunities.manadrain"
              label="Immunities Manadrain"
              variant="filled"
              value={monster.immunities.manadrain}
              onChange={handleNumberChange}
              fullWidth
            />
            <TextField
              type="number"
              name="immunities.outfit"
              label="Immunities Outfit"
              variant="filled"
              value={monster.immunities.outfit}
              onChange={handleNumberChange}
              fullWidth
            />
            <TextField
              type="number"
              name="immunities.drunk"
              label="Immunities Drunk"
              variant="filled"
              value={monster.immunities.drunk}
              onChange={handleNumberChange}
              fullWidth
            />
            <TextField
              type="number"
              name="immunities.invisible"
              label="Immunities Invisible"
              variant="filled"
              value={monster.immunities.invisible}
              onChange={handleNumberChange}
              fullWidth
            />
            <TextField
              type="number"
              name="immunities.paralyze"
              label="Immunities Paralyze"
              variant="filled"
              value={monster.immunities.paralyze}
              onChange={handleNumberChange}
              fullWidth
            />
          </Box> */}
          {/* Elements */}
          {/* <Box
            display="grid"
            gridTemplateColumns="1fr 1fr 1fr 1fr 1fr"
            gap="1rem"
            margin="1rem 0"
            justifyContent="start"
          >
            <TextField
              type="number"
              name="elements.firePercent"
              label="Elements Fire Percent"
              variant="filled"
              value={monster.elements.firePercent}
              onChange={handleNumberChange}
              fullWidth
            />
            <TextField
              type="number"
              name="elements.energyPercent"
              label="Elements Energy Percent"
              variant="filled"
              value={monster.elements.energyPercent}
              onChange={handleNumberChange}
              fullWidth
            />
            <TextField
              type="number"
              name="elements.icePercent"
              label="Elements Ice Percent"
              variant="filled"
              value={monster.elements.icePercent}
              onChange={handleNumberChange}
              fullWidth
            />
            <TextField
              type="number"
              name="elements.poisonPercent"
              label="Elements Poison Percent"
              variant="filled"
              value={monster.elements.poisonPercent}
              onChange={handleNumberChange}
              fullWidth
            />
            <TextField
              type="number"
              name="elements.holyPercent"
              label="Elements Holy Percent"
              variant="filled"
              value={monster.elements.holyPercent}
              onChange={handleNumberChange}
              fullWidth
            />
            <TextField
              type="number"
              name="elements.deathPercent"
              label="Elements Death Percent"
              variant="filled"
              value={monster.elements.deathPercent}
              onChange={handleNumberChange}
              fullWidth
            />
            <TextField
              type="number"
              name="elements.drownPercent"
              label="Elements Drown Percent"
              variant="filled"
              value={monster.elements.drownPercent}
              onChange={handleNumberChange}
              fullWidth
            />
            <TextField
              type="number"
              name="elements.earthPercent"
              label="Elements Earth Percent"
              variant="filled"
              value={monster.elements.earthPercent}
              onChange={handleNumberChange}
              fullWidth
            />
            <TextField
              type="number"
              name="elements.physicalPercent"
              label="Elements Physical Percent"
              variant="filled"
              value={monster.elements.physicalPercent}
              onChange={handleNumberChange}
              fullWidth
            />
            <TextField
              type="number"
              name="elements.lifedrainPercent"
              label="Elements Lifedrain Percent"
              variant="filled"
              value={monster.elements.lifedrainPercent}
              onChange={handleNumberChange}
              fullWidth
            />
            <TextField
              type="number"
              name="elements.manadrainPercent"
              label="Elements Manadrain Percent"
              variant="filled"
              value={monster.elements.manadrainPercent}
              onChange={handleNumberChange}
              fullWidth
            />
            <TextField
              type="number"
              name="elements.healingPercent"
              label="Elements Healing Percent"
              variant="filled"
              value={monster.elements.healingPercent}
              onChange={handleNumberChange}
              fullWidth
            />
            <TextField
              type="number"
              name="elements.undefinedPercent"
              label="Elements Undefined Percent"
              variant="filled"
              value={monster.elements.undefinedPercent}
              onChange={handleNumberChange}
              fullWidth
            />
          </Box> */}
          {/* Summons */}
          <Box
            display="grid"
            gridTemplateColumns="1fr 1fr 1fr"
            gap="1rem"
            margin="1rem 0"
            justifyContent="start"
          >
            <TextField
              type="number"
              name="summons.interval"
              label="Summons Interval"
              variant="filled"
              value={monster.summons.interval}
              onChange={handleNumberChange}
              fullWidth
            />
            <TextField
              type="number"
              name="summons.chance"
              label="Summons Chance"
              variant="filled"
              value={monster.summons.chance}
              onChange={handleNumberChange}
              fullWidth
            />
            <TextField
              type="number"
              name="summons.qtdMax"
              label="Summons Qtd Max"
              variant="filled"
              value={monster.summons.qtdMax}
              onChange={handleNumberChange}
              fullWidth
            />
          </Box>
          {/* Loots */}
          <Box
            display="grid"
            gridTemplateColumns="1fr 1fr 1fr"
            gap="1rem"
            margin="1rem 0"
            justifyContent="start"
          >
            <TextField
              type="number"
              name="loot.countmax"
              label="Loot Count Max"
              variant="filled"
              value={monster.loot.countmax}
              onChange={handleNumberChange}
              fullWidth
            />
            <TextField
              type="number"
              name="loot.chance"
              label="Loot Chance"
              variant="filled"
              value={monster.loot.chance}
              onChange={handleNumberChange}
              fullWidth
            />
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            margin="2rem 0"
            width="100%"
            maxWidth="100%"
          >
            <Button
              type="submit"
              variant="contained"
              sx={{ width: "30vw", height: "3rem" }}
            >
              Gerar XML
            </Button>
          </Box>
        </form>
      </Box>

      {xmlString && (
        <Box
          sx={{
            padding: "0 1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <Editor
            value={xmlString}
            height="100%"
            defaultLanguage="xml"
            theme="vs-dark"
            loading="Gerando..."
            width="60%"
          />
        </Box>
      )}
    </>
  );
};

export default AddMonsters;
