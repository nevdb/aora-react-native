import { StatusBar } from "react-native";
import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center gap-3 bg-white px-6">
      <Text className="text-3xl font-bold text-sky-600">Aora!</Text>
      <Text className="text-center text-base text-slate-600">
        NativeWind is wired through the Expo Router entry point.
      </Text>
      <StatusBar />
      <Link href="/home" style={{ color: "blue" }}>
        Go to Home
      </Link>
    </View>
  );
}
