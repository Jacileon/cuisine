import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const GrilladeScreen = () => {
  const navigation = useNavigation();

  const grillades = [
    { id: 1, name: 'Steak', image: require('./OIP (6).jpg') },
    { id: 2, name: 'Brochette de poulet', image: require('./OIP (6).jpg') },
    { id: 3, name: 'Côte de porc', image: require('./OIP (6).jpg') },
    { id: 4, name: 'Burger', image: require('./OIP (6).jpg') },
    { id: 5, name: 'Steak', image: require('./OIP (6).jpg') },
    { id: 6, name: 'Brochette de poulet', image: require('./OIP (6).jpg') },
    { id: 7, name: 'Côte de porc', image: require('./OIP (6).jpg') },
    { id: 8, name: 'Burger', image: require('./OIP (6).jpg') },
    { id: 9, name: 'Steak', image: require('./OIP (6).jpg') },
    { id: 10, name: 'Brochette de poulet', image: require('./OIP (6).jpg') },
    { id: 11, name: 'Steak', image: require('./OIP (6).jpg') },
    { id: 12, name: 'Brochette de poulet', image: require('./OIP (6).jpg') },
    { id: 13, name: 'Côte de porc', image: require('./OIP (6).jpg') },
    { id: 14, name: 'Burger', image: require('./OIP (6).jpg') },
    { id: 15, name: 'Steak', image: require('./OIP (6).jpg') },
    
  ];

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Liste des grillades</Text>
      <ScrollView style={{ flexDirection: 'column' }}>
        {grillades.map((grillade) => (
          <TouchableOpacity key={grillade.id} onPress={() => handleGrilladePress(grillade.id)} style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={grillade.image} style={{ width: 50, height: 50, marginRight: 10 }} />
            <Text style={{ fontSize: 16, marginVertical: 5 }}>{grillade.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default GrilladeScreen;
