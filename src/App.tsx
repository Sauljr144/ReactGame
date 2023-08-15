import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenerList from "./components/GenerList";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `'nav' 'main'`,
          lg: `'nav nav' 'aside main'`, //1024px
        }}
      >
        <GridItem area="nav">
         <NavBar/>
        </GridItem>
        <Show above="lg">
          <GridItem area="aside">
            <GenerList/>
          </GridItem>
        </Show>
        <GridItem area="main">
          <GameGrid/>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
