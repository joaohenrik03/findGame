import { Card } from "../../../../components/Card";
import { 
  TrendingGamesContainer, 
  TrendingGamesList, 
  TrendingGamesTitle 
} from "./styles";

export function TrendingGames() {
  const tempCategorys = [{
    id: 4,
    name: "testeasdasdasdfddfgdf",
    slug: "action",
    games_count: 178956,
    image_background: "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
    games: []
  },
  {
    id: 5,
    name: "teste212asdasd123dfsdfdsdf",
    slug: "action",
    games_count: 178956,
    image_background: "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
    games: []
  },
  {
    id: 6,
    name: "teste3asdasd12312asdfsdf",
    slug: "action",
    games_count: 178956,
    image_background: "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
    games: []
  },
  {
    id: 7,
    name: "teste4asdasdasd123asdasd",
    slug: "action",
    games_count: 178956,
    image_background: "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
    games: []
  },
  ];

  return (
    <TrendingGamesContainer>
      <TrendingGamesTitle>
        Trending games

      </TrendingGamesTitle>

      <TrendingGamesList
        data={tempCategorys}
        keyExtractor={(item) => item.id}
        renderItem={() => <Card />}
      />
    </TrendingGamesContainer>
  )
}
