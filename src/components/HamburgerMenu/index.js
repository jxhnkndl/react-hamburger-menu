import React from 'react'
import styled from 'styled-components';

// icon container
const HamburgerMenuContainer = styled.div`
  display: flex;
`;

// svg hamburger icon
// icon color of the icon is determined by props
const HamburgerIcon = styled.div`
  color: $(({ reverse }) => reverseColor ? "#000" : "#fff" );
  cursor: pointer;
  z-index: 99;
  transition: all 250ms ease-in-out;
`;

// menu container (the div that slides out when menu is engaged)
// the menu will slide out from the right side of the display
const MenuContainer = styled.div`
  width: 100%;
  min-width: 300px;
  max-width: 44%;
  height: 100%;
  background-color: #fff;
  box-shadow: -2px 0 2px rgba(15, 15, 15, 0.3);
  z-index: 90;
  position: fixed;
  top: 0;
  right: 0;
  user-select: none;
  padding: 1em 2.5em;
`;

const HamburgerMenu = (props) => {
  return (
    <HamburgerMenuContainer>
      <HamburgerIcon>
        Icon
      </HamburgerIcon>
      <MenuContainer>
        Menu
      </MenuContainer>
    </HamburgerMenuContainer>
  )
}

export default HamburgerMenu;