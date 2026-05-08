import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen name={'index'} options={{title: 'Home'}}/>
        <Stack.Screen name={'products/index'} options={{title: 'List Produk'}}/>
        <Stack.Screen name={'products/[id]'} options={{title: 'Detail Produk'}}/>
  </Stack>;
}
