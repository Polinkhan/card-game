import React from "react";
import { Flex,Image } from "@chakra-ui/react";

function Card({card}) {
  return (
    <Flex h="100%" border="1px" borderColor="gray" borderRadius="sm" justifyContent="center">
      <Image src={card.src}></Image>
    </Flex>
  );
}

export default Card;
