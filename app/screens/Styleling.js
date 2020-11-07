import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import AppText from '../components/AppText/AppText'

const Styleling = () => {
    return (
        <View style={styles.container}>
            <View style={styles.box1}>
                <View style={styles.border}></View>
                <View style={styles.circle}></View>
                <View style={styles.shadow1}></View>
                <View style={styles.shadow2}></View>
                <View style={styles.blueBox}>
                    <View style={styles.goldBox}></View>
                </View>
            </View>

            <View style={styles.box2}>
                <AppText>I love React-Native</AppText>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50
    },
    box1: {
        flex: 0.5,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",

    },
    box2: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    border: {
        backgroundColor: "dodgerblue",
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: "royalblue",
        borderRadius: 10,
        borderTopWidth: 20,
        borderTopLeftRadius: 50,
        margin: 10,

    },
    circle: {
        backgroundColor: "dodgerblue",
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: "royalblue",
        borderRadius: 50,
        margin: 10,

    },
    shadow1: {
        width: 100,
        height: 100,
        backgroundColor: "dodgerblue",
        shadowColor: "grey",
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 1,
        margin: 10,
        shadowOpacity: 1,
        shadowRadius: 10

    },
    shadow2: {
        width: 100,
        height: 100,
        backgroundColor: "dodgerblue",
        shadowColor: "grey",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 1,
        shadowRadius: 10,
        margin: 10,
        elevation: 20
    },
    blueBox: {
        width: 100,
        height: 100,
        backgroundColor: "dodgerblue",
        padding: 20,
        paddingHorizontal: 10,
        paddingLeft: 30
    },
    goldBox: {
        width: 50,
        height: 50,
        backgroundColor: "gold",

    },
    text: {
        // fontFamily: "Roboto",
        fontSize: 30,
        fontStyle: "italic",
        fontWeight: "600",
        color: "tomato",
        textTransform: "capitalize",
        textAlign: "center",
        lineHeight: 30,
    }

})

export default Styleling

