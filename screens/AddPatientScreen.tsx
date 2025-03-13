import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import Footer from "../components/Footer";

export default function AddPatientScreen() {
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Nome" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Data de Nascimento" value={birthDate} onChangeText={setBirthDate} />
      <TextInput style={styles.input} placeholder="Gênero" value={gender} onChangeText={setGender} />
      <TextInput style={styles.input} placeholder="Telefone" value={phone} onChangeText={setPhone} />
      <TextInput style={styles.input} placeholder="E-mail" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Endereço" value={address} onChangeText={setAddress} />
      <Button title="Registrar" onPress={() => alert("Paciente cadastrado!")} />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10 },
});

