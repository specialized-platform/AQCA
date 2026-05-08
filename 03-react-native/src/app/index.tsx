import {Text, View, StyleSheet, Pressable} from "react-native";
import {Link} from 'expo-router';

export default function Index() {
  return (
      <View style={styles.container}>
        <Text style={styles.title}>RN Shop - Home </Text>
        <Text style={styles.subtitle}>Mulai belanja dengan melihat daftar produk.</Text>

        <Link href="./products" asChild>
          <Pressable style={styles.button}>
            <Text>Lihat Product</Text>
          </Pressable>
        </Link>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 12
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
  },
  subtitle: {
    fontSize: 14,
    opacity: .7,
    textAlign: 'center',
  },
  button: {
    borderColor: "#9a9a9a",
    borderWidth: 1,
    borderStyle: 'solid',
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 6,
    backgroundColor: "white"
  },
});