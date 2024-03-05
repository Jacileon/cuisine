import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

// Import des écrans associés
import SauceScreen from './Sauce/SauceScreen';
import GrilladesScreen from './Grillade/GrilladesScreen';
import AccompagnementScreen from './Accompagnements/AccompagnementScreen';
import BoissonScreen from './Boisson/BoissonScreen';
import GourmandiseScreen from './Gourmandise/GourmandiseScreen';

const Stack = createStackNavigator();

const getComponentForScreen = (screenName) => {
  switch (screenName) {
    case 'Sauce':
      return () => <SauceScreen />;
    case 'Grillades':
      return () => <GrilladesScreen />;
    case 'Accompagnement':
      return () => <AccompagnementScreen />;
    case 'Boisson':
      return () => <BoissonScreen />;
    case 'Gourmandise':
      return () => <GourmandiseScreen />;
    default:
      return null;
  }
};

const RecipeCategoriesScreen = ({ navigation }) => {
  const categories = [
    { name: 'Sauce', iconName: 'water', screen: 'Sauce' },
    { name: 'Grillades', iconName: 'flame', screen: 'Grillades' },
    { name: 'Accompagnement', iconName: 'restaurant', screen: 'Accompagnement' },
    { name: 'Boisson', iconName: 'beer', screen: 'Boisson' },
    { name: 'Gourmandise', iconName: 'ice-cream', screen: 'Gourmandise' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.categoriesContainer}>
        <ScrollView horizontal contentContainerStyle={styles.scrollViewContent}>
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate(category.screen)}
              style={styles.categoryButton}
            >
              <Ionicons name={category.iconName} size={32} color="black" />
              <Text>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={styles.screenContainer}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  categoriesContainer: {
    height: 100, 
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  screenContainer: {
    flex: 1,
  },
  scrollViewContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryButton: {
    marginHorizontal: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default RecipeCategoriesScreen;
