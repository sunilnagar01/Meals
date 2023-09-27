import { StyleSheet, View, Text } from 'react-native'

export default function Subtitle({ children }) {
    return (
        <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    subTitle: {
        color: '#e2b497',
        fontSize: 18,
        margin: 4,
        padding: 6,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    subTitleContainer: {
        // borderBottomColor: '#e2b497',
        // borderBottomWidth: 2,
        marginVertical: 4,
        // marginHorizontal: 12,
        // padding: 6,
    }
});