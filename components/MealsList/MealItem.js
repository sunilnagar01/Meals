import { Image, Pressable, StyleSheet, Text, View, Platform } from "react-native";
import MealDetails from "../MealDetails";
import { useNavigation } from "@react-navigation/native";


export default function MealItem({ id, title, imageUrl, duration, complexity, affordability }) {

    const navigation = useNavigation();

    function pressHandler() {
        navigation.navigate('MealDetails', { mealId: id })
    }


    return (
        <View style={styles.mealItem} >
            <Pressable onPress={pressHandler} android_ripple={{ color: '#cccccc' }}>
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{ uri: imageUrl }} style={styles.image} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealDetails duration={duration} complexity={complexity} affordability={affordability} />
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { height: 2, width: 0 },
        shadowOpacity: 0.35,
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? "hidden" : "visible"
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200,

    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },
})