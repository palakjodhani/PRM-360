import {
    CARBON_GREY,
    colors,
    DUST_STORM_GREY,
    SEASHELL_GREY,
    WHITE,
} from "@/theme/colors";
import React from 'react';
import { Pressable, StyleSheet, Text, TextStyle, ViewStyle } from 'react-native';

type Variant = 'filled' | 'outline' | 'text';

type ButtonProps = {
    title: string;
    variant?: Variant;
    onPress?: () => void;
    disabled?: boolean;
};

export const Button = ({
    variant = "filled",
    onPress,
    disabled = false,
    title
}: ButtonProps) => {
    const styles = getStyles(variant, disabled);

    return (
        <Pressable
            onPress={onPress}
            disabled={disabled}
            style={({ pressed }) => [
                styles.button,
                pressed && !disabled && styles.pressed,
            ]}
        >
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
};


const getStyles = (variant: Variant, disabled: boolean) => {
    const base: ViewStyle = {
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 999,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
    };

    const textBase: TextStyle = {
        fontSize: 16,
        fontWeight: "500",
    };

    const colorPrimary = colors.primary.blue;
    const disabledBg = DUST_STORM_GREY;
    const disabledText = CARBON_GREY;

    let button: ViewStyle = {};
    let text: TextStyle = {};
    let pressed: ViewStyle = { opacity: 0.85 };

    switch (variant) {
        case "filled":
            button = {
                ...base,
                backgroundColor: disabled ? disabledBg : colorPrimary,
                borderColor: disabled ? disabledBg : colorPrimary,
            };
            text = {
                ...textBase,
                color: WHITE,
            };
            break;

        case "outline":
            button = {
                ...base,
                backgroundColor: disabled ? SEASHELL_GREY : "transparent",
                borderColor: disabled ? disabledBg : colorPrimary,
            };
            text = {
                ...textBase,
                color: disabled ? disabledText : colorPrimary,
            };
            break;

        case "text":
            button = {
                ...base,
                backgroundColor: "transparent",
                borderColor: "transparent",
            };
            text = {
                ...textBase,
                color: disabled ? disabledText : colorPrimary,
                textDecorationLine: "underline",
            };
            break;
    }

    return StyleSheet.create({ button, text, pressed });
};
