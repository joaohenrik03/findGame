import { Title } from "../Title";
import { Genres } from "../../../../components/Genres";
import { GenresList, GenresSectionContainer } from "./styles";

export function GenresSection({genres}) {
  return (
    <GenresSectionContainer>
      <Title>
        Genres
      </Title>

      <GenresList
        horizontal={true}
        data={genres}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <Genres genre={item.name} />}
      />
    </GenresSectionContainer>
  )
}
