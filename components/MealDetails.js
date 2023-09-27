import { StyleSheet, View, Text } from 'react-native';

export default function MealDetails({ duration, complexity, affordability, textStyle }) {
    return (
        <View style={styles.details}>
            <Text style={[styles.detailsItem, textStyle]}>{duration} Min</Text>
            <Text style={[styles.detailsItem, textStyle]}>{complexity.toUpperCase()}</Text>
            <Text style={[styles.detailsItem, textStyle]}>{affordability.toUpperCase()}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8
    },
    detailsItem: {
        marginHorizontal: 4,
        fontSize: 12
    }
})