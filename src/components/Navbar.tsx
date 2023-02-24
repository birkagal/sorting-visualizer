import React, { useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import { default as BNavbar } from 'react-bootstrap/Navbar';
import { FaGithub } from 'react-icons/fa';
import logo from '../assets/logo_32.png';
import { ALGORITHMS, DEFAULT_ALGORITHM } from '../consts';
import { NavElement, DropdownHeader } from '../styles/styled';
import { generateArray, animateSort, normalize, capitalize } from '../utils';
import useWindowDimensions from '../hooks/useWindowDimensions';


interface IProps {
    array: Array<number>;
    setArray: React.Dispatch<React.SetStateAction<number[]>>;
}

const Navbar = (props: IProps) => {
    const [algorithm, setAlgorithm] = useState(DEFAULT_ALGORITHM);
    const [isSortRunning, setIsSortRunning] = useState(false);
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
        setIsSortRunning(true);
        let length = props.array.length
        const speed = 1000 - Math.pow(length, 2) > 0 ?
            1000 - Math.pow(length, 2) : 8;
        await animateSort(props.array, algorithm, speed)
        setIsSortRunning(false);
    }

    return (
        <BNavbar expanded={expanded} collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <BNavbar.Brand href="/#">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                    {' Sorting Visualizer'}
                </BNavbar.Brand>
                <BNavbar.Toggle onClick={() => setExpanded(!expanded)} aria-controls="responsive-navbar-nav" />
                <BNavbar.Collapse id="responsive-navbar-nav" >
                    <NavElement>
                        <Button
                            className='ms-3'
                            disabled={isSortRunning}
                            variant="outline-light"
                            onClick={refreshArray}>
                            {'Scramble'}
                        </Button>
                        <Dropdown className='mx-3' >
                            <Dropdown.Toggle
                                id="dropdown-button-dark-example1"
                                variant="outline-light"
                                disabled={isSortRunning}>
                                {'Algorithm'}
                            </Dropdown.Toggle>
                            <Dropdown.Menu className='text-center' variant="dark" onClick={(e: any) => setAlgorithm(e.target.name)}>
                                {Object.entries(ALGORITHMS).map(([key, value], index) => (
                                    <React.Fragment key={index}>
                                        <Dropdown.Divider />
                                        <DropdownHeader>{capitalize(key)}</DropdownHeader>
                                        <Dropdown.Divider />
                                        {Object.values(value).map((algorith, index) => (
                                            <Dropdown.Item key={index} name={algorith} active={algorithm === algorith}>
                                                {`${capitalize(algorith)} Sort`}
                                            </Dropdown.Item>

                                        ))}
                                    </React.Fragment>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                        <Button
                            className='px-3'
                            variant="outline-primary"
                            disabled={isSortRunning}
                            onClick={handleSortClick}>
                            {isSortRunning ? 'Sorting...' : 'Sort!'}
                        </Button>
                    </NavElement>
                    <NavElement className="me-auto">
                        <Form.Range
                            className='mx-3 h-auto'
                            disabled={isSortRunning}
                            min={1}
                            max={101}
                            step={10}
                            value={sizeInput}
                            onChange={(e) => setSizeInput(Number(e.target.value))} />
                    </NavElement>
                    <NavElement>
                        <FaGithub className='h-auto text-white' />
                        <Nav.Link href="https://github.com/birkagal/sorting-visualizer" target="_blank">
                            {'Source on Github'}
                        </Nav.Link>
                    </NavElement>
                </BNavbar.Collapse>
            </Container>
        </BNavbar >
    );
}

export default Navbar;