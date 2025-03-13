import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import Footer from "../components/Footer";

type RootStackParamList = {
  Home: undefined;
  Pacientes: undefined;
  Tratamentos: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

interface Props {
  navigation: HomeScreenNavigationProp;
}

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>OdontoSmart</Text>
      <Button title="Pacientes" onPress={() => navigation.navigate("Pacientes")} />
      <Button title="Tratamentos" onPress={() => navigation.navigate("Tratamentos")} />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 20 },
});
