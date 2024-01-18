'use client';

import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import Link from "next/link";

export default function Home() {
 return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            XML creator
          </Typography>
          <Link href='/'>
            <Button sx={{color: 'common.white'}} variant="outlined">
              Início
            </Button>
          </Link>
          <Link href='/border'>
            <Button sx={{color: 'common.white'}} variant="outlined">
              Borders
            </Button>
          </Link>
          <Link href='/ground'>
            <Button sx={{color: 'common.white'}} variant="outlined">
              Grounds
            </Button>
          </Link>
          <Link href='/brush'>
            <Button sx={{color: 'common.white'}} variant="outlined">
              Brushes
            </Button>
          </Link>
            
        </Toolbar>
      </AppBar>
    </Box>
  );
}
