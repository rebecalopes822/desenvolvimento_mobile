import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import Footer from "../components/Footer";

export default function AddTreatmentScreen() {
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [cost, setCost] = useState("");

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Descrição" value={description} onChangeText={setDescription} />
      <TextInput style={styles.input} placeholder="Tipo" value={type} onChangeText={setType} />
      <TextInput style={styles.input} placeholder="Custo" value={cost} onChangeText={setCost} keyboardType="numeric" />
      <Button title="Registrar" onPress={() => alert("Tratamento cadastrado!")} />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10 },
});
