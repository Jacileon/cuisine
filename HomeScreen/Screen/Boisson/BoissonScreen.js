import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BoissonScreen = () => {
  const navigation = useNavigation();

  
  const boissons = [
    { id: 1, name: 'Coca-Cola', image: require('./télécharger.jpg') },
    { id: 2, name: "Jus d'orange", image: require('./télécharger.jpg') },
    { id: 3, name: 'Thé glacé', image: require('./télécharger.jpg') },
    { id: 4, name: 'Café', image: require('./télécharger.jpg') },
    { id: 5, name: 'Coca-Cola', image: require('./télécharger.jpg') },
    { id: 6, name: "Jus d'orange", image: require('./télécharger.jpg') },
    { id: 7, name: 'Thé glacé', image: require('./télécharger.jpg') },
    { id: 8, name: 'Café', image: require('./télécharger.jpg') },
    { id: 9, name: 'Coca-Cola', image: require('./télécharger.jpg') },
    { id: 10, name: "Jus d'orange", image: require('./télécharger.jpg') },
    { id: 11, name: 'Coca-Cola', image: require('./télécharger.jpg') },
    { id: 12, name: "Jus d'orange", image: require('./télécharger.jpg') },
    { id: 13, name: 'Thé glacé', image: require('./télécharger.jpg') },
    { id: 14, name: 'Café', image: require('./télécharger.jpg') },
    { id: 15, name: 'Coca-Cola', image: require('./télécharger.jpg') },
    
  ];

 
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Liste des boissons</Text>
      <ScrollView style={{ flexDirection: 'column' }}>
        {boissons.map((boisson) => (
          <TouchableOpacity key={boisson.id} onPress={() => handleBoissonPress(boisson.id)} style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={boisson.image} style={{ width: 50, height: 50, marginRight: 10 }} />
            <Text style={{ fontSize: 16, marginVertical: 5 }}>{boisson.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default BoissonScreen;
