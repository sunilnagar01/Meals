import { useContext, useLayoutEffect } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, Pressable } from 'react-native'

import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';
import { FavouritesContext } from '../store/context/favourites-context';

export default function MealDetailsScreen({ route, navigation }) {

    const FavMealsCtx = useContext(FavouritesContext);

    const mealId = route.params.mealId;
    const meal = MEALS.find((meal) => meal.id === mealId);

    function favouriteStatusHandler() {
        if (isMealFavourite) {
            FavMealsCtx.removeFavourite(mealId);
        } else {
            FavMealsCtx.addFavourite(mealId);
        }
    }

    const isMealFavourite = FavMealsCtx.ids.includes(mealId);

    useLayoutEffect(() => {
        const mealTitle = MEALS.find((meal) => meal.id === mealId).title;
        navigation.setOptions({
            title: mealTitle,
            headerRight: () => {
                return <IconButton onPress={favouriteStatusHandler} icon={isMealFavourite ? 'star' : 'star-outline'} color={'white'} />
            }
        })
    }, [mealId, navigation, favouriteStatusHandler])

    return (
        <ScrollView style={styles.rootContainer}>
            <Image source={{ uri: meal.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{meal.title}</Text>
            <MealDetails duration={meal.duration} complexity={meal.complexity} affordability={meal.affordability} textStyle={styles.detailStyle} />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={meal.ingredients} />

                    <Subtitle>Steps</Subtitle>
                    <List data={meal.steps} />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        marginVertical: 8,
        fontSize: 23,
        fontWeight: 'bold',
    },
    detailStyle: {
        color: '#fff',
        fontSize: 14
    },
    listOuterContainer: {
        alignItems: 'center'
    },
    listContainer: {
        width: '80%'
    }
});