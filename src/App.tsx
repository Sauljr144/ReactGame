import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenerList from "./components/GenerList";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";

function App() {

  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)

  return (
    <>
      <Grid
        templateAreas={{
          base: `'nav' 'main'`,
          lg: `'nav nav' 'aside main'`, //1024px
        }}
        templateColumns={{
          base:'1fr',
          lg:'200px'
        }
        }
      >
        <GridItem area="nav">
         <NavBar/>
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenerList selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)}/>
          </GridItem>
        </Show>
        <GridItem area="main">
          <PlatformSelector/>
          <GameGrid selectedGenre={selectedGenre}/>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
