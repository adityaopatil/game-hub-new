import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp"; //import 'logo' this can be any name
import React from "react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px">
      {/**Here we cannot add img src={../assets}. We need to import the image as an obj. */}
      <Image src={logo} boxSize="60px"></Image>
      <SearchInput />
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
