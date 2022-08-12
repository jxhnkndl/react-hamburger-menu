import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// main navbar toggle button
const Button = styled.div`
  z-index: 99;
  cursor: pointer;
`;

// svg icon path
const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeLinecap="round"
    strokeWidth="3"
    {...props}
  />
);

const transition = { duration: 0.3 };

// toggle state =>
// isOpen state => whether menu container is open or closed

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Button onClick={toggle}>

      {/* svg is the hamburger menu */}
      {/* viewBox: x y width height */}
      <svg width="23" height="23" viewBox="0 0 23 23">
        
        {/* each path represents one line in the hamburger */}

        {/* top line */}
        <Path
          animate={isOpen ? 'open' : 'closed'}
          initial={false}
          variants={{
            // specifies line position when menu is open or closed
            closed: { d: 'M 2 2.5 L 20 2.5', stroke: 'hsl(0, 0%, 100%)' },
            open: { d: 'M 3 16.5 L 17 2.5', stroke: 'hsl(0, 0%, 18%)' },
          }}
          transition={transition}
        />

        {/* middle line */}
        <Path
          d="M 2 9.423 L 20 9.423"
          stroke="hsl(0, 0%, 100%)"
          animate={isOpen ? 'open' : 'closed'}
          initial={false}
          variants={{
            // when menu is closed, middle line is visible between top and bottom lines
            // when menu is closed, middle line disappears behind the cross formed by
            // the top and bottom lines
            closed: { opacity: 1 },
            open: { opacity: 0 }
          }}
          transition={transition}
        />

        {/* bottom line */}
        <Path
          animate={isOpen ? 'open' : 'closed'}
          initial={false}
          variants={{
            // specifies line position when menu is open or closed
            closed: { d: 'M 2 16.346 L 20 16.346', stroke: 'hsl(0, 0%, 100%)' },
            open: { d: 'M 3 2.5 L 17 16.346', stroke: 'hsl(0, 0%, 18%)' },
          }}
          transition={transition}
        />
      </svg>
    </Button>
  );
};

export default MenuToggle;
