import { isLoggedIn } from '@/lib/auth';
import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from 'react';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [loaded] = useFonts({
        SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    });

    useEffect(() => {
        if (loaded) {
            isLoggedIn().then(setLoggedIn);
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return <Slot initialRouteName={loggedIn ? "(tabs)" : "(auth)"} />;
}