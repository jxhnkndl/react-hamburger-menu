import React, { useState } from 'react';
import MenuToggle from '../MenuToggle/MenuToggle';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// icon container
const HamburgerMenuContainer = styled.div`
  display: flex;
`;

// menu container (the div that slides out from the right when menu is engaged)'
// styling the motion.div makes the menu capable of being animated
const MenuContainer = styled(motion.div)`
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
  transform: translateX(4em)
  user-select: none;
  padding: 1em 2.5em;
`;

const menuVariants = {
  open: {
    transform: 'translateX(3%)',
  },
  closed: {
    transform: 'translateX(103%)',
  },
};

// animation properties for animating the menu container
const menuTransition = {
  type: 'spring',
  duration: 1,
  stiffness: 33,
  // the delay accounts for the hamburger icon animation
  delay: 0.1,
};

const HamburgerMenu = (props) => {
  // set menu's open/closed state
  const [isOpen, setOpen] = useState(false);

  // toggle menu state between open and closed
  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <HamburgerMenuContainer>
      {/* pass toggling function and open state to the icon */}
      <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
      <MenuContainer
        initial={false}
         animate={isOpen ? 'open' : 'closed'}
        variants={menuVariants}
        transition={menuTransition}
      >
        MENU
      </MenuContainer>
    </HamburgerMenuContainer>
  );
};

export default HamburgerMenu;
