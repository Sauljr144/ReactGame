import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDoubleDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";


interface Props{
  onSelectPlatform: (platform: Platform) => void
  selectedPlatform: Platform | null
}


const PlatformSelector = ({onSelectPlatform, selectedPlatform}:Props) => {

   const{data, error} = usePlatforms()
   if(error)return null

  return (
    <Menu>
      <MenuButton marginLeft='20px' as={Button} rightIcon={<BsChevronDoubleDown />}>
        {selectedPlatform?.name || 'Platform'}
      </MenuButton>
      <MenuList>
       {data.map(platform => <MenuItem key={platform.id} onClick={() => onSelectPlatform(platform)}>{platform.name}</MenuItem>)}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
