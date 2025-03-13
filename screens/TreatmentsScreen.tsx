import React from "react";
import { View, Button, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import Footer from "../components/Footer";

type RootStackParamList = {
  GerenciarTratamentos: undefined;
  CadastrarTratamento: undefined;
};

type TreatmentsScreenNavigationProp = StackNavigationProp<RootStackParamList, "GerenciarTratamentos">;

interface Props {
  navigation: TreatmentsScreenNavigationProp;
}

export default function TreatmentsScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Button title="Gerenciar Tratamentos" onPress={() => navigation.navigate("GerenciarTratamentos")} />
      <Button title="Cadastrar Tratamento" onPress={() => navigation.navigate("CadastrarTratamento")} />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
