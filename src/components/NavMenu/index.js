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
  height: 42px;
  display: flex;
  align-items: center;
  cursor: pointer;

  a {
    text-decoration: none;
    color: #444;
    font-size: 20px;
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
    transform: 'translateX(0em)',
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
            the link's animation behavior based on isOpen state.
            the end goal is to have each link animate in or out
            sequentially when the nav menu opens or closes */}

        {/* LINK 1: Home */}
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
          <a href="http://localhost:3000/">Home</a>
        </NavLink>

        {/* LINK 2: Products */}
        <NavLink
          inital={false}
          animate={isOpen ? 'show' : 'hide'}
          variants={{
            // control link animation when menu opens
            show: {
              ...navLinkVariants.show,
              transition: { delay: 0.4, duration: 0.2 },
            },
            // control link animation when menu closes
            hide: { 
              ...navLinkVariants.hide,
              transition: { delay: 0.1, duration: 0.05 }
            },
          }}
        >
          <a href="http://localhost:3000/">Products</a>
        </NavLink>

        {/* LINK 3: Key Benefits */}
        <NavLink
          inital={false}
          animate={isOpen ? 'show' : 'hide'}
          variants={{
            // control link animation when menu opens
            show: {
              ...navLinkVariants.show,
              transition: { delay: 0.5, duration: 0.2 },
            },
            // control link animation when menu closes
            hide: { 
              ...navLinkVariants.hide,
              transition: { delay: 0.15, duration: 0.05 }
            },
          }}
        >
          <a href="http://localhost:3000/">Key Benefits</a>
        </NavLink>

        {/* LINK 4: About */}
        <NavLink
          inital={false}
          animate={isOpen ? 'show' : 'hide'}
          variants={{
            // control link animation when menu opens
            show: {
              ...navLinkVariants.show,
              transition: { delay: 0.6, duration: 0.2 },
            },
            // control link animation when menu closes
            hide: { 
              ...navLinkVariants.hide,
              transition: { delay: 0.2, duration: 0.05 }
            },
          }}
        >
          <a href="http://localhost:3000/">About</a>
        </NavLink>

        {/* LINK 5: FAQ */}
        <NavLink
          inital={false}
          animate={isOpen ? 'show' : 'hide'}
          variants={{
            // control link animation when menu opens
            show: {
              ...navLinkVariants.show,
              transition: { delay: 0.7, duration: 0.2 },
            },
            // control link animation when menu closes
            hide: { 
              ...navLinkVariants.hide,
              transition: { delay: 0.25, duration: 0.05 }
            },
          }}
        >
          <a href="http://localhost:3000/">FAQ</a>
        </NavLink>
        
        {/* LINK 6: Contact */}
        <NavLink
          inital={false}
          animate={isOpen ? 'show' : 'hide'}
          variants={{
            // control link animation when menu opens
            show: {
              ...navLinkVariants.show,
              transition: { delay: 0.8, duration: 0.2 },
            },
            // control link animation when menu closes
            hide: { 
              ...navLinkVariants.hide,
              transition: { delay: 0.3, duration: 0.05 }
            },
          }}
        >
          <a href="http://localhost:3000/">Contact</a>
        </NavLink>
        
      </NavList>
    </NavMenuContainer>
  );
};

export default NavMenu;
