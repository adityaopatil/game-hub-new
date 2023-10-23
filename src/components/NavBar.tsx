import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp"; //import 'logo' this can be any name
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <HStack padding="10px">
        {/**Here we cannot add img src={../assets}. We need to import the image as an obj. */}

        <Link to={"/"}>
          <Image objectFit="cover" src={logo} boxSize="60px"></Image>
        </Link>
        <SearchInput />
        <ColorModeSwitch></ColorModeSwitch>
      </HStack>
    </>
  );
};

export default NavBar;
