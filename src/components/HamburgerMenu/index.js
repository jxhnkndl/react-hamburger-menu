import React, { useState } from 'react';
import MenuToggle from '../MenuToggle';
import NavMenu from '../NavMenu';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

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
  transform: translateX(4em);
  user-select: none;
  padding: 1em 2.5em;
`;

// top container for login and signup buttons at the top of the nav menu
const TopContainer = styled.div`
  display: flex;
  width: 100%;
`;

// container for displaying font awesome icons
const IconContainer = styled.div`
  font-size: 16px;
  color: #555;
  padding-right: 5px;
`;

// login button component for top container in nav menu
const LoginButton = styled(motion.button)`
  border: 0;
  background: transparent;
  color: #555;
  font-size: 14px;
  font-weight: 700;
  transition: all 250ms ease-in-out;
  display: flex;
  cursor: pointer;
  padding: 6px 12px;

  &:hover {
    color: #666;
  }

  &:focus {
    outline: none;
  }

  &:not(:last-of-type) {
    border-right: 1px solid #b1b1b1;
  }
`;

// container for holding all nav links in the nav menu under the top container
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
`;

// hamburger menu container animation variants
// these control how the menu animates based on whether it's open or closed
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

// animation variants for top container in nav menu
const commonVariants = {
  show: {
    transform: 'translateX(0em)',
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.01,
    },
  },
  hide: {
    transform: 'translateX(5em)',
    opacity: 0,
  },
};

// transition properties for top container animation in nav menu
const commonTransition = {
  type: 'spring',
  duration: 0.05,
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
        <TopContainer>
          {/* LOGIN */}
          <LoginButton
            initial={false}
            animate={isOpen ? 'show' : 'hide'}
            variants={commonVariants}
            transition={commonTransition}
          >
            <IconContainer>
              <FontAwesomeIcon icon={faUserCircle} />
            </IconContainer>
            LOGIN
          </LoginButton>
          {/* JOIN US */}
          <LoginButton
            initial={false}
            animate={isOpen ? 'show' : 'hide'}
            variants={commonVariants}
            transition={commonTransition}
          >
            JOIN US
          </LoginButton>
        </TopContainer>
        <ContentContainer>
          <NavMenu isOpen={isOpen} />
        </ContentContainer>
      </MenuContainer>
    </HamburgerMenuContainer>
  );
};

export default HamburgerMenu;
