import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="screens/select-phone" options={{ presentation: 'card' }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen 
        name="screens/product-details" 
        options={{ 
          headerShown: true, 
          title: 'Product Details',
          headerStyle: { backgroundColor: '#1976D2' },
          headerTintColor: '#FFF',
        }} 
      />
      <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
    </Stack>
  );
}