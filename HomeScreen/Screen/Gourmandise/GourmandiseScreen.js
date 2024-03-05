import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const GourmandiseScreen = () => {
  const navigation = useNavigation();

  // Exemple de données de gourmandises avec des images
  const gourmandises = [
    { id: 1, name: 'Gâteau au chocolat', image: require('./OIP (8).jpg') },
    { id: 2, name: 'Tarte aux fruits', image: require('./OIP (8).jpg') },
    { id: 3, name: 'Crème glacée', image: require('./OIP (8).jpg') },
    { id: 4, name: 'Cookies', image: require('./OIP (8).jpg') },
    { id: 5, name: 'Gâteau au chocolat', image: require('./OIP (8).jpg') },
    { id: 6, name: 'Tarte aux fruits', image: require('./OIP (8).jpg') },
    { id: 7, name: 'Crème glacée', image: require('./OIP (8).jpg') },
    { id: 8, name: 'Cookies', image: require('./OIP (8).jpg') },
    { id: 9, name: 'Gâteau au chocolat', image: require('./OIP (8).jpg') },
    { id: 10, name: 'Tarte aux fruits', image: require('./OIP (8).jpg') },
    { id: 11, name: 'Gâteau au chocolat', image: require('./OIP (8).jpg') },
    { id: 12, name: 'Tarte aux fruits', image: require('./OIP (8).jpg') },
    { id: 13, name: 'Crème glacée', image: require('./OIP (8).jpg') },
    { id: 14, name: 'Cookies', image: require('./OIP (8).jpg') },
    { id: 15, name: 'Gâteau au chocolat', image: require('./OIP (8).jpg') },
  ];


  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Liste des gourmandises</Text>
      <ScrollView style={{ flexDirection: 'column' }}>
        {gourmandises.map((gourmandise) => (
          <TouchableOpacity key={gourmandise.id} onPress={() => handleGourmandisePress(gourmandise.id)} style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={gourmandise.image} style={{ width: 50, height: 50, marginRight: 10 }} />
            <Text style={{ fontSize: 16, marginVertical: 5 }}>{gourmandise.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default GourmandiseScreen;
