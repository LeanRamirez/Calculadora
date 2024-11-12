import React, { useEffect, useRef, useState } from 'react'


enum Operator {
    add = '+',
    substract = '-',
    multiply = 'x',
    divide = '÷',
}

export const UseCalculator = () => {

    const [formula, setFormula] = useState('')
    const [number, setNumber] = useState('0')
    const [prevNumber, setPrevNumber] = useState('0')

    const lastOperation = useRef<Operator>();



    useEffect(() => {

        if (lastOperation.current) {
            const firstFormulaPart = formula.split(' ').at(0);
            setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`)
        } else {
            setFormula(number);
        }
    }, [number])

    useEffect(() => {
        const subResult = calculateSubResult();
        setPrevNumber(`${subResult}`)
    }, [formula])



    const clean = () => {

        setNumber('0')
        setPrevNumber('0')
        lastOperation.current = undefined;
        setFormula('')

    }

    const deleteOperation = () => {
        let currentSign = '';
        let temporalNumber = number;

        if (number.includes('-')) {
            currentSign = '-';
            temporalNumber = number.substring(1)
        }


        if (temporalNumber.length > 1) {
            return setNumber(currentSign + temporalNumber.slice(0, -1))
        }

        setNumber('0');

    }

    const toggleSign = () => {
        if (number.includes('-')) {
            return setNumber(number.replace('-', ''))
        }
        setNumber('-' + number)
    }



    const buildNumber = (numberString: string) => {
        if (number.includes('.') && numberString === '.') return;

        if (number.startsWith('0') || numberString.startsWith('-0')) {
            //esto es para usar el punto decimal
            if (numberString === '.') {
                return setNumber(number + numberString);
            }
            //evaluar si es otro cero y no hay punto
            if (numberString === '0' && number.includes('.')) {
                return setNumber(number + numberString);
            }
            //evaluar si es diferente a cero, no hay punto y es el primer numero
            if (numberString !== '0' && !number.includes('.')) {
                return setNumber(numberString);
            }
            //evitar repeticion de 0
            if (numberString === '0' && !number.includes('.')) {
                return
            }
            return setNumber(number + setNumber)
        }



        setNumber(number + numberString)

    }

    const setLastNumber = () => {
        calculateResult();

        if (number.endsWith('.')) {
            setPrevNumber(number.slice(0, -1));
        } else {
            setPrevNumber(number);
        }

        setNumber('0')
    }

    const divideOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.divide;
    }


    const multiplyOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.multiply;
    }


    const addOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.add;
    }


    const substractOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.substract;
    }

    const calculateResult = () => {
        const result = calculateSubResult();
        setFormula(`${result}`);
        lastOperation.current = undefined;

        setPrevNumber('0')
    }

    const calculateSubResult = (): number => {

        const [firstValues, oparetion, secondValue] = formula.split(' ')
        const num1 = Number(firstValues);
        const num2 = Number(secondValue);

        if (isNaN(num2)) return num1;

        switch (oparetion) {
            case Operator.add:
                return num1 + num2;

            case Operator.substract:
                return num1 - num2;

            case Operator.multiply:
                return num1 * num2;

            case Operator.divide:
                return num1 / num2;


            default:
                throw new Error('La operacion no es soportada');
        }
    }

    return {

        //propperties
        number,
        prevNumber,
        formula,




        //methods
        buildNumber,
        clean,
        deleteOperation,
        toggleSign,
        divideOperation,
        multiplyOperation,
        substractOperation,
        addOperation,
        calculateResult
    }
}
