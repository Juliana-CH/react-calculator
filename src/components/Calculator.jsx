import React, { useState } from 'react';
import './Calculator.css';
import Container from '@mui/material/Container';
import { Box } from '@mui/material';

export default function Calculator() {
    const[num, setNum] = useState(0);

    function inputNum(e) {
        let input = e.target.value
        setNum(input);
    }

    return (

        <>
        <Box m={5}>
        <Container maxWidth='xs'>
            <div className='calculator-container'>
            <h1>My Calculator Project</h1>
                <div className='wrapper'>
                    <Box m={8} />
                    <h2 className='result'>{num}</h2>
                    <button className='lighter-button'>AC</button>
                    <button className='lighter-button'>+/-</button>
                    <button className='lighter-button'>%</button>
                    <button className='sign-button'>/</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button className='sign-button'>x</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button className='sign-button'>-</button>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button className='sign-button'>+</button>
                    <button className='double-button'>0</button>
                    <button>,</button>
                    <button className='lighter-button'>=</button>
                </div>
            </div>
        </Container>
        </Box> 
        </>
    )
}