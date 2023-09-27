import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

export default function CategoryGridTile({ title, color, onPress }) {
    return (
        <View style={[styles.gridItem, { backgroundColor: color }]}>
            <Pressable style={styles.buttonStyle} onPress={onPress} android_ripple={{ color: "#cccccc" }} >
                <View style={[styles.innerContainer]} >
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View >
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        elevation: 10,
        borderRadius: 8,
        height: 150,
        shadowColor: 'black',
        shadowOffset: { height: 2, width: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        backgroundColor: 'white',
        overflow: Platform.OS === 'android' ? "hidden" : "visible"
    },
    buttonStyle: {
        flex: 1
    },
    buttonPressed: {
        opacity: 0.75
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontWeight: '500',
        fontSize: 18,
        color: '#ffffff'
    }
});