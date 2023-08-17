import { Button, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useData from "../hooks/useData";
import useGenres, { Genre } from "../hooks/useGenres"
import getCroppedImageUrl from "../services/image-url";

interface Props{
  onSelectGenre: (genre: Genre) => void
}

const GenerList = ({onSelectGenre}:Props) => {

    const {data, isLoading, error} = useData<Genre>('/genres');

  return (

    <List>
      {error && <Text>error 404 not found</Text>}
      {isLoading && <Spinner/>}
        {data.map(genre => <ListItem key={genre.id} paddingY='5px'>
            <HStack>
                <Image boxSize='32px' borderRadius={8}src={getCroppedImageUrl(genre.image_background)} />
                <Button onClick={() => onSelectGenre(genre)} fontSize='lg' variant='link'>{genre.name}</Button>
            </HStack>
        </ListItem>)}
    </List>
  )
}

export default GenerList