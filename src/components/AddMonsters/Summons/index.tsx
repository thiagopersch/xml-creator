"use client";

import { SummonsType } from "@/model/Types";
import { Remove } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  FormGroup,
  FormLabel,
  TextField,
} from "@mui/material";

export type SummonsProps = {
  index: number;
  onAttackChange: (index: number, updatedAttack: any) => void;
  onRemoveAttack: (index: number) => void;
  summons: SummonsType;
};

const Summons = ({
  index,
  onAttackChange,
  onRemoveAttack,
  summons,
}: SummonsProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    onAttackChange(index, { ...summons, [name]: value });
  };

  return (
    <FormControl fullWidth>
      <FormLabel sx={{ margin: "1rem 0" }}>Summon: {summons.name}</FormLabel>
      <FormGroup>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: "1rem",
            margin: "1rem 0",
            justifyContent: "start",
          }}
        >
          <TextField
            type="text"
            name="name"
            label="Summons Name"
            variant="filled"
            value={summons.name}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            type="number"
            name="interval"
            label="Summons Interval"
            variant="filled"
            value={summons.interval}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            type="number"
            name="chance"
            label="Summons Chance"
            variant="filled"
            value={summons.chance}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            type="number"
            name="qtdMax"
            label="Summons Qtd Max"
            variant="filled"
            value={summons.qtdMax}
            onChange={handleChange}
            required
            fullWidth
          />
        </Box>

        <Button onClick={() => onRemoveAttack(index)} startIcon={<Remove />}>
          Remover
        </Button>
      </FormGroup>
    </FormControl>
  );
};

export default Summons;
