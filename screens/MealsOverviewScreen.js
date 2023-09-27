import { FlatList, StyleSheet, Text, View } from "react-native";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealsList/MealItem";
import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";


export default function MealsOverviewScreen({ route, navigation }) {

    const catId = route.params.categoryId;
    const displayedMeals = MEALS.filter((meal) => {
        return meal.categoryIds.indexOf(catId) >= 0;
    })

    useLayoutEffect(() => {
        const categoryName = CATEGORIES.find((category) => category.id === catId).title;
        navigation.setOptions({
            title: categoryName
        })
    }, [catId, navigation]);

    return <MealsList items={displayedMeals} />
}
