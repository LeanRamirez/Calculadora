import React from 'react'
import { Pressable, Text } from 'react-native'
import { colors, globlalStyles } from '../../config/theme/App-theme'

interface Props {
    label: string;
    color?: string;
    doubleSize?: boolean;
    blackText?: boolean;
    onPress: () => void;
}

export const CalculatorButton = ({
    label,
    color = colors.darkGrey,
    doubleSize = false,
    blackText = false,
    onPress


}: Props) => {
    return (
        <Pressable
            onPress={() => onPress()}
            style={({ pressed }) => ({
                ...globlalStyles.button,
                backgroundColor: color,
                width: (doubleSize) ? 180 : 80,
                opacity: (pressed) ? 0.8 : 1
            })}>
            <Text style={{
                ...globlalStyles.buttonText,
                color: (blackText) ? 'black' : 'white'
            }}>{label}</Text>
        </Pressable>
    )
}
