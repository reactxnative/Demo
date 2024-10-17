import { Image, ImageStyle, Pressable, StyleSheet, Text } from "react-native"
import React from 'react';
import { logo } from "../assets";

export interface ImageProps {
    logoStyle?: ImageStyle
}

export const LogoImage = (props: ImageProps) => {
    const { logoStyle } = props
    return (
        <Image source={logo}
            style={logoStyle ? logoStyle : styles.logo}
        />
    )
}

const styles = StyleSheet.create({

    logo: {
        height: 280,
        width: 382,
        resizeMode: 'cover',
        marginBottom: 82
    },


});

export default LogoImage;