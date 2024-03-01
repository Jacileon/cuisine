import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Import de RecipeCategoriesScreen
import RecipeCategoriesScreen from './Screen/RecipeCategoriesScreen';

// Import des écrans associés
import FavoritesScreen from './FavoritesScreen';
import AddRecipeScreen from './AddRecipeScreen';
import UserRecipesScreen from './UserRecipesScreen';
import AccountScreen from './AccountScreen';

// Création du navigateur d'onglets
const Tab = createBottomTabNavigator();

// Définition du composant HomeScreen avec la barre de navigation
const HomeScreen = () => {
    return (
        <Tab.Navigator>
            {/* Onglet pour la catégorie des recettes */}
            <Tab.Screen 
                name="Acceuil" 
                component={RecipeCategoriesScreen} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" size={size} color={color} />
                    ),
                }}
            />
            {/* Onglet pour les favoris */}
            <Tab.Screen 
                name="Favoris" 
                component={FavoritesScreen} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="heart" size={size} color={color} />
                    ),
                }}
            />
            {/* Onglet pour ajouter une recette */}
            <Tab.Screen 
                name="Ajouter" 
                component={AddRecipeScreen} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="add-circle" size={size} color={color} />
                    ),
                }}
            />
            {/* Onglet pour les recettes de l'utilisateur */}
            <Tab.Screen 
                name="Mes recettes" 
                component={UserRecipesScreen} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="restaurant" size={size} color={color} />
                    ),
                }}
            />
            {/* Onglet pour le compte de l'utilisateur */}
            <Tab.Screen 
                name="Mon compte" 
                component={AccountScreen} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person" size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default HomeScreen;
