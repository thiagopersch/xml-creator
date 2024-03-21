import { LootType } from "@/hooks/useGenerateXML";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  TextField,
} from "@mui/material";
import { useState } from "react";

type LootProps = LootType & {
  index: number;
  loot: LootType;
  onLootChange: (index: number, updatedLoot: LootType) => void;
  onRemoveLoot: (index: number) => void;
};

const Loots = ({ index, loot, onLootChange, onRemoveLoot }: LootProps) => {
  const [hasCount, setHasCount] = useState(loot.isCountMax || false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    onLootChange(index, { ...loot, [name]: value });
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    setHasCount(checked);

    if (checked) {
      onLootChange(index, { ...loot, isCountMax: checked, countmax: "0" });
    } else {
      onLootChange(index, { ...loot, isCountMax: checked });
    }
  };

  return (
    <FormControl fullWidth>
      <FormLabel sx={{ margin: "1rem 0" }}>Item: {loot.name}</FormLabel>
      <FormGroup>
        <Box
          display="grid"
          gridTemplateColumns="1fr 1fr"
          gap="1rem"
          margin="1rem 0"
          justifyContent="start"
        >
          <TextField
            type="text"
            name="name"
            label="Loot Name"
            variant="filled"
            value={loot.name}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            type="number"
            name="chance"
            label="Loot Chance"
            variant="filled"
            value={loot.chance}
            onChange={handleChange}
            fullWidth
          />
        </Box>
        <FormControlLabel
          control={
            <Checkbox checked={hasCount} onChange={handleCheckboxChange} />
          }
          label="Possui count?"
        />
        {hasCount && (
          <Box sx={{ margin: "1rem 0" }}>
            <TextField
              type="number"
              name="countmax"
              label="Loot Count Max"
              variant="filled"
              value={loot.countmax}
              onChange={(e) =>
                onLootChange(index, { ...loot, countmax: e.target.value })
              }
              fullWidth
              required
            />
          </Box>
        )}
      </FormGroup>
      <Button onClick={() => onRemoveLoot(index)}>
        Remove Loot {loot.name}
      </Button>
    </FormControl>
  );
};

export default Loots;
