// AddRecipeScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

const AddRecipeScreen = () => {
    const [recipeName, setRecipeName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');

    const handleAddRecipe = () => {
        
        if (recipeName && ingredients && instructions) {
            // Enregistrez la recette
            Alert.alert('Succès', 'Recette ajoutée avec succès!');
          
            setRecipeName('');
            setIngredients('');
            setInstructions('');
        } else {
            Alert.alert('Erreur', 'Veuillez remplir tous les champs');
        }
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TextInput
                placeholder="Nom de la recette"
                value={recipeName}
                onChangeText={setRecipeName}
                style={{ marginBottom: 10, borderWidth: 1, padding: 8 }}
            />
            <TextInput
                placeholder="Ingrédients"
                value={ingredients}
                onChangeText={setIngredients}
                multiline
                style={{ marginBottom: 10, borderWidth: 1, padding: 8, height: 100 }}
            />
            <TextInput
                placeholder="Instructions"
                value={instructions}
                onChangeText={setInstructions}
                multiline
                style={{ marginBottom: 10, borderWidth: 1, padding: 8, height: 100 }}
            />
            <Button title="Ajouter la recette" onPress={handleAddRecipe} />
        </View>
    );
}

export default AddRecipeScreen;
