import { Grid,GridItem } from "@chakra-ui/react";
import React from "react";
import Card from "./Card";

function ShowCard({Users}) {
  return (
    <Grid h="100%" px="2" templateRows="repeat(5, 1fr)" templateColumns="repeat(11, 1fr)" gap={1} alignItems="center">
      <GridItem h="80%"  rowSpan={2} colStart={6} colEnd={7} border="1px" overflow="hidden"></GridItem>
      <GridItem h="100%" w="80%" mx="auto" rowStart={3} rowEnd={4} colStart={4} colEnd={6} border="1px" overflow="hidden"></GridItem>
      <GridItem h="100%" w="80%" mx="auto" rowStart={3} rowEnd={4} colStart={7} colEnd={9} border="1px" overflow="hidden"></GridItem>
      <GridItem h="80%"  rowStart={4} rowEnd={6} colStart={6} colEnd={7} overflow="hidden">
        <Card card={Users[0]}/>
      </GridItem>

    </Grid>
  );
}

export default ShowCard;
