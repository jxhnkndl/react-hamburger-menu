import React from 'react';
import MenuToggle from '../MenuToggle/MenuToggle';
import styled from 'styled-components';

// icon container
const HamburgerMenuContainer = styled.div`
  display: flex;
`;

// menu container (the div that slides out from the right when menu is engaged)
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
      <MenuToggle toggle={() => {}} isOpen={false} />
    </HamburgerMenuContainer>
  );
};

export default HamburgerMenu;
