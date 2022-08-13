import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// nav menu container
const NavMenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

// nav list
const NavList = styled.ul`
  padding: 0 0.8em;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

// individual nav links
const NavLink = styled(motion.li)`
  font-weight: 600;
  color: #444;
  height: 35px;
  display: flex;
  align-items: center;
  cursor: pointer;

  a {
    text-decoration: none;
    color: #444;
    font-size: 18px;
    transition: all 200ms ease-in-out;
  }

  &:hover {
    a {
      color: #555;
    }
  }
`;

// individal nav link animation variants
// these control how individual nav links animate based on whether
// the menu container is open or closed
const navLinkVariants = {
  show: {
    transform: 'translateX(0)',
    opacity: 1,
  },
  hide: {
    transform: 'translateX(5em)',
    opacity: 0,
  },
};

const NavMenu = ({ isOpen }) => {
  return (
    <NavMenuContainer>
      <NavList>
        {/* the animate prop uses the show/hide variants to control 
            the link's animation behavior based on isOpen state */}
        <NavLink
          inital={false}
          animate={isOpen ? 'show' : 'hide'}
          variants={{
            // control link animation when menu opens
            show: {
              ...navLinkVariants.show,
              transition: { delay: 0.3, duration: 0.2 },
            },
            // control link animation when menu closes
            hide: { 
              ...navLinkVariants.hide,
              transition: { delay: 0.05, duration: 0.05 }
            },
          }}
        >
          <a href="http://localhost:3000/">HOME</a>
        </NavLink>
      </NavList>
    </NavMenuContainer>
  );
};

export default NavMenu;
