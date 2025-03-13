import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Footer from "../components/Footer";

const treatments = [
  { id: "1", description: "Limpeza", type: "Preventivo", cost: "R$ 150" },
  { id: "2", description: "Clareamento", type: "Estético", cost: "R$ 600" },
];

export default function ManageTreatmentsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={treatments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.description} - {item.type} - {item.cost}</Text>
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
