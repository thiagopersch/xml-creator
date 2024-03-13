"use client";

import { Remove } from "@mui/icons-material";
import { Box, Button, TextField } from "@mui/material";

type AttackProps = {
  index: number;
  attack: any;
  onAttackChange: (index: number, updatedAttack: any) => void;
  onRemoveAttack: (index: number) => void;
};

const Attacks = ({
  index,
  attack,
  onAttackChange,
  onRemoveAttack,
}: AttackProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    onAttackChange(index, { ...attack, [name]: value });
  };

  return (
    <Box
      display="grid"
      gridTemplateColumns="1fr 1fr 1fr 1fr"
      gap="1rem"
      margin="1rem 0"
      justifyContent="start"
    >
      <TextField
        type="text"
        name="name"
        label="Attack name"
        variant="filled"
        value={attack.name}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        type="number"
        name="interval"
        label="Attack Interval"
        variant="filled"
        value={attack.interval}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        type="number"
        name="minValueAttack"
        label="Attack Min Value"
        variant="filled"
        value={attack.minValueAttack}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        type="number"
        name="maxValueAttack"
        label="Attack Max Value"
        variant="filled"
        value={attack.maxValueAttack}
        onChange={handleChange}
        fullWidth
      />
      <Button onClick={() => onRemoveAttack(index)} startIcon={<Remove />}>
        Remove Attack
      </Button>
    </Box>
  );
};

export default Attacks;
