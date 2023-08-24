import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useData from "../hooks/useData";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenerList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useData<Genre>("/genres");

  return (
    <>
    <Heading fontSize='2xl'>Genres</Heading>
    <List>
      {error && <Text>error 404 not found</Text>}
      {isLoading && <Spinner />}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
            objectFit='cover'
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
              color={genre.id === selectedGenre?.id ? "blue.500" : "normal"}
              onClick={() => onSelectGenre(genre)}
              fontSize="100%"
              variant="link"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
    </>
  );
};

export default GenerList;
