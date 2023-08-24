import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  GridItem,
  HStack,
  Show,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenerList from "./components/GenerList";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

// GameQuery carries our genre and platform, we can use this in other parts
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string
}

function App() {
  //this single useState holds genre and platform
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <Grid
        templateAreas={{
          base: `'nav' 'main'`,
          lg: `'nav nav' 'aside main'`, //1024px
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px",
        }}
      >
        <GridItem area="nav">
          <NavBar onSearch={(searchText) => setGameQuery({...gameQuery, searchText}) }/>
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={1}>
            <GenerList
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box paddingLeft={5}>
          <GameHeading gameQuery={gameQuery}/>
          <HStack marginBottom={5} spacing={5}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})} />
          </HStack>
          </Box>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
