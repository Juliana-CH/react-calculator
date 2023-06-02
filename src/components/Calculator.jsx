import React, { useState } from 'react';
import './Calculator.css';
import Container from '@mui/material/Container';
import { Box } from '@mui/material';

export default function Calculator() {
    const [num, setNum] = useState(0);
    const [firstNum, setFirstNum] = useState(0);
    const [operator, setOperator] = useState();

    function inputNum(e) {
        let input = e.target.value;
        if ( num === 0 ) {
            setNum(input)
        } else {
            setNum(num + input);
        }
    };

    function clear() {
        setNum(0)
    };

    function percentage() {
        setNum(num / 100);
    };

    function changeSign() {
        if ( num > 0 ) {
            setNum(-num);
        } else {
            setNum(num * (-1));
        }
    };

    function operatorHandler(e) {
        let operatorInput = e.target.value;
        setOperator(operatorInput);
        setFirstNum(num);
        setNum(0);
    };

    function calculate() {
        if ( operator === '/') {
            setNum ( parseFloat(firstNum) / parseFloat(num));
        } else if ( operator === 'x') {
            setNum ( parseFloat(firstNum) * parseFloat(num));
        } else if ( operator === '+') {
            setNum ( parseFloat(firstNum) + parseFloat(num));
        } else if ( operator === '-') {
            setNum ( parseFloat(firstNum) - parseFloat(num));
        }
    };
    
return (
    <>
    <Box m={5}>
    <Container maxWidth='xs'>
        <div className='calculator-container'>
        <h1>My Calculator Project</h1>
            <div className='wrapper'>
                <Box m={8} />
                <h2 className='result'>{num}</h2>
                <button className='lighter-button' onClick={clear}>AC</button>
                <button className='lighter-button' onClick={changeSign}>+/-</button>
                <button className='lighter-button' onClick={percentage}>%</button>
                <button className='sign-button' onClick={operatorHandler} value='/'>/</button>
                <button onClick={inputNum} value={7}>7</button>
                <button onClick={inputNum} value={8}>8</button>
                <button onClick={inputNum} value={9}>9</button>
                <button className='sign-button' onClick={operatorHandler} value='x'>x</button>
                <button onClick={inputNum} value={4}>4</button>
                <button onClick={inputNum} value={5}>5</button>
                <button onClick={inputNum} value={6}>6</button>
                <button className='sign-button' onClick={operatorHandler} value='-'>-</button>
                <button onClick={inputNum} value={1}>1</button>
                <button onClick={inputNum} value={2}>2</button>
                <button onClick={inputNum} value={3}>3</button>
                <button className='sign-button' onClick={operatorHandler} value='+'>+</button>
                <button className='double-button' onClick={inputNum} value={0}>0</button>
                <button onClick={inputNum} value={'.'}>,</button>
                <button className='sign-button' onClick={calculate}>=</button>
            </div>
        </div>
    </Container>
    </Box> 
    </>
)};