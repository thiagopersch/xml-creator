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
import Attacks from "./Attacks";
import Elements from "./Elements";
import Immunities from "./Immunities";
import Loots from "./Loots";
import Summons from "./Summons";

const AddMonsters = () => {
  const [xmlString, setXmlString] = useState("");
  const [monster, setMonster] = useState({
    name: "",
    description: "",
    race: "",
    experience: 0,
    speed: 0,
    heathMin: 0,
    heathMax: 0,
    looktypeType: 0,
    looktypeHead: 0,
    looktypeBody: 0,
    looktypeLegs: 0,
    looktypeFeet: 0,
    looktypeAddons: 0,
    looktypeTypeEx: 0,
    looktypeCorpse: 0,
    isAttack: false,
    attack: {
      name: "",
      interval: 0,
      minValueAttack: 0,
      maxValueAttack: 0,
    },
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
    isDefenses: false,
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
    isSummons: false,
    summonsName: "",
    summonsInterval: 0,
    summonsChance: 0,
    summonsQtdMax: 0,
    isVoices: false,
    voicesMessage: "",
    isLoot: false,
    loot: {
      name: "",
      isCountMax: false,
      countmax: 0,
      chance: 0,
    },
  });

  const [race, setRace] = useState(monster.race);
  const [attacks, setAttacks] = useState<any[]>([
    { name: "", interval: "", minValueAttack: "", maxValueAttack: "" },
  ]);
  const [loots, setLoots] = useState<any[]>([
    { name: "", isCountMax: false, countmax: 0, chance: 0 },
  ]);

  const handleAddAttack = () => {
    setAttacks((prevAttacks) => [
      ...prevAttacks,
      { name: "", interval: 0, minValueAttack: 0, maxValueAttack: 0 },
    ]);
  };

  const handleAddLoot = () => {
    setLoots((prevLoots) => [
      ...prevLoots,
      { name: "", isCountMax: false, countmax: 0, chance: 0 },
    ]);
  };

  const handleAttackChange = (index: number, updatedAttack: any) => {
    setAttacks((prevAttacks) =>
      prevAttacks.map((attack, i) => (i === index ? updatedAttack : attack))
    );
  };

  const handleRemoveAttack = (index: number) => {
    setAttacks((prevAttacks) => prevAttacks.filter((_, i) => i !== index));
  };

  const handleLootChange = (index: number, updatedLoot: any) => {
    setLoots((prevLoots) =>
      prevLoots.map((loot, i) => (i === index ? updatedLoot : loot))
    );
  };

  const handleRemoveLoot = (index: number) => {
    setLoots((prevLoots) => prevLoots.filter((_, i) => i !== index));
  };

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
    setMonster((prevMonster) => ({ ...prevMonster, race: event.target.value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = {
      ...monster,
      description: monster.name.toLowerCase(),
      immunities: {
        physical: monster.immunitiesPhysical,
        energy: monster.immunitiesEnergy,
        fire: monster.immunitiesFire,
        poison: monster.immunitiesPoison,
        earth: monster.immunitiesEarth,
        ice: monster.immunitiesIce,
        holy: monster.immunitiesHoly,
        death: monster.immunitiesDeath,
        drown: monster.immunitiesDrown,
        lifedrain: monster.immunitiesLifedrain,
        manadrain: monster.immunitiesManadrain,
        outfit: monster.immunitiesOutfit,
        drunk: monster.immunitiesDrunk,
        invisible: monster.immunitiesInvisible,
        paralyze: monster.immunitiesParalyze,
      },
      elements: {
        firePercent: monster.elementsFirePercent,
        energyPercent: monster.elementsEnergyPercent,
        icePercent: monster.elementsIcePercent,
        poisonPercent: monster.elementsPoisonPercent,
        holyPercent: monster.elementsHolyPercent,
        deathPercent: monster.elementsDeathPercent,
        drownPercent: monster.elementsDrownPercent,
        earthPercent: monster.elementsEarthPercent,
        physicalPercent: monster.elementsPhysicalPercent,
        lifedrainPercent: monster.elementsLifedrainPercent,
        manadrainPercent: monster.elementsManadrainPercent,
        healingPercent: monster.elementsHealingPercent,
        undefinedPercent: monster.elementsUndefinedPercent,
      },
      summons: {
        name: monster.summonsName,
        interval: monster.summonsInterval,
        chance: monster.summonsChance,
        qtdMax: monster.summonsQtdMax,
      },
      voices: {
        message: monster.voicesMessage,
      },
      isLoot: loots.length > 0,
      loot: loots,
      isAttack: attacks.length > 0,
      attack: attacks,
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [generatedXmlString] = useGenerateXML({
      ...monster,
      ...data,
      attacks,
      loots: loots,
    });
    setXmlString(generatedXmlString);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Typography
          variant="h4"
          color="primary.light"
          fontWeight="bold"
          gutterBottom
        >
          Dados do monster
        </Typography>
        {/* Dados básicos */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "0.5rem",
            padding: "1rem 0",
          }}
        >
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
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
          }}
        >
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
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "0.5rem",
          }}
        >
          <Summons />
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0.5rem",
          }}
        >
          <Immunities />
          <Box>
            <Elements />
          </Box>
        </Box>
        {/* Attacks */}
        <Box
          display="flex"
          flexDirection="column"
          gap="1rem"
          margin="1rem 0"
          justifyContent="start"
        >
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <Typography variant="h5" color="primary.light" fontWeight="bold">
              Attacks
            </Typography>
            <Button variant="outlined" onClick={handleAddAttack}>
              Adicionar Attack
            </Button>
          </Box>
          {attacks.map((attack, index) => (
            <Attacks
              key={index}
              index={index}
              attack={attack}
              onAttackChange={handleAttackChange}
              onRemoveAttack={handleRemoveAttack}
            />
          ))}
        </Box>

        {/* Loots */}
        <Box
          display="flex"
          flexDirection="column"
          gap="1rem"
          margin="1rem 0"
          justifyContent="start"
        >
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <Typography variant="h5" color="primary.light" fontWeight="bold">
              Loots
            </Typography>
            <Button variant="outlined" onClick={handleAddLoot}>
              Adicionar Loot
            </Button>
          </Box>
          {loots.map((loot, index) => (
            <Loots
              key={index}
              index={index}
              loot={loot}
              onLootChange={handleLootChange}
              onRemoveLoot={handleRemoveLoot}
            />
          ))}
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
            height="90vh"
            defaultLanguage="xml"
            theme="vs-dark"
            loading="Gerando..."
            width="99%"
          />
        </Box>
      )}
    </>
  );
};

export default AddMonsters;
