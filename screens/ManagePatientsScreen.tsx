import React from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import Footer from "../components/Footer";

const patients = [
  { id: "1", name: "Paciente 1" },
  { id: "2", name: "Paciente 2" },
  { id: "3", name: "Paciente 3" },
  { id: "4", name: "Paciente 4" },
];

export default function ManagePatientsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={patients}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
            <Button title="Ver Mais" onPress={() => alert("Detalhes do paciente")} />
          </View>
        )}
      />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  item: { padding: 10, borderBottomWidth: 1 },
});
