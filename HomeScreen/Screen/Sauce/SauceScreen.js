import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importer le hook de navigation

const SauceScreen = () => {
  const navigation = useNavigation(); // Utiliser le hook de navigation


  const sauces = [
    { id: 1, name: 'Sauce BBQ', image: require('./OIP (5).jpg') },
    { id: 2, name: 'Sauce tomate', image: require('./OIP (5).jpg') },
    { id: 3, name: 'Sauce béchamel', image: require('./OIP (5).jpg') },
    { id: 4, name: 'Sauce BBQ', image: require('./OIP (5).jpg') },
    { id: 5, name: 'Sauce tomate', image: require('./OIP (5).jpg') },
    { id: 6, name: 'Sauce béchamel', image: require('./OIP (5).jpg') },
    { id: 7, name: 'Sauce BBQ', image: require('./OIP (5).jpg') },
    { id: 8, name: 'Sauce tomate', image: require('./OIP (5).jpg') },
    { id: 9, name: 'Sauce béchamel', image: require('./OIP (5).jpg') },
    { id: 10, name: 'Sauce BBQ', image: require('./OIP (5).jpg') },
    { id: 11, name: 'Sauce BBQ', image: require('./OIP (5).jpg') },
    { id: 12, name: 'Sauce BBQ', image: require('./OIP (5).jpg') },
    { id: 13, name: 'Sauce BBQ', image: require('./OIP (5).jpg') },
    { id: 14, name: 'Sauce BBQ', image: require('./OIP (5).jpg') },
    { id: 15, name: 'Sauce BBQ', image: require('./OIP (5).jpg') },
  ];


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
