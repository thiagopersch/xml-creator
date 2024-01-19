"use client";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import Link from "next/link";

const Cards = () => {
  return (
    <Box
      sx={{
        height: "90vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 15rem",
      }}
    >
      <Link href="/border" style={{ textDecoration: "none" }}>
        <Card
          sx={{
            width: "20rem",
            height: "20rem",
            display: "flex",
            padding: "4rem",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          raised
        >
          <CardContent>
            <Typography
              sx={{
                fontSize: "2rem",
                fontWeight: "bold",
                textAlign: "center",
                textTransform: "uppercase",
              }}
              color="text.primary"
              gutterBottom
            >
              Borders
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="large" variant="contained">
              Verificar
            </Button>
          </CardActions>
        </Card>
      </Link>
      <Link href="/ground" style={{ textDecoration: "none" }}>
        <Card
          sx={{
            width: "20rem",
            height: "20rem",
            display: "flex",
            padding: "4rem",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          raised
        >
          <CardContent>
            <Typography
              sx={{
                fontSize: "2rem",
                fontWeight: "bold",
                textAlign: "center",
                textTransform: "uppercase",
              }}
              color="text.primary"
              gutterBottom
            >
              Grounds
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="large" variant="contained">
              Verificar
            </Button>
          </CardActions>
        </Card>
      </Link>
      <Link href="/items-ground" style={{ textDecoration: "none" }}>
        <Card
          sx={{
            width: "20rem",
            height: "20rem",
            display: "flex",
            padding: "4rem",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          raised
        >
          <CardContent>
            <Typography
              sx={{
                fontSize: "2rem",
                fontWeight: "bold",
                textAlign: "center",
                textTransform: "uppercase",
              }}
              color="text.primary"
              gutterBottom
            >
              Itens do grounds
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="large" variant="contained">
              Verificar
            </Button>
          </CardActions>
        </Card>
      </Link>
      <Link href="/brush" style={{ textDecoration: "none" }}>
        <Card
          sx={{
            width: "20rem",
            height: "20rem",
            display: "flex",
            padding: "4rem",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          raised
        >
          <CardContent>
            <Typography
              sx={{
                fontSize: "2rem",
                fontWeight: "bold",
                textAlign: "center",
                textTransform: "uppercase",
              }}
              color="text.primary"
              gutterBottom
            >
              Brushes
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="large" variant="contained">
              Verificar
            </Button>
          </CardActions>
        </Card>
      </Link>
    </Box>
  );
};

export default Cards;
