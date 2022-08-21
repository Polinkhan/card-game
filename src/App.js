import "./App.css";
import { Grid, GridItem } from "@chakra-ui/react";
import CardList from "./components/CardList";
import PointView from "./components/PointView";
import ShowCard from "./components/ShowCard";
import { useState } from "react";

const initial_Users = [
  {
    id: 1,
    name: "Polin",
    point: 10,
    imgSrc: "./logos/gamer.png",
    src: "",
  },
  {
    id: 2,
    name: "Mahub",
    point: 10,
    imgSrc: "./logos/man.png",
    src: "",
  },
  {
    id: 3,
    name: "Rakib",
    point: 10,
    imgSrc: "./logos/profile.png",
    src: "",
  },
  {
    id: 4,
    name: "Shameem",
    point: 10,
    imgSrc: "./logos/woman.png",
    src: "",
  },
];

const initial_cardList = [
  {
    id: 2,
    src: "./card/D2.png",
  },
  {
    id: 3,
    src: "./card/D3.png",
  },
  {
    id: 4,
    src: "./card/D4.png",
  },
  {
    id: 5,
    src: "./card/D5.png",
  },
  {
    id: 6,
    src: "./card/D6.png",
  },
  {
    id: 7,
    src: "./card/D7.png",
  },
  {
    id: 8,
    src: "./card/D8.png",
  },
  {
    id: 9,
    src: "./card/D9.png",
  },
  {
    id: 10,
    src: "./card/D10.png",
  },
  {
    id: 11,
    src: "./card/DJ.png",
  },
  {
    id: 12,
    src: "./card/DQ.png",
  },
  {
    id: 13,
    src: "./card/DK.png",
  },
  {
    id: 14,
    src: "./card/DA.png",
  },
];

function App() {
  const [cardList, setCardList] = useState(initial_cardList);
  const [Users, setUsersInfo] = useState(initial_Users);

  console.log(cardList, Users);

  function cardOnClicked(newCardList, newUserInfo) {
    setCardList(newCardList);
    setUsersInfo(newUserInfo);
    console.log(cardList, Users);
  }

  return (
    <Grid h="100vh" p="4" templateRows="repeat(4, 1fr)" templateColumns="repeat(9, 1fr)" gap={1}>
      {/* 3X1 GridBox For Chat */}
      <GridItem rowSpan={1} colSpan={2} bg="blue.50" border="1px" borderColor="gray.300" borderRadius="lg">
        <PointView Users={Users} />
      </GridItem>

      {/* 2X3 GridBox For CardShow */}
      <GridItem rowSpan={3} colSpan={7} bg="blue.50" border="1px" borderColor="gray.300" borderRadius="lg">
        <ShowCard Users={Users} />
      </GridItem>

      <GridItem rowSpan={3} colSpan={2} bg="blue.50" border="1px" borderColor="gray.300" borderRadius="lg"></GridItem>

      {/* 1X3 GridBox For MyCardShow */}
      <GridItem rowSpan={1} colSpan={7} bg="blue.50" border="1px" borderColor="gray.300" borderRadius="lg" alignItems="center">
        <CardList cardList={cardList} Users={Users} cardOnClicked={cardOnClicked} />
      </GridItem>
    </Grid>
  );
}

export default App;
