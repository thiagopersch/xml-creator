"use client";
import { Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 200 },
  { field: "name", headerName: "Nome", width: 200 },
  { field: "race", headerName: "Raça", width: 200 },
  {
    field: "experience",
    headerName: "Experiência",
    type: "number",
    width: 200,
  },
  {
    field: "speed",
    headerName: "Velocidade",
    sortable: false,
    width: 200,
    // valueGetter: (params: GridValueGetterParams) =>
    //   `${params.row.name || ""} ${params.row.race || ""}`,
  },
];

const rows = [
  { id: 1, race: "Snow", name: "Jon", experience: 35, speed: 180 },
  { id: 2, race: "Lannister", name: "Cersei", experience: 42, speed: 100 },
  { id: 3, race: "Lannister", name: "Jaime", experience: 45, speed: 280 },
  { id: 4, race: "Stark", name: "Arya", experience: 16, speed: 180 },
  { id: 5, race: "Targaryen", name: "Daenerys", experience: 0, speed: 350 },
  { id: 6, race: "Melisandre", name: "", experience: 150, speed: 140 },
  { id: 7, race: "Clifford", name: "Ferrara", experience: 44, speed: 120 },
  { id: 8, race: "Frances", name: "Rossini", experience: 36, speed: 190 },
  { id: 9, race: "Roxie", name: "Harvey", experience: 65, speed: 185 },
];
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
      <DataGrid
        checkboxSelection
        disableRowSelectionOnClick
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 7 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
}
