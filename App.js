import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import FavouriteScreen from './screens/FavouriteScreen';
import FavouritesContextProvider from './store/context/favourites-context';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{
      headerStyle: { backgroundColor: '#351401' },
      headerTintColor: 'white',
      sceneContainerStyle: { backgroundColor: '#3f2f25' },
      drawerActiveTintColor: '#351401',
      drawerActiveBackgroundColor: '#f0c6ac',
      drawerContentStyle: { backgroundColor: '#351401' },
      drawerInactiveTintColor: 'white'
    }}>
      <Drawer.Screen name='Categories' component={CategoriesScreen} options={{
        title: 'All Categories',
        drawerLabel: 'Categories',
        drawerIcon: ({ size, color }) => <MaterialIcons name='category' size={size} color={color} />
      }} />
      <Drawer.Screen name='Favourites' component={FavouriteScreen} options={{
        title: 'Favourites',
        drawerIcon: ({ size, color }) => <Ionicons name='star' size={size} color={color} />
      }} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <FavouritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' },
          }}>
            <Stack.Screen name='Drawer' component={DrawerNavigator} options={{
              headerShown: false
            }} />
            <Stack.Screen name='MealsOverview' component={MealsOverviewScreen} />
            <Stack.Screen name='MealDetails' component={MealDetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer >
      </FavouritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
