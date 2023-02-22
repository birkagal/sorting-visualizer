import styled from 'styled-components';
import { FaReact, } from 'react-icons/fa';

const FooterElement = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 3em;
`;

const FooterText = styled.div`
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


function Footer() {
    return (
        <FooterElement className='bg-transparent' >
            <FooterText>
                Built by
                {' '}
                <a href='https://birkagal.com' target='_blank'>{'Gal Birka'}</a>
                {' '}
                with React.js
                {' '}
                <FaReact className="icon" />
            </FooterText>
        </FooterElement>
    );
}

export default Footer;