import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
    Dimensions,
    Image,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
const { width, height } = Dimensions.get('window');


const bgImage = require('../../assets/images/bg/bg.png');
const polygon4 = require('../../assets/images/bg/Polygon4.png');
const polygon7 = require('../../assets/images/bg/Polygon7.png');

// =================================================================

const theme = {
    primaryBlue: '#007BFF',
    lightBlueBackground: '#F0F7FF',
    white: '#FFFFFF',
    textColor: '#2D3748',
    grey: '#A0AEC0',
    black: '#232323',
    borderColor: '#c5dcf6',
};

// =================================================================

const PasswordInput = ({
    placeholder,
    value,
    onChangeText,
}: {
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
}) => {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={theme.grey}
                style={styles.input}
                secureTextEntry={!isVisible}
                value={value}
                onChangeText={onChangeText}
            />
            <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
                <Feather
                    name={isVisible ? 'eye' : 'eye-off'}
                    size={20}
                    color={theme.primaryBlue}
                />
            </TouchableOpacity>
        </View>
    );
};

// =================================================================

export default function ChangePasswordScreen() {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleResetPassword = () => {

        console.log('Resetting password...');
        router.back();
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={theme.white} />
            <View style={styles.backgroundContainer}>
                <Image source={bgImage} style={styles.backgroundImage} />
                <Image source={polygon4} style={styles.polygon4} />
                <Image source={polygon7} style={styles.polygon7} />
            </View>
            <View style={styles.content}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                        <Feather name="chevron-left" size={28} color={theme.primaryBlue} />
                    </TouchableOpacity>
                    <Text style={styles.title}>Change Password</Text>
                </View>

                <Text style={styles.instructions}>
                    At least 9 characters, with uppercase and lowercase letters.
                </Text>

                <View style={styles.form}>
                    <PasswordInput
                        placeholder="Current Password"
                        value={currentPassword}
                        onChangeText={setCurrentPassword}
                    />
                    <PasswordInput
                        placeholder="New Password"
                        value={newPassword}
                        onChangeText={setNewPassword}
                    />
                    <PasswordInput
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                    />
                </View>

                <TouchableOpacity style={styles.resetButton} onPress={handleResetPassword}>
                    <Text style={styles.resetButtonText}>Reset Password</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

// =================================================================

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.white,
    },
    backgroundContainer: {
        ...StyleSheet.absoluteFillObject,
        zIndex: 0,
    },
    content: {
        flex: 1,
        marginTop: 40,
        paddingHorizontal: 20,
        zIndex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 20,
        position: 'relative',
        justifyContent: 'center',
    },
    backButton: {
        position: 'absolute',
        left: 0,
        padding: 5,
    },
    title: {
        fontSize: 22,
        fontWeight: '700',
        color: theme.textColor,
    },
    instructions: {
        fontSize: 15,
        color: theme.black,
        textAlign: 'center',
        marginBottom: 40,
        lineHeight: 22,
    },
    form: {
        width: '100%',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.lightBlueBackground,
        borderWidth: 1,
        borderColor: theme.borderColor,
        borderRadius: 100,
        paddingHorizontal: 20,
        marginBottom: 20,
        height: 55,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: theme.textColor,
        paddingRight: 10,
    },
    resetButton: {
        backgroundColor: theme.primaryBlue,
        paddingVertical: 16,
        borderRadius: 100,
        alignItems: 'center',
        alignSelf: 'center',
        width: '60%',
        marginTop: 20,
        shadowColor: theme.primaryBlue,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 6,
    },
    resetButtonText: {
        color: theme.white,
        fontSize: 16,
        fontWeight: 'bold',
    },

    backgroundImage: {
        position: 'absolute',
        bottom: -height * 0.1,
        right: -width * 0.4,
        width: width,
        height: height * 0.5,
        resizeMode: 'contain',
        opacity: 0.2,
    },
    polygon4: {
        position: 'absolute',
        bottom: height * 0.15,
        right: 40,
        width: 60,
        height: 60,
        resizeMode: 'contain',
    },
    polygon7: {
        position: 'absolute',
        bottom: height * 0.1,
        left: 40,
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
});