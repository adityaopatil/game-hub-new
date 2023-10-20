import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`, //larger devices which are more than 1020px
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          {" "}
          {/**The Show component will only show this GridItem when screen size is above lg */}
          <GridItem area="a side" paddingX={5}>
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box paddingLeft={2}>
            <GameHeading />
            <Flex marginBottom={5}>
              <Box marginRight={5}>
                <PlatformSelector />
              </Box>
              <SortSelector />
            </Flex>
          </Box>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
