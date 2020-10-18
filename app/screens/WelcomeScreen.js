import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'

const WelcomeScreen = () => {

    return (
        <ImageBackground style={styles.background} source={{ uri: "https://picsum.photos/1000/500" }}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={{ uri: "https://picsum.photos/100/100" }} />
                <Text>Sell what you Don't need</Text>
            </View>

            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    loginButton: {
        width: "100%",
        height: 70,
        backgroundColor: "#fc5c65"
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: "absolute",
        top: 50,
        alignItems: "center"
    },
    registerButton: {
        width: "100%",
        height: 70,
        backgroundColor: "#4ecdc4"
    }
})

export default WelcomeScreen
