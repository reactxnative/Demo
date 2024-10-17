import { Pressable, PressableProps, StyleSheet, Text, ViewStyle } from "react-native";
import React from 'react';

export interface ButtonProps {
    label: string;
    onPress: () => void;
    buttonStyle?: ViewStyle | PressableProps | undefined; // Updated to more specific type
}

export const Button: React.FC<ButtonProps> = ({ label, onPress, buttonStyle }) => {
    return (
        <Pressable
            onPress={onPress}
            style={buttonStyle ? buttonStyle : styles.buttonStyle}
        >
            <Text style={styles.buttonLabel}>{label}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    buttonLabel: {
        fontSize: 16,
        lineHeight: 16,
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
    },
    buttonStyle: {
        height: 61,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#407AFF',
        borderRadius: 32,
        paddingVertical: 16,
        width: '100%',
        marginTop: 18,
    },
});

export default Button;
