// UserRecipesScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const fetchUserRecipes = async () => {

    const response = await fetch('https://example.com/api/user/recipes');
    const data = await response.json();
    return data.recipes;
};

const UserRecipesScreen = ({ navigation }) => {
    const [userRecipes, setUserRecipes] = useState([]);

    useEffect(() => {
        const loadUserRecipes = async () => {
            const recipes = await fetchUserRecipes();
            setUserRecipes(recipes);
        };
        loadUserRecipes();
    }, []);

    const renderUserRecipeItem = ({ item }) => (
        <TouchableOpacity 
            style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}
            onPress={() => navigation.navigate('DétailRecette', { recipeId: item.id })}
        >
            <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
            <Text>{item.description}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={userRecipes}
                renderItem={renderUserRecipeItem}
                keyExtractor={item => item.id.toString()}
                ListEmptyComponent={<Text>Aucune recette disponible pour le moment</Text>}
            />
        </View>
    );
}

export default UserRecipesScreen;
