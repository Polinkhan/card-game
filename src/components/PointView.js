import { Grid, GridItem, Avatar, Text, Divider, Flex, Box } from "@chakra-ui/react";
import React from "react";

function PointView({Users}) {
  return (
    <Grid h="100%" templateRows="repeat(2, 1fr)" templateColumns="repeat(2, 1fr)" gap={2} p="2" alignItems="center">
      {Users.map((user) => (
        <GridItem key={user.id} p="" textAlign="center" borderRadius="lg" rowSpan={1} colSpan={1}>
          <Flex justifyContent="space-around" pb="1">
            <Avatar size="sm" name={user.name} src={user.imgSrc} bg=""/>
            <Box>
              <Text fontSize="12" fontWeight="bold">
                {user.name}
              </Text>
              <Text fontSize="10">Point : {user.point}</Text>
            </Box>
          </Flex>
          <Divider />
        </GridItem>
      ))}
    </Grid>
  );
}

export default PointView;
