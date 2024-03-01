// UserRecipesScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

// Fonction pour récupérer les recettes de l'utilisateur depuis une source de données
const fetchUserRecipes = async () => {
    // Par exemple, vous pouvez utiliser une API pour récupérer les recettes de l'utilisateur
    // Ici, je simule une requête à une API fictive qui renvoie des recettes
    const response = await fetch('https://example.com/api/user/recipes');
    const data = await response.json();
    return data.recipes;
};

const UserRecipesScreen = ({ navigation }) => {
    const [userRecipes, setUserRecipes] = useState([]);

    // Chargement des recettes de l'utilisateur lors du montage du composant
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
