// FavoritesScreen.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const favoritesData = [
    { id: 1, name: 'Recette préférée 1' },
    { id: 2, name: 'Recette préférée 2' },
    { id: 3, name: 'Recette préférée 3' },
    
];

const FavoritesScreen = () => {
    const renderFavoriteItem = ({ item }) => (
        <TouchableOpacity style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <Text>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={favoritesData}
                renderItem={renderFavoriteItem}
                keyExtractor={item => item.id.toString()}
                ListEmptyComponent={<Text>Aucune recette favorite pour le moment</Text>}
            />
        </View>
    );
}

export default FavoritesScreen;
