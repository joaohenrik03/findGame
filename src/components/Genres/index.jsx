import { Genre, GenresContainer } from "./styles";

export function Genres({genre}) {
  return (
    <GenresContainer>
      <Genre>
        {genre}
      </Genre>  
    </GenresContainer>
  )
}
