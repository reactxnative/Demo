import { StyleSheet, Text, TextStyle, TouchableOpacity } from "react-native";
import React from 'react';

export interface TextButtonProps {
    label: string; // The main label text
    highlightLabel: string; // The highlighted label text that triggers the onPress action
    onPress: () => void; // Function to be called when the highlight label is pressed
    signIn?: TextStyle; // Optional custom style for the highlight label
}

export const TextButton: React.FC<TextButtonProps> = ({ label, highlightLabel, onPress, signIn }) => {
    return (
        <Text style={styles.alreadyAccount}>
            {label + ' '}
            <TouchableOpacity onPress={onPress}>
                <Text style={signIn ? signIn : styles.signIn}>
                    {highlightLabel}
                </Text>
            </TouchableOpacity>
        </Text>
    );
}

const styles = StyleSheet.create({
    alreadyAccount: {
        fontSize: 14,
        lineHeight: 16,
        textAlign: 'center',
        color: '#87898E',
    },
    signIn: {
        fontSize: 14,
        lineHeight: 16,
        textAlign: 'center',
        color: '#407AFF',
        fontWeight: '400',
        //textDecorationLine: 'underline' // Uncomment if you want to underline the text
    }
});

export default TextButton;
