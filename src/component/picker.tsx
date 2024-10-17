import { ImageProps, KeyboardTypeOptions, Pressable, StyleSheet, Text, View, ViewProps } from "react-native";
import React from 'react';

export interface PickerProps {
    label?: string;
    value?: string;
    inputStyle?: object; // Change to a more specific type based on expected style
    placeholder: string;
    keyboardType?: KeyboardTypeOptions; // Optional
    inputContainerStyle?: ViewProps; // Use ViewProps for container style
    secureTextEntry?: boolean; // Optional for picker, might not be needed
    LeftIcon?: React.FC<ImageProps>; // Better typing for icon components
    RightIcon?: React.FC<ImageProps>; // Better typing for icon components
    onBlur?: () => void; // Correctly typed to match the onBlur event
    touched?: boolean; // Should be a boolean to indicate touched state
    errors?: string; // Error message
    onPress: () => void; // Function for when the picker is pressed
}

export const Picker: React.FC<PickerProps> = ({
    onPress,
    errors,
    touched,
    onBlur,
    LeftIcon,
    RightIcon,
    secureTextEntry,
    label,
    value,
    inputStyle,
    placeholder,
    keyboardType,
    inputContainerStyle,
}) => {
    return (
        <View style={inputContainerStyle ? inputContainerStyle : styles.inputContainer}>
            {label && <Text style={styles.label}>{label}</Text>}
            <Pressable style={styles.sectionStyle} onPress={onPress}>
                {LeftIcon && (
                    <View style={styles.imageStyle}>
                        <LeftIcon />
                    </View>
                )}

                <Text style={[styles.input, { color: value ? '#000' : '#DADADA' }]}>
                    {value ? value : placeholder}
                </Text>
                
                {RightIcon && (
                    <View style={styles.imageStyle2}>
                        <RightIcon />
                    </View>
                )}
            </Pressable>
            {touched && errors && <Text style={styles.errorText}>{errors}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    sectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#DADADA',
        height: 50,
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
        marginLeft: 5,
    },
    errorText: {
        color: 'red',
        marginTop: 10,
    },
});

export default Picker;
