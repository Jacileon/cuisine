import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importer le hook de navigation

const SauceScreen = () => {
  const navigation = useNavigation(); // Utiliser le hook de navigation

  // Exemple de données de sauce avec des images
  const sauces = [
    { id: 1, name: 'Sauce BBQ', image: require('./OIP (5).jpg') },
    { id: 2, name: 'Sauce tomate', image: require('./OIP (5).jpg') },
    { id: 3, name: 'Sauce béchamel', image: require('./OIP (5).jpg') },
    { id: 1, name: 'Sauce BBQ', image: require('./OIP (5).jpg') },
    { id: 2, name: 'Sauce tomate', image: require('./OIP (5).jpg') },
    { id: 3, name: 'Sauce béchamel', image: require('./OIP (5).jpg') },
    { id: 1, name: 'Sauce BBQ', image: require('./OIP (5).jpg') },
    { id: 2, name: 'Sauce tomate', image: require('./OIP (5).jpg') },
    { id: 3, name: 'Sauce béchamel', image: require('./OIP (5).jpg') },
    { id: 1, name: 'Sauce BBQ', image: require('./OIP (5).jpg') },
    { id: 2, name: 'Sauce tomate', image: require('./OIP (5).jpg') },
    { id: 3, name: 'Sauce béchamel', image: require('./OIP (5).jpg') },
    { id: 1, name: 'Sauce BBQ', image: require('./OIP (5).jpg') },
    { id: 2, name: 'Sauce tomate', image: require('./OIP (5).jpg') },
    { id: 3, name: 'Sauce béchamel', image: require('./OIP (5).jpg') },
    { id: 1, name: 'Sauce BBQ', image: require('./OIP (5).jpg') },
    { id: 2, name: 'Sauce tomate', image: require('./OIP (5).jpg') },
    { id: 3, name: 'Sauce béchamel', image: require('./OIP (5).jpg') },
    { id: 1, name: 'Sauce BBQ', image: require('./OIP (5).jpg') },
    { id: 2, name: 'Sauce tomate', image: require('./OIP (5).jpg') },
    { id: 3, name: 'Sauce béchamel', image: require('./OIP (5).jpg') },
    // Ajouter les autres sauces avec leurs images ici
  ];

  // Fonction de gestion du clic sur une sauce
  const handleSaucePress = (sauceId) => {
    console.log('Sauce selected:', sauceId);
    // Naviguer vers un nouvel écran en passant l'identifiant de la sauce
    navigation.navigate('SauceDetail', { sauceId });
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Liste des sauces</Text>
      <ScrollView style={{ flexDirection: 'column' }}>
        {sauces.map((sauce) => (
          <TouchableOpacity key={sauce.id} onPress={() => handleSaucePress(sauce.id)} style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={sauce.image} style={{ width: 50, height: 50, marginRight: 10 }} />
            <Text style={{ fontSize: 16, marginVertical: 5 }}>{sauce.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default SauceScreen;
