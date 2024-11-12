import { StyleSheet } from "react-native";



export const colors = {
    darkGrey: '#2D2D2D',
    lightGrey: '#9B9B9B',
    orange: '#FF9427',

    textPrimary: 'white',
    textSecondary: '#666666',
    background: '#000000'
}


export const globlalStyles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: colors.background,
    },
    calculatorContainer: {
        flex: 1,
        padding: 20,
        justifyContent: 'flex-end'
    },
    mainResult: {
        color: colors.textPrimary,
        fontSize: 70,
        textAlign: 'right',
        marginBottom: 10,
        fontWeight: '300'
    },
    subResult: {
        color: colors.textSecondary,
        fontSize: 40,
        textAlign: 'right',
        fontWeight: '400'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
        paddingHorizontal: 10
    },
    button: {
        height: 80,
        width: 80,
        backgroundColor: colors.darkGrey,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10,

    },
    buttonText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'white',
        fontWeight: '300'
    }
})
