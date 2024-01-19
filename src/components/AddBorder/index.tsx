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

const AddBorder = () => {
  const [cardinalPoint, setCardinalPoint] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setCardinalPoint(event.target.value as string);
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
          Bordas
        </Typography>
        <form>
          <Box sx={{ display: "grid", gap: "1rem" }}>
            <Box sx={{ display: "flex", gap: "1rem" }}>
              <TextField type="number" label="Id da borda" />
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Direcao da borda (Ponto Cardial)
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={cardinalPoint}
                  label="Direcao da borda (Ponto Cardial)"
                  onChange={handleChange}
                >
                  <MenuItem value="s">s</MenuItem>
                  <MenuItem value="w">w</MenuItem>
                  <MenuItem value="n">n</MenuItem>
                  <MenuItem value="e">e</MenuItem>
                  <MenuItem value="cne">cne</MenuItem>
                  <MenuItem value="csw">csw</MenuItem>
                  <MenuItem value="cnw">cnw</MenuItem>
                  <MenuItem value="cse">cse</MenuItem>
                  <MenuItem value="dne">dse</MenuItem>
                  <MenuItem value="dsw">dsw</MenuItem>
                  <MenuItem value="dnw">dnw</MenuItem>
                  <MenuItem value="dnw">dne</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <TextField type="text" label="Nome da borda" />
            <TextField type="number" label="Id da sprite" />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 2,
            }}
          >
            <Button variant="text">Cancelar</Button>
            <Button variant="contained">Cadastrar</Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default AddBorder;
