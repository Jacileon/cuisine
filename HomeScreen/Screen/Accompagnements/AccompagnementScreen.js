import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AccompagnementScreen = () => {
  const navigation = useNavigation();

  const accompagnements = [
    { id: 1, name: 'Riz', image: require('./OIP (7).jpg') },
    { id: 2, name: 'Pommes de terre', image:require('./OIP (7).jpg') },
    { id: 3, name: 'Légumes grillés', image: require('./OIP (7).jpg') },
    { id: 4, name: 'Salade', image: require('./OIP (7).jpg') },
    { id: 5, name: 'Riz', image: require('./OIP (7).jpg') },
    { id: 6, name: 'Pommes de terre', image:require('./OIP (7).jpg') },
    { id: 7, name: 'Légumes grillés', image: require('./OIP (7).jpg') },
    { id: 8, name: 'Salade', image: require('./OIP (7).jpg') },
    { id: 9, name: 'Riz', image: require('./OIP (7).jpg') },
    { id: 10, name: 'Pommes de terre', image:require('./OIP (7).jpg') },
    { id: 11, name: 'Riz', image: require('./OIP (7).jpg') },
    { id: 12, name: 'Pommes de terre', image:require('./OIP (7).jpg') },
    { id: 13, name: 'Légumes grillés', image: require('./OIP (7).jpg') },
    { id: 14, name: 'Salade', image: require('./OIP (7).jpg') },
    { id: 15, name: 'Riz', image: require('./OIP (7).jpg') },

  ];

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Liste des accompagnements</Text>
      <ScrollView style={{ flexDirection: 'column' }}>
        {accompagnements.map((accompagnement) => (
          <TouchableOpacity key={accompagnement.id} onPress={() => handleAccompagnementPress(accompagnement.id)} style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={accompagnement.image} style={{ width: 50, height: 50, marginRight: 10 }} />
            <Text style={{ fontSize: 16, marginVertical: 5 }}>{accompagnement.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default AccompagnementScreen;
