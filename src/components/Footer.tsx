import { FaReact } from 'react-icons/fa';
import { FooterElement, FooterText } from '../styles/styled';

const Footer = () => (
    <FooterElement className='bg-transparent' >
        <FooterText>
            {'Built by '}
            <a href='https://birkagal.com' target='_blank'>{'Gal Birka'}</a>
            {' with React.js '}
            <FaReact className='icon' />
        </FooterText>
    </FooterElement>
)

export default Footer;