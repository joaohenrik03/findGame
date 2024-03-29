
import { useEffect, useState } from "react";
import { Modal, ScrollView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { api, apiKey } from "../../services/api";

import { HeaderSection } from "./components/HeaderSection";
import { HeadSection } from "./components/HeadSection";
import { GenresSection } from "./components/GenresSection";
import { DescriptionSection } from "./components/DescriptionSection";
import { PlatformSection } from "./components/PlatformSection";
import { StoresSection } from "./components/StoresSection";
import { BackButton } from "../../components/BackButton";
import { FavoriteButton } from "./components/FavoriteButton";

import { 
  DetailContainer, 
  DetailContent, 
  FullDescription, 
  ModalContainer, 
  ModalTitle 
} from "./styles";

export function Detail() {
  const route = useRoute();
  const { gameData } = route.params;
  const { goBack } = useNavigation();
  const [gameDescription, setGameDescription] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    async function getGameDescription() {
      const response = await api.get(`/games/${gameData.id}?&key=${apiKey}`);

      setGameDescription(response.data.description_raw);
    }

    getGameDescription();
  }, [setGameDescription]);

  return (
    <DetailContainer>
      <ScrollView 
        style={{
          flex: 1,
        }}
        showsVerticalScrollIndicator={false}
      >
        <HeaderSection bgUrl={gameData.background_image} />

        <DetailContent>
          <HeadSection 
            name={gameData.name} 
            rating={gameData.rating} 
          />
          <GenresSection 
            genres={gameData.genres} 
          />
          <DescriptionSection 
            gameDescription={gameDescription} 
            handleOpenModal={() => setModalIsOpen(true)} 
          />
          <PlatformSection 
            platforms={gameData.platforms} 
          />
          {gameData.stores.length !== 0 && (
             <StoresSection stores={gameData.stores} />
          )}
        </DetailContent>

        <BackButton performFunction={() => goBack()} />
        <FavoriteButton gameData={gameData} />
      </ScrollView>

      <Modal 
        visible={modalIsOpen} 
        animationType="slide" 
        transparent={true} 
      >
        <ModalContainer>
          <ModalTitle>
            Description
          </ModalTitle>

          <FullDescription>
            {gameDescription}
          </FullDescription> 

          <BackButton performFunction={() => setModalIsOpen(false)} />
        </ModalContainer>
      </Modal>
    </DetailContainer>
  )
}
