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

interface IProps {
    array: Array<number>;
    setArray: React.Dispatch<React.SetStateAction<number[]>>;
}

const Menu = (props: IProps) => {
    const [algorithm, setAlgorithm] = useState('');
    const [isSortingRunnable, setIsSortingRunnable] = useState(false);
    const [isSortingRunning, setIsSortingRunning] = useState(false);
    const [sizeInput, setSizeInput] = useState(50);

    useEffect(() => refreshArray(), [sizeInput])

    const refreshArray = () => {
        let length = Math.floor((sizeInput + 3) * 1.65)
        const array = generateArray(length);
        props.setArray(array);
    }

    const handleSortClick = async () => {
        setIsSortingRunnable(false);
        setIsSortingRunning(true);
        let length = Math.floor((sizeInput + 3) * 1.65)
        console.log(Math.pow(length, 2));
        const speed = 1000 - Math.pow(length, 2) > 0 ?
            1000 - Math.pow(length, 2) : 8;
        await animateSort(props.array, algorithm, speed, setIsSortingRunnable)
        setIsSortingRunning(false);

    }

    const handleAlgorithmClick = (algorithm: string) => {
        if (algorithm === '') setIsSortingRunnable(false);
        else if (isSortingRunnable === false) setIsSortingRunnable(true);
        setAlgorithm(algorithm)
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
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
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto" style={{ width: '70%' }} >
                        <Button
                            className='ms-3'
                            disabled={isSortingRunning}
                            variant="outline-light"
                            onClick={refreshArray}>
                            {'Scramble'}
                        </Button>
                        <Form.Select
                            className='mx-3'
                            disabled={isSortingRunning}
                            value={algorithm}
                            onChange={(e) => handleAlgorithmClick(e.target.value)}>
                            <option value=''>{'Select Algorithm...'}</option>
                            <option value={consts.MERGE_SORT}>{'Merge Sort'}</option>
                            <option value={consts.BUBBLE_SORT}>{'Bubble Sort'}</option>
                            <option value={consts.QUICK_SORT}>{'Quick Sort'}</option>
                            <option value={consts.HEAP_SORT}>{'Heap Sort'}</option>
                        </Form.Select>
                        <Button
                            style={{ width: '100%' }}
                            className='px-3'
                            variant="outline-primary"
                            disabled={!isSortingRunnable}
                            onClick={handleSortClick}>
                            {isSortingRunning ? 'Sorting...'
                                : algorithm === '' ? 'Choose an algorithm' : 'Sort!'
                            }
                        </Button>
                        <Form.Range
                            className='mx-3 h-auto'
                            disabled={isSortingRunning}
                            min={1}
                            max={101}
                            step={10}
                            value={sizeInput}
                            onChange={(e) => setSizeInput(Number(e.target.value))} />
                    </Nav>
                    <Nav>
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