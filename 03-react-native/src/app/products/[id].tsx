import {StyleSheet, Text, View} from "react-native";
import {Product, PRODUCTS} from "../../../data/products";
import {useLocalSearchParams} from "expo-router";

export default function Id() {
    const {id} = useLocalSearchParams<{id: string}>()
    const product: Product | undefined = PRODUCTS.find(p => p.id === id);

    if (!product) {
        return (
            <View style={styles.container}>
                <Text>Product not found</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.thumb}/>
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.price}>{product.price}</Text>
            <Text style={styles.desc}>{product.description}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        gap: 12
    },
    thumb: {
        width: '100%',
        height: 400,
        backgroundColor: '#eee',
        borderRadius: 12,
    },
    name: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 4
    },
    price: {
        fontSize: 14,
        opacity: .7
    },
    desc: {
        fontSize: 14,
        opacity: .7,
        textAlign: 'left'
    }
});