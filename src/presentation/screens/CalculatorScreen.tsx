import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { colors, globlalStyles } from '../../config/theme/App-theme'
import { CalculatorButton } from '../components/CalculatorButton'
import { UseCalculator } from '../hooks/UseCalculator'

export const CalculatorScreen = () => {

    const {
        formula,
        number,
        buildNumber,
        prevNumber,
        clean,
        deleteOperation,
        toggleSign,
        multiplyOperation,
        substractOperation,
        divideOperation,
        addOperation,
        calculateResult
    } = UseCalculator();



    return (
        <View style={globlalStyles.calculatorContainer}>
            <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>

                <Text
                    adjustsFontSizeToFit
                    numberOfLines={1}
                    style={globlalStyles.mainResult}>{formula}</Text>


                {
                    (prevNumber && formula !== prevNumber) && (
                        <Text
                            adjustsFontSizeToFit
                            numberOfLines={1}
                            style={globlalStyles.subResult}
                        >
                            {prevNumber}
                        </Text>
                    )
                }





            </View>

            <View style={globlalStyles.row}>
                <CalculatorButton onPress={clean} blackText label='C' color={colors.lightGrey} />
                <CalculatorButton onPress={toggleSign} blackText label='+/-' color={colors.lightGrey} />
                <CalculatorButton onPress={deleteOperation} blackText label='del' color={colors.lightGrey} />
                <CalculatorButton onPress={divideOperation} label='÷' color={colors.orange} />
            </View>
            <View style={globlalStyles.row}>
                <CalculatorButton onPress={() => buildNumber('7')} label='7' />
                <CalculatorButton onPress={() => buildNumber('8')} label='8' />
                <CalculatorButton onPress={() => buildNumber('9')} label='9' />
                <CalculatorButton onPress={multiplyOperation} label='x' color={colors.orange} />
            </View>
            <View style={globlalStyles.row}>
                <CalculatorButton onPress={() => buildNumber('4')} label='4' />
                <CalculatorButton onPress={() => buildNumber('5')} label='5' />
                <CalculatorButton onPress={() => buildNumber('6')} label='6' />
                <CalculatorButton onPress={substractOperation} label='-' color={colors.orange} />
            </View>
            <View style={globlalStyles.row}>
                <CalculatorButton onPress={() => buildNumber('1')} label='1' />
                <CalculatorButton onPress={() => buildNumber('2')} label='2' />
                <CalculatorButton onPress={() => buildNumber('3')} label='3' />
                <CalculatorButton onPress={addOperation} label='+' color={colors.orange} />
            </View>
            <View style={globlalStyles.row}>
                <CalculatorButton onPress={() => buildNumber('0')}
                    doubleSize
                    label='0'
                />
                <CalculatorButton onPress={() => buildNumber('.')}
                    label='.'
                />
                <CalculatorButton onPress={calculateResult}
                    label='='
                    color={colors.orange}
                />
            </View>

        </View>
    )
}


