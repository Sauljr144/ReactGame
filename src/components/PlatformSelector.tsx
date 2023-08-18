import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDoubleDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

const PlatformSelector = () => {

   const{data} = usePlatforms()

  return (
    <Menu>
      <MenuButton marginLeft='20px' as={Button} rightIcon={<BsChevronDoubleDown />}>
        Platform
      </MenuButton>
      <MenuList>
       {data.map(platform => <MenuItem key={platform.id}>{platform.name}</MenuItem>)}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
