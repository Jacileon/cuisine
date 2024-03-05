import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, View } from 'react-native';
import HomeScreen from './HomeScreen/HomeScreen';

const Stack = createStackNavigator();

const App = () => {
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSplash(false);
        }, 3500); //ici c est pour ajouter la duree 5s multiplier par 1000

        return () => clearTimeout(timer);
    }, []);

    return (
        <NavigationContainer>
            {showSplash ? (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('./46f822f60c0b66d36c38771e5967f1eb.jpg')} style={{ width: '100%', height: '50%' }} resizeMode="cover" />
                </View>
            ) : (
                <Stack.Navigator>
                    {/* Écran d'accueil */}
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{ headerShown: false }} // Cacher l'en-tête de navigation
                    />
                </Stack.Navigator>
            )}
        </NavigationContainer>
    );
}

export default App;
