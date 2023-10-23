import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import GenreList from "../components/GenreList";
import GameHeading from "../components/GameHeading";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";
import GameGrid from "../components/GameGrid";

const HomePage = () => {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"main"`,
          lg: `"aside main"`, //larger devices which are more than 1020px
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
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
};

export default HomePage;
