"use client";

import useGenerateXML from "@/hooks/useGenerateXML";
import { Editor } from "@monaco-editor/react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Attacks from "./Attacks";
import Loots from "./Loots";
import Summons from "./Summons";

export type DataMonsterBasics = {
  name?: string;
  description?: string;
  race?: string;
  experience?: number;
  speed?: number;
  heath: {
    min?: number;
    max?: number;
  };
  looktype: {
    type: number;
    head: number;
    body: number;
    legs: number;
    feet: number;
    addons: number;
    typeex: number;
    corpse: number;
  };
  isAttack?: boolean;
  attack: {
    name?: string;
    interval?: number;
    minValueAttack?: number;
    maxValueAttack?: number;
  }[];
  isImmunities?: boolean;
  immunities?: {
    physical?: number;
    energy?: number;
    fire?: number;
    poison?: number;
    earth?: number;
    ice?: number;
    holy?: number;
    death?: number;
    drown?: number;
    lifedrain?: number;
    manadrain?: number;
    outfit?: number;
    drunk?: number;
    invisible?: number;
    paralyze?: number;
  };
  isDefenses?: boolean;
  isElements?: boolean;
  elements?: {
    firePercent?: number;
    energyPercent?: number;
    icePercent?: number;
    poisonPercent?: number;
    holyPercent?: number;
    deathPercent?: number;
    drownPercent?: number;
    earthPercent?: number;
    physicalPercent?: number;
    lifedrainPercent?: number;
    manadrainPercent?: number;
    healingPercent?: number;
    undefinedPercent?: number;
  };
  isSummons?: boolean;
  summons: {
    name?: string;
    interval?: number;
    chance?: number;
    qtdMax?: number;
  }[];
  isVoices?: boolean;
  voices: {
    message?: string;
  };
  isLoot?: boolean;
  loot: {
    name?: string;
    isCountMax?: boolean;
    countmax?: number;
    chance?: number;
  }[];
};

const AddMonsters = () => {
  const [monsterData, setMonsterData] = useState<DataMonsterBasics>({
    name: "",
    description: "",
    race: "",
    experience: 0,
    speed: 0,
    heath: {
      min: 0,
      max: 0,
    },
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
    attack: [
      {
        name: "",
        interval: 0,
        minValueAttack: 0,
        maxValueAttack: 0,
      },
    ],
    isImmunities: false,
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
    isElements: false,
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
    summons: [
      {
        name: "",
        interval: 0,
        chance: 0,
        qtdMax: 0,
      },
    ],
    isVoices: false,
    voices: {
      message: "",
    },
    isLoot: false,
    loot: [
      {
        name: "",
        isCountMax: false,
        countmax: 0,
        chance: 0,
      },
    ],
  });

  useEffect(() => {
    setMonsterData((prevmonstro) => ({
      ...prevmonstro,
      description: prevmonstro.name ? prevmonstro.name.toLowerCase() : "",
    }));
  }, [monsterData.name]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setMonsterData((prevmonstro) => ({
      ...prevmonstro,
      [name]: value,
    }));
  };

  const handleChangeRace = (event: SelectChangeEvent) => {
    setMonsterData((prevmonstro) => ({
      ...prevmonstro,
      race: event.target.value,
    }));
  };

  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setMonsterData((prevmonstro) => ({
      ...prevmonstro,
      [name]: Number(value),
      heath: {
        ...prevmonstro.heath,
        [name]: Number(value),
      },
      looktype: {
        ...prevmonstro.looktype,
        [name]: Number(value),
      },
      immunities: {
        ...prevmonstro.immunities,
        [name]: Number(value),
      },
      elements: {
        ...prevmonstro.elements,
        [name]: Number(value),
      },
    }));
  };

  const [xmlString, setXmlString] = useState<string>("");
  const [hasImmunities, setHasImmunities] = useState<boolean>(
    !!monsterData?.isImmunities
  );

  const [hasElements, setHasElements] = useState<boolean>(
    !!monsterData?.isElements
  );

  const [hasIsDefenses, setHasIsDefenses] = useState<boolean>(
    !!monsterData.isDefenses
  );

  const [hasIsSummons, setHasIsSummons] = useState<boolean>(
    !!monsterData.isSummons
  );

  const [hasIsAttack, setHasIsAttack] = useState<boolean>(
    !!monsterData.isAttack
  );

  const [hasIsLoot, setHasIsLoot] = useState<boolean>(!!monsterData.isLoot);

  const [summons, setSummons] = useState<DataMonsterBasics[]>(
    monsterData?.summons?.map((summon: any) => ({ ...summon })) || [
      {
        name: "",
        interval: 0,
        chance: 0,
        qtdMax: 0,
      },
    ]
  );

  const [attacks, setAttacks] = useState<DataMonsterBasics[]>(
    monsterData?.attack?.map((attack: any) => ({ ...attack })) || [
      {
        name: "",
        interval: 0,
        minValueAttack: 0,
        maxValueAttack: 0,
      },
    ]
  );

  const [loots, setLoots] = useState<any[]>([
    { name: "", isCountMax: false, countmax: 0, chance: 0 },
  ]);

  const handleCheckboxImmunitiesChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setHasImmunities(event.target.checked);
  };

  const handleCheckboxElementsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setHasElements(event.target.checked);
  };

  const handleCheckboxisSummonsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setHasIsSummons(event.target.checked);
  };

  const handleCheckboxisAttackChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setHasIsAttack(event.target.checked);
  };

  const handleCheckboxisLootChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setHasIsLoot(event.target.checked);
  };

  const handleCheckboxisDefencesChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setHasIsDefenses(event.target.checked);
  };

  const handleAddAttack = () => {
    setAttacks((prevAttacks: any) => [
      ...prevAttacks,
      { name: "", interval: 0, minValueAttack: 0, maxValueAttack: 0 },
    ]);
  };

  const handleAddSummons = () => {
    setSummons((prevSummons: any) => [
      ...prevSummons,
      { name: "", interval: 0, chance: 0, qtdMax: 0 },
    ]);
  };

  const handleAddLoot = () => {
    setLoots((prevLoots) => [
      ...prevLoots,
      { name: "", isCountMax: false, countmax: 0, chance: 0 },
    ]);
  };

  const handleSummonChange = (index: number, updatedSummon: any) => {
    setSummons((prevSummons) =>
      prevSummons.map((summon, i) => (i === index ? updatedSummon : summon))
    );
  };

  const handleAttackChange = (index: number, updatedAttack: any) => {
    setAttacks((prevAttacks) =>
      prevAttacks.map((attack, i) => (i === index ? updatedAttack : attack))
    );
  };

  const handleLootChange = (index: number, updatedLoot: any) => {
    setLoots((prevLoots) =>
      prevLoots.map((loot, i) => (i === index ? updatedLoot : loot))
    );
  };

  const handleRemoveAttack = (index: number) => {
    setAttacks((prevAttacks) => prevAttacks.filter((_, i) => i !== index));
  };

  const handleRemoveLoot = (index: number) => {
    setLoots((prevLoots) => prevLoots.filter((_, i) => i !== index));
  };

  const handleRemoveSummon = (index: number) => {
    setSummons((prevSummons) => prevSummons.filter((_, i) => i !== index));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = {
      ...monsterData,
      attack: attacks,
      loot: loots,
      summons: summons,
      isSummons: hasIsSummons,
      isAttack: hasIsAttack,
      isLoot: hasIsLoot,
      isDefenses: hasIsDefenses,
      isImmunities: hasImmunities,
      isElements: hasElements,
    };

    console.log({ data });

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const generatedXmlString = useGenerateXML(data);

    setXmlString(generatedXmlString);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Typography variant="h4" color="gray" fontWeight="bold" gutterBottom>
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
              value={monsterData.name}
              onChange={handleChange}
              required
              fullWidth
            />
            <FormControl fullWidth required>
              <InputLabel id="select-races">Raças</InputLabel>
              <Select
                labelId="select-races"
                id="select-races"
                variant="filled"
                value={monsterData.race}
                label="Raças"
                onChange={handleChangeRace}
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
              value={monsterData.experience}
              onChange={handleChange}
              fullWidth
              required
            />
            <TextField
              type="number"
              name="speed"
              label="Speed"
              variant="filled"
              value={monsterData.speed}
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
              name="min"
              label="Health Min"
              variant="filled"
              value={monsterData.heath.min}
              onChange={handleNumberChange}
              fullWidth
              required
            />
            <TextField
              type="number"
              name="max"
              label="Health Max"
              variant="filled"
              value={monsterData.heath.max}
              onChange={handleNumberChange}
              required
              fullWidth
            />
          </Box>
        </Box>
        {/* Looktypes */}
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
          }}
        >
          <TextField
            type="number"
            name="type"
            label="Looktype"
            variant="filled"
            value={monsterData.looktype.type}
            onChange={handleNumberChange}
            required
            fullWidth
          />
          <TextField
            type="number"
            name="head"
            label="Looktype Head"
            variant="filled"
            value={monsterData.looktype.head}
            onChange={handleNumberChange}
            required
            fullWidth
          />
          <TextField
            type="number"
            name="body"
            label="Looktype Body"
            variant="filled"
            value={monsterData.looktype.body}
            onChange={handleNumberChange}
            required
            fullWidth
          />
          <TextField
            type="number"
            name="legs"
            label="Looktype Legs"
            variant="filled"
            value={monsterData.looktype.legs}
            onChange={handleNumberChange}
            required
            fullWidth
          />
          <TextField
            type="number"
            name="feet"
            label="Looktype Feet"
            variant="filled"
            value={monsterData.looktype.feet}
            onChange={handleNumberChange}
            required
            fullWidth
          />
          <TextField
            type="number"
            name="addons"
            label="Looktype Addons"
            variant="filled"
            value={monsterData.looktype.addons}
            onChange={handleNumberChange}
            required
            fullWidth
          />
          <TextField
            type="number"
            name="typeex"
            label="Looktype Typeex"
            variant="filled"
            value={monsterData.looktype.typeex}
            onChange={handleNumberChange}
            required
            fullWidth
          />
          <TextField
            type="number"
            name="corpse"
            label="Looktype Corpse"
            variant="filled"
            value={monsterData.looktype.corpse}
            onChange={handleNumberChange}
            required
            fullWidth
          />
        </Box>
        {/* Immunities and Elements */}
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {/* Immunities */}
          <FormControlLabel
            control={
              <Checkbox
                checked={hasImmunities}
                onChange={handleCheckboxImmunitiesChange}
              />
            }
            label="Possui Imunidades?"
          />
          {hasImmunities && (
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
                gap: "0.5rem",
                padding: "1rem 0",
              }}
            >
              <TextField
                type="number"
                name="physical"
                label="Immunities Physical"
                variant="filled"
                value={monsterData.immunities?.physical}
                onChange={handleNumberChange}
                required
                fullWidth
              />
              <TextField
                type="number"
                name="energy"
                label="Immunities Energy"
                variant="filled"
                value={monsterData.immunities?.energy}
                onChange={handleNumberChange}
                required
                fullWidth
              />
              <TextField
                type="number"
                name="fire"
                label="Immunities Fire"
                variant="filled"
                value={monsterData.immunities?.fire}
                onChange={handleNumberChange}
                required
                fullWidth
              />
              <TextField
                type="number"
                name="poison"
                label="Immunities Poison"
                variant="filled"
                value={monsterData.immunities?.poison}
                onChange={handleNumberChange}
                required
                fullWidth
              />
              <TextField
                type="number"
                name="earth"
                label="Immunities Earth"
                variant="filled"
                value={monsterData.immunities?.earth}
                onChange={handleNumberChange}
                required
                fullWidth
              />
              <TextField
                type="number"
                name="ice"
                label="Immunities Ice"
                variant="filled"
                value={monsterData.immunities?.ice}
                onChange={handleNumberChange}
                required
                fullWidth
              />
              <TextField
                type="number"
                name="holy"
                label="Immunities Holy"
                variant="filled"
                value={monsterData.immunities?.holy}
                onChange={handleNumberChange}
                required
                fullWidth
              />
              <TextField
                type="number"
                name="death"
                label="Immunities Death"
                variant="filled"
                value={monsterData.immunities?.death}
                onChange={handleNumberChange}
                required
                fullWidth
              />
              <TextField
                type="number"
                name="drown"
                label="Immunities Drown"
                variant="filled"
                value={monsterData.immunities?.drown}
                onChange={handleNumberChange}
                required
                fullWidth
              />
              <TextField
                type="number"
                name="lifedrain"
                label="Immunities Lifedrain"
                variant="filled"
                value={monsterData.immunities?.lifedrain}
                onChange={handleNumberChange}
                required
                fullWidth
              />
              <TextField
                type="number"
                name="manadrain"
                label="Immunities Manadrain"
                variant="filled"
                value={monsterData.immunities?.manadrain}
                onChange={handleNumberChange}
                required
                fullWidth
              />
              <TextField
                type="number"
                name="outfit"
                label="Immunities Outfit"
                variant="filled"
                value={monsterData.immunities?.outfit}
                onChange={handleNumberChange}
                required
                fullWidth
              />
              <TextField
                type="number"
                name="drunk"
                label="Immunities Drunk"
                variant="filled"
                value={monsterData.immunities?.drunk}
                onChange={handleNumberChange}
                required
                fullWidth
              />
              <TextField
                type="number"
                name="invisible"
                label="Immunities Invisible"
                variant="filled"
                value={monsterData.immunities?.invisible}
                onChange={handleNumberChange}
                required
                fullWidth
              />
              <TextField
                type="number"
                name="paralyze"
                label="Immunities Paralyze"
                variant="filled"
                value={monsterData.immunities?.paralyze}
                onChange={handleNumberChange}
                required
                fullWidth
              />
            </Box>
          )}

          {/* Elements */}
          <FormControlLabel
            control={
              <Checkbox
                checked={hasElements}
                onChange={handleCheckboxElementsChange}
              />
            }
            label="Possui Elements?"
          />
          {hasElements && (
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
                gap: "0.5rem",
                padding: "1rem 0",
              }}
            >
              <TextField
                type="number"
                name="firePercent"
                label="Elements Fire Percent"
                variant="filled"
                value={monsterData.elements?.firePercent}
                onChange={handleNumberChange}
                required
                fullWidth
              />
              <TextField
                type="number"
                name="energyPercent"
                label="Elements Energy Percent"
                variant="filled"
                value={monsterData.elements?.energyPercent}
                onChange={handleNumberChange}
                required
                fullWidth
              />
              <TextField
                type="number"
                name="icePercent"
                label="Elements Ice Percent"
                variant="filled"
                value={monsterData.elements?.icePercent}
                onChange={handleNumberChange}
                required
                fullWidth
              />
              <TextField
                type="number"
                name="poisonPercent"
                label="Elements Poison Percent"
                variant="filled"
                value={monsterData.elements?.poisonPercent}
                onChange={handleNumberChange}
                required
                fullWidth
              />
              <TextField
                type="number"
                name="holyPercent"
                label="Elements Holy Percent"
                variant="filled"
                value={monsterData.elements?.holyPercent}
                onChange={handleNumberChange}
                required
                fullWidth
              />
              <TextField
                type="number"
                name="deathPercent"
                label="Elements Death Percent"
                variant="filled"
                value={monsterData.elements?.deathPercent}
                onChange={handleNumberChange}
                required
                fullWidth
              />
              <TextField
                type="number"
                name="drownPercent"
                label="Elements Drown Percent"
                variant="filled"
                value={monsterData.elements?.drownPercent}
                onChange={handleNumberChange}
                required
                fullWidth
              />
              <TextField
                type="number"
                name="earthPercent"
                label="Elements Earth Percent"
                variant="filled"
                value={monsterData.elements?.earthPercent}
                onChange={handleNumberChange}
                required
                fullWidth
              />
              <TextField
                type="number"
                name="physicalPercent"
                label="Elements Physical Percent"
                variant="filled"
                value={monsterData.elements?.physicalPercent}
                onChange={handleNumberChange}
                required
                fullWidth
              />
              <TextField
                type="number"
                name="lifedrainPercent"
                label="Elements Lifedrain Percent"
                variant="filled"
                value={monsterData.elements?.lifedrainPercent}
                onChange={handleNumberChange}
                required
                fullWidth
              />
              <TextField
                type="number"
                name="manadrainPercent"
                label="Elements Manadrain Percent"
                variant="filled"
                value={monsterData.elements?.manadrainPercent}
                onChange={handleNumberChange}
                required
                fullWidth
              />
              <TextField
                type="number"
                name="healingPercent"
                label="Elements Healing Percent"
                variant="filled"
                value={monsterData.elements?.healingPercent}
                onChange={handleNumberChange}
                required
                fullWidth
              />
              <TextField
                type="number"
                name="undefinedPercent"
                label="Elements Undefined Percent"
                variant="filled"
                value={monsterData.elements?.undefinedPercent}
                onChange={handleNumberChange}
                required
                fullWidth
              />
            </Box>
          )}
        </Box>
        {/* Defenses */}
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={hasIsDefenses}
                onChange={handleCheckboxisDefencesChange}
              />
            }
            label="Possui defense?"
          />
        </Box>
        {/* Possui summons */}
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={hasIsSummons}
                onChange={handleCheckboxisSummonsChange}
              />
            }
            label="Possui summons?"
          />
          {hasIsSummons && (
            <Box
              display="flex"
              flexDirection="column"
              gap="1rem"
              margin="1rem 0"
              justifyContent="start"
            >
              <Box sx={{ display: "flex", gap: "1rem" }}>
                <Typography
                  variant="h5"
                  color="primary.light"
                  fontWeight="bold"
                >
                  Summons
                </Typography>
                <Button variant="outlined" onClick={handleAddSummons}>
                  Adicionar Summons
                </Button>
              </Box>
              {summons.map((summon, index) => (
                <Summons
                  key={index}
                  index={index}
                  summons={summon}
                  onAttackChange={handleSummonChange}
                  onRemoveAttack={handleRemoveSummon}
                />
              ))}
            </Box>
          )}
        </Box>
        {/* Possui Attacks */}
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={hasIsAttack}
                onChange={handleCheckboxisAttackChange}
              />
            }
            label="Possui ataques?"
          />
          {hasIsAttack && (
            <Box
              display="flex"
              flexDirection="column"
              gap="1rem"
              margin="1rem 0"
              justifyContent="start"
            >
              <Box sx={{ display: "flex", gap: "1rem" }}>
                <Typography
                  variant="h5"
                  color="primary.light"
                  fontWeight="bold"
                >
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
          )}
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={hasIsLoot}
                onChange={handleCheckboxisLootChange}
              />
            }
            label="Possui loots?"
          />
          {hasIsLoot && (
            <Box
              display="flex"
              flexDirection="column"
              gap="1rem"
              margin="1rem 0"
              justifyContent="start"
            >
              <Box sx={{ display: "flex", gap: "1rem" }}>
                <Typography
                  variant="h5"
                  color="primary.light"
                  fontWeight="bold"
                >
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
          )}
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
