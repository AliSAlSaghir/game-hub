import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import React from "react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav"></GridItem>
      <Show above="lg">
        <GridItem area="aside"></GridItem>
      </Show>
      <GridItem area="main"></GridItem>
    </Grid>
  );
}

export default App;
