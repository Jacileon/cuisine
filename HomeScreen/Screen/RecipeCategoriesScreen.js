import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

// Import des écrans associés
import SauceScreen from './Sauce/SauceScreen';
import GrilladesScreen from './Grillade/GrilladesScreen';
import AccompagnementScreen from './Accompagnements/AccompagnementScreen';
import BoissonScreen from './Boisson/BoissonScreen';
import GourmandiseScreen from './Gourmandise/GourmandiseScreen';

const Stack = createStackNavigator();
const RecipeCategoriesScreen = ({ navigation }) => {
  const categories = [
    { name: 'Sauce', iconName: 'water', screen: 'Sauce' },
    { name: 'Grillades', iconName: 'flame', screen: 'Grillades' },
    { name: 'Accompagnement', iconName: 'restaurant', screen: 'Accompagnement' },
    { name: 'Boisson', iconName: 'beer', screen: 'Boisson' },
    { name: 'Gourmandise', iconName: 'ice-cream', screen: 'Gourmandise' },
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView horizontal style={{ height: '1%' }}>
        <View style={{ flexDirection: 'row' }}>
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate(category.screen)}
              style={{ margin: 10 }}
            >
              <Ionicons name={category.iconName} size={32} color="black" />
              <Text>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <Stack.Navigator>
        {categories.map((category, index) => (
          <Stack.Screen 
            key={index}
            name={category.screen} 
            component={getComponentForScreen(category.screen)} 
            options={{
              title: category.name,
              headerShown: false,
            }}
          />
        ))}
      </Stack.Navigator>
    </View>
  );
}


const getComponentForScreen = (screenName) => {
  switch (screenName) {
    case 'Sauce':
      return SauceScreen;
    case 'Grillades':
      return GrilladesScreen;
    case 'Accompagnement':
      return AccompagnementScreen;
    case 'Boisson':
      return BoissonScreen;
    case 'Gourmandise':
      return GourmandiseScreen;
    default:
      return null;
  }
};

export default RecipeCategoriesScreen;
