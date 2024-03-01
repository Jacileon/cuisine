import React from 'react';
import { View, Text } from 'react-native';

const SauceDetailScreen = ({ route }) => {
  const { sauceId } = route.params; // Obtenir l'identifiant de la sauce depuis les paramètres de navigation

  // Ici, vous pouvez récupérer les détails de la sauce en fonction de son identifiant
  // Par exemple, en utilisant une requête à votre base de données ou en consultant un ensemble de données préexistant

  // Supposons que vous avez une liste de détails de sauce avec l'identifiant correspondant
  const sauceDetails = [
    { id: 1, name: 'Sauce BBQ', description: 'Une délicieuse sauce barbecue fumée.' },
    { id: 2, name: 'Sauce tomate', description: 'Une sauce tomate maison aux herbes fraîches.' },
    { id: 3, name: 'Sauce béchamel', description: 'Une sauce onctueuse à base de beurre, de farine et de lait.' },
    // Ajoutez les autres sauces avec leurs détails ici
  ];

  // Recherchez les détails de la sauce en fonction de son identifiant
  const sauceDetail = sauceDetails.find(sauce => sauce.id === sauceId);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>{sauceDetail.name}</Text>
      <Text style={{ fontSize: 16 }}>{sauceDetail.description}</Text>
    </View>
  );
};

export default SauceDetailScreen;
