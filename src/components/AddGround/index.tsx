"use client";

import { usePositiveNumberInput } from "@/hooks/usePositiveNumberInput";
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

const AddGround = () => {
  const [value1, setValue1] = useState("");
  const { value, handleChange } = usePositiveNumberInput();

  const handleChangeSelect = (event: SelectChangeEvent) => {
    setValue1(event.target.value as string);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
        padding: "10rem",
        maxWidth: "60vw",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          padding: "2rem",
        }}
      >
        <Typography
          variant="h2"
          sx={{ fontWeight: "bold" }}
          color="text.secondary"
        >
          Grounds
        </Typography>
        <form>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Box
              sx={{
                display: "flex",
                gap: "1rem",
                width: "100%",
              }}
            >
              <TextField
                type="text"
                label="Nome do ground"
                variant="filled"
                required
                fullWidth
              />
              <TextField
                type="text"
                label="Type"
                value="ground"
                variant="filled"
                required
                disabled
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "1rem",
                width: "100%",
              }}
            >
              <TextField
                type="number"
                label="Server_lookid"
                variant="filled"
                onChange={(e) => handleChange(e.target)}
                inputProps={{ min: "0" }}
                required
                fullWidth
              />
              <TextField
                type="number"
                label="Z-Order"
                variant="filled"
                onChange={(e) => handleChange(e.target)}
                inputProps={{ min: "0" }}
                required
                fullWidth
              />
            </Box>
            <FormControl fullWidth required variant="filled">
              <InputLabel id="demo-simple-select-label">Id da borda</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                variant="filled"
                value={value1}
                label="Id da borda"
                onChange={handleChangeSelect}
                required
              >
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
                <MenuItem value="4">4</MenuItem>
                <MenuItem value="5">5</MenuItem>
                <MenuItem value="6">6</MenuItem>
                <MenuItem value="7">7</MenuItem>
                <MenuItem value="8">8</MenuItem>
                <MenuItem value="9">9</MenuItem>
                <MenuItem value="10">10</MenuItem>
              </Select>
            </FormControl>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "1rem",
                width: "100%",
              }}
            >
              <Button variant="text" href="/">
                Cancelar
              </Button>
              <Button variant="contained" type="submit">
                Cadastrar
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default AddGround;
