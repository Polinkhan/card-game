import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import Card from "./Card";

function CardList({ cardList, Users, cardOnClicked }) {
  function handleClick(id, src) {
    const newUserInfo = Users.map(function (user) {
      return user.id !== 1 ? user : { id: user.id, name: user.name, point: user.point, imgSrc: user.imgSrc, src: src };
    });
    const new_list = cardList.map(function (list) {
      return list.id !== id ? list : { id: id, src: "" };
    });
    cardOnClicked(new_list,newUserInfo);
  }

  return (
    <Grid h="100%" px="2" templateRows="repeat(1, 1fr)" templateColumns="repeat(13, 1fr)" gap={1} alignItems="center">
      {cardList.map((card) => (
        <GridItem key={card.id} h="80%" rowSpan={1} colSpan={1} overflow="hidden" onClick={() => handleClick(card.id, card.src)}>
          <Card card={card} />
        </GridItem>
      ))}
    </Grid>
  );
}

export default CardList;
