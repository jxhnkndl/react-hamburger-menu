import React from 'react'
import styled from 'styled-components';

// create styled container for navbar
const NavbarContainer = styled.div`
  width: 100%;
  height: 55px;
  border-bottom: 1px solid #fff;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  padding: 0 1.5em;
`;

const Navbar = (props) => {
  return (
    <NavbarContainer>Navbar</NavbarContainer>
  )
}

export default Navbar