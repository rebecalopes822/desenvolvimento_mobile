import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import Footer from "../components/Footer";

type RootStackParamList = {
  GerenciarPacientes: undefined;
  CadastrarPaciente: undefined;
};

type PatientsScreenNavigationProp = StackNavigationProp<RootStackParamList, "GerenciarPacientes">;

interface Props {
  navigation: PatientsScreenNavigationProp;
}

export default function PatientsScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gerenciamento de Pacientes</Text>

      {/* Botão corrigido usando Pressable */}
      <Pressable style={styles.button} onPress={() => navigation.navigate("GerenciarPacientes")}>
        <Text style={styles.buttonText}>Gerenciar Pacientes</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => navigation.navigate("CadastrarPaciente")}>
        <Text style={styles.buttonText}>Cadastrar Paciente</Text>
      </Pressable>

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  button: {
    backgroundColor: "#007BFF",
    padding: 12,
    borderRadius: 8,
    marginVertical: 10,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    textAlign: "center",
  },
});
