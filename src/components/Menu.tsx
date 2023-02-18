import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import { FaGithub } from 'react-icons/fa';
import logo from '../assets/logo_32.png';


import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useEffect, useState } from 'react';
import { generateArray, animateSort } from '../utils';
import { consts } from '../consts';

interface IProps {
    array: Array<number>;
    setArray: React.Dispatch<React.SetStateAction<number[]>>;
}

const Menu = (props: IProps) => {
    const [algorithm, setAlgorithm] = useState('');
    const [isSortingRunnable, setIsSortingRunnable] = useState(false);
    const [arraySize, setArraySize] = useState(50);

    useEffect(() => refreshArray(), [arraySize])

    const refreshArray = () => {
        let length = Math.floor((arraySize + 3) * 1.65)
        const array = generateArray(length);
        props.setArray(array);
    }

    const handleSortClick = async () => {
        setIsSortingRunnable(false);
        let length = Math.floor((arraySize + 3) * 1.65)
        console.log(Math.pow(length, 2));
        const speed = 1000 - Math.pow(length, 2) > 0 ?
            1000 - Math.pow(length, 2) : 5;
        await animateSort(props.array, algorithm, speed, setIsSortingRunnable)
    }

    const handleAlgorithmClick = (algorithm: string) => {
        if (isSortingRunnable === false) setIsSortingRunnable(true);
        setAlgorithm(algorithm)
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                    {' Sorting Visualizer'}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Button className='w-100' size="sm" variant="outline-light" onClick={refreshArray}>{'Scramble'}</Button>
                        <Form.Range className='h-auto' min={1} max={101} step={10} value={arraySize} onChange={(e) => setArraySize(Number(e.target.value))} />
                        <Form.Select value={algorithm} onChange={(e) => handleAlgorithmClick(e.target.value)}>
                            <option value=''>Select Algo...</option>
                            <option value={consts.MERGE_SORT}>Merge Sort</option>
                            <option value={consts.BUBBLE_SORT}>Bubble Sort</option>
                            <option value={consts.QUICK_SORT}>Quick Sort</option>
                            <option value={consts.HEAP_SORT}>Heap Sort</option>
                        </Form.Select>


                        <NavDropdown title="Algorithms" id="collasible-nav-dropdown">
                            <NavDropdown.Item onClick={() => handleAlgorithmClick(consts.MERGE_SORT)} >Merge Sort</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => handleAlgorithmClick(consts.BUBBLE_SORT)}> Bubble Sort </NavDropdown.Item>
                            <NavDropdown.Item onClick={() => handleAlgorithmClick(consts.QUICK_SORT)} >Quick Sort</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={() => handleAlgorithmClick(consts.HEAP_SORT)} > Heap Sort </NavDropdown.Item>
                        </NavDropdown>
                        <Button className='w-100' variant="outline-primary" disabled={!isSortingRunnable} onClick={handleSortClick}>
                            {'Sort!'}
                        </Button>
                    </Nav>
                    <Nav>
                        <FaGithub className='h-auto text-white' />
                        <Nav.Link href="https://github.com/birkagal/"
                            target="_blank">Source on Github</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

// const Menu = () => {
//     return (
//         <Navbar bg="dark" variant="dark">
//             <Container>
//                 <Navbar.Brand href="#home">
//                     <img
//                         alt=""
//                         src="https://raw.githubusercontent.com/Myphz/sortvisualizer/master/static/images/favicon.ico"
//                         width="30"
//                         height="30"
//                         className="d-inline-block align-top"
//                     />{' '}
//                     Sorting Visualizer
//                 </Navbar.Brand>                <Nav className="me-auto">
//                     <Nav.Link href="#home">Home</Nav.Link>
//                     <Nav.Link href="#features">Features</Nav.Link>
//                     <Nav.Link href="#pricing">Pricing</Nav.Link>
//                 </Nav>
//             </Container>
//         </Navbar>
//     );
// }

// export default Menu;