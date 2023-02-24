import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import { COLORS } from '../consts';

/* App */
export const ArrayContainer = styled.div`
  margin: 0;
`
export const Bar = styled.div`
  display: inline-block;
  margin: 0 1px;
  margin-top: 10px;
  font-family: sans-serif;
  font-weight: 700;
`

export const AppDiv = styled.div`
  overflow: hidden;
  text-align: center;
`

/* Navbar */

export const NavElement = styled(Nav)`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const DropdownHeader = styled(Dropdown.ItemText)`
  font-weight: bold;
  background-color: rgba(0,0,0, 0.1);
`

/* Footer */
export const FooterElement = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 3em;
`;

export const FooterText = styled.div`
  color: white;
  font-size: 1rem;

& .icon {
  color: rgb(97, 218, 251);
  vertical-align: middle;
  transform: scale(1) rotate(0deg);
  animation: 3s infinite react-animate ease-in-out;

  @keyframes react-animate {
    0% {
      transform: scale(1) rotate(0deg);
    }
    25% {
      transform: scale(1.2) rotate(180deg);
    }
    50% {
      transform: scale(1) rotate(360deg);
    }
      100% {
      transform: scale(1) rotate(360deg);
    }
  }
}
a:link, a:visited {
  color: white;
}
a:hover {
  color: blue;
}
`;

