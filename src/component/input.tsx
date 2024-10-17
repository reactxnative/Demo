import { ImageProps, KeyboardTypeOptions, StyleSheet, Text, TextInput, TextInputProps, View, ViewProps } from "react-native";
import React from 'react';

export interface InputProps {
    label?: string;
    value?: string;
    onChangeText: (text: string) => void;
    inputStyle?: TextInputProps; // Change to TextStyle for better type compatibility
    placeholder: string;
    keyboardType: KeyboardTypeOptions;
    inputContainerStyle?: ViewProps; // Should be ViewStyle
    secureTextEntry?: boolean;
    LeftIcon?: React.FC<ImageProps>; // Better typing for icon components
    RightIcon?: React.FC<ImageProps>; // Better typing for icon components
    onBlur?: () => void; // Correctly typed to match the onBlur event
    touched?: boolean; // Should be a boolean to indicate touched state
    errors?: string; // Error message
}

export const Input: React.FC<InputProps> = ({
    errors,
    touched,
    onBlur,
    LeftIcon,
    RightIcon,
    secureTextEntry,
    label,
    value,
    onChangeText,
    inputStyle,
    placeholder,
    keyboardType,
    inputContainerStyle,
}) => {
    return (
        <View style={inputContainerStyle ? inputContainerStyle : styles.inputContainer}>
            {label && <Text style={styles.label}>{label}</Text>}
            <View style={styles.sectionStyle}>
                {LeftIcon && (
                    <View style={styles.imageStyle}>
                        <LeftIcon />
                    </View>
                )}
                <TextInput
                    value={value}
                    onChangeText={onChangeText}
                    style={inputStyle ? inputStyle : styles.input}
                    placeholder={placeholder}
                    keyboardType={keyboardType}
                    secureTextEntry={secureTextEntry}
                    onBlur={onBlur}
                    placeholderTextColor={'#DADADA'}
                />
                {RightIcon && (
                    <View style={styles.imageStyle2}>
                        <RightIcon />
                    </View>
                )}
            </View>
            {touched && errors && <Text style={styles.errorText}>{errors}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    sectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#DADADA',
        borderRadius: 5,
    },
    imageStyle: {
        height: 20,
        width: 20,
        resizeMode: 'cover',
        marginLeft: 8,
    },
    imageStyle2: {
        height: 12,
        width: 15,
        resizeMode: 'cover',
        marginRight: 20,
    },
    inputContainer: {
        marginBottom: 16,
    },
    label: {
        fontSize: 14,
        lineHeight: 21,
        textAlign: 'left',
        color: '#000000',
        fontWeight: 'bold',
        marginBottom: 8,
    },
    input: {
        color: '#808080',
        textAlign: 'left',
        flex: 1,
    },
    errorText: {
        color: 'red',
        marginTop: 10,
    },
});

export default Input;
