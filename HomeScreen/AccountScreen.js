// AccountScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

const AccountScreen = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Vérifiez les informations d'identification, par exemple avec une API ou une base de données
        if (username === 'utilisateur' && password === 'motdepasse') {
            setIsLoggedIn(true);
        } else {
            Alert.alert('Erreur', 'Nom d\'utilisateur ou mot de passe incorrect');
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUsername('');
        setPassword('');
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {isLoggedIn ? (
                <View>
                    <Text>Bienvenue, {username}!</Text>
                    <Button title="Se déconnecter" onPress={handleLogout} />
                </View>
            ) : (
                <View>
                    <TextInput
                        placeholder="Nom d'utilisateur"
                        value={username}
                        onChangeText={setUsername}
                        style={{ marginBottom: 10, borderWidth: 1, padding: 8 }}
                    />
                    <TextInput
                        placeholder="Mot de passe"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        style={{ marginBottom: 10, borderWidth: 1, padding: 8 }}
                    />
                    <Button title="Se connecter" onPress={handleLogin} />
                </View>
            )}
        </View>
    );
}

export default AccountScreen;
