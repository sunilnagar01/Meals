import { useContext } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { FavouritesContext } from '../store/context/favourites-context';
import { MEALS } from '../data/dummy-data';
import MealsList from '../components/MealsList/MealsList';

export default function FavouriteScreen({ navigation }) {
    const favMealsCtx = useContext(FavouritesContext);

    function onAddHandler() {
        navigation.navigate('Categories');
    }

    function EmptyScreen() {
        return (
            <View style={styles.container}>
                <Text style={styles.textStyle}>No Meals Added Yet!</Text>
                <View style={styles.buttonContainer}>
                    <Pressable style={styles.button} android_ripple={{ color: '#ccc' }} onPress={onAddHandler} >
                        <Text style={styles.buttonText}>Add Meals</Text>
                    </Pressable>
                </View>
            </View>
        );
    }

    const favouritesMeals = MEALS.filter((meal) => favMealsCtx.ids.includes(meal.id))

    return (
        favMealsCtx.ids.length > 0 ? <MealsList items={favouritesMeals} /> : <EmptyScreen />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle:{
        color: 'white',
        fontSize: 18
    },
    buttonContainer: {
        margin: 10,
        borderRadius: 23,
        overflow: 'hidden',
        backgroundColor: 'white'
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 24,
    },
    buttonText: {
        color: '#172379'
        // color: '#ffffff'
    }
})