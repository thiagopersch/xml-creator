"use client";

import useGenerateXML from "@/hooks/useGenerateXML";
import { DataMonsterBasics } from "@/model/Types";
import { Editor } from "@monaco-editor/react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Attacks from "./Attacks";
import Basics from "./Basics";
import Elements from "./Elements";
import Immunities from "./Immunities";
import Looktypes from "./Looktypes";
import Loots from "./Loots";
import Summons from "./Summons";

type AddMonstersProps = {
  initialData: DataMonsterBasics;
};

const AddMonsters: React.FC<AddMonstersProps> = ({ initialData }) => {
  const [monster, setMonster] = useState<DataMonsterBasics>(initialData);
  const [xmlString, setXmlString] = useState<string>("");
  const [hasImmunities, setHasImmunities] = useState<boolean>(
    !!initialData?.isImmunities
  );
  const [hasElements, setHasElements] = useState<boolean>(
    !!initialData?.isElements
  );

  const [attacks, setAttacks] = useState<DataMonsterBasics[]>(
    initialData?.attack?.map((attack: any) => ({ ...attack })) || [
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

  const handleAddAttack = () => {
    setAttacks((prevAttacks: any) => [
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = {
      ...monster,
      attack: attacks,
    };

    console.log({ data });

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const generatedXmlString = useGenerateXML(data);

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
          <Basics monstros={setMonster} monster={monster} />
        </Box>
        {/* Looktypes */}
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
          }}
        >
          <Looktypes />
        </Box>
        {/* Summons */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "0.5rem",
            padding: "1rem 0",
          }}
        >
          <Summons />
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
                gridTemplateColumns: "1fr",
                gap: "0.5rem",
                padding: "1rem 0",
              }}
            >
              <Immunities />
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
                gridTemplateColumns: "1fr",
                gap: "0.5rem",
                padding: "1rem 0",
              }}
            >
              <Elements />
            </Box>
          )}
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
