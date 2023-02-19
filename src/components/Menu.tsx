import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaGithub } from 'react-icons/fa';
import { generateArray, animateSort } from '../utils';
import { consts } from '../consts';
import logo from '../assets/logo_32.png';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { normalize } from '../utils';


interface IProps {
    array: Array<number>;
    setArray: React.Dispatch<React.SetStateAction<number[]>>;
}

const Menu = (props: IProps) => {
    const [algorithm, setAlgorithm] = useState(consts.MERGE_SORT);
    const [isSortingRunning, setIsSortingRunning] = useState(false);
    const [sizeInput, setSizeInput] = useState(50);
    const [expanded, setExpanded] = useState(false);
    const { height, width } = useWindowDimensions();


    useEffect(() => refreshArray(), [sizeInput])

    const refreshArray = () => {
        let max_value = height * 0.8;
        let length = normalize(sizeInput, 1, 101, 6, Math.floor(width * 0.7 / 6));
        const array = generateArray(length, max_value);
        props.setArray(array);
    }

    const handleSortClick = async () => {
        if (expanded) setExpanded(false);
        setIsSortingRunning(true);
        let length = props.array.length
        const speed = 1000 - Math.pow(length, 2) > 0 ?
            1000 - Math.pow(length, 2) : 8;
        await animateSort(props.array, algorithm, speed)
        setIsSortingRunning(false);

    }

    return (
        <Navbar expanded={expanded} collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/#">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                    {' Sorting Visualizer'}
                </Navbar.Brand>
                <Navbar.Toggle onClick={() => setExpanded(!expanded)} aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav style={{ display: "flex", flexDirection: "row" }} >
                        <Button
                            className='ms-3'
                            disabled={isSortingRunning}
                            variant="outline-light"
                            onClick={refreshArray}>
                            {'Scramble'}
                        </Button>
                        <Form.Select
                            className='mx-3'
                            style={{ width: '10rem' }}
                            disabled={isSortingRunning}
                            value={algorithm}
                            onChange={(e) => setAlgorithm(e.target.value)}>
                            <option value={consts.MERGE_SORT}>{'Merge Sort'}</option>
                            <option value={consts.BUBBLE_SORT}>{'Bubble Sort'}</option>
                            <option value={consts.QUICK_SORT}>{'Quick Sort'}</option>
                            <option value={consts.HEAP_SORT}>{'Heap Sort'}</option>
                        </Form.Select>
                        <Button
                            style={{ width: '100%' }}
                            className='px-3'
                            variant="outline-primary"
                            disabled={isSortingRunning}
                            onClick={handleSortClick}>
                            {isSortingRunning ? 'Sorting...' : 'Sort!'}
                        </Button>

                    </Nav>
                    <Nav className="me-auto" style={{ height: '3rem', display: "flex", flexDirection: "row", justifyContent: 'center' }}>
                        <Form.Range
                            className='mx-3 h-auto'
                            disabled={isSortingRunning}
                            min={1}
                            max={101}
                            step={10}
                            value={sizeInput}
                            onChange={(e) => setSizeInput(Number(e.target.value))} />
                    </Nav>
                    <Nav style={{ display: "flex", flexDirection: "row", justifyContent: 'center' }}>
                        <FaGithub className='h-auto text-white' />
                        <Nav.Link href="https://github.com/birkagal/sorting-visualizer" target="_blank">
                            {'Source on Github'}
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;