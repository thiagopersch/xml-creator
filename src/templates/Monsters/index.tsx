"use client";
import AddMonsters from "@/components/AddMonsters";
import { Typography } from "@mui/material";

export default function Monsters() {
  return (
    <div style={{ height: "50vh", width: "90vw", margin: "5rem  auto" }}>
      <Typography
        variant="h4"
        color="primary.light"
        fontWeight="bold"
        gutterBottom
      >
        Monstros
      </Typography>
      <AddMonsters />
    </div>
  );
}
