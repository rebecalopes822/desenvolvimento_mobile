import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import PatientsScreen from "./screens/PatientsScreen";
import ManagePatientsScreen from "./screens/ManagePatientsScreen";
import AddPatientScreen from "./screens/AddPatientScreen";
import TreatmentsScreen from "./screens/TreatmentsScreen";
import ManageTreatmentsScreen from "./screens/ManageTreatmentsScreen";
import AddTreatmentScreen from "./screens/AddTreatmentScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Pacientes" component={PatientsScreen} />
        <Stack.Screen name="GerenciarPacientes" component={ManagePatientsScreen} />
        <Stack.Screen name="CadastrarPaciente" component={AddPatientScreen} />
        <Stack.Screen name="Tratamentos" component={TreatmentsScreen} />
        <Stack.Screen name="GerenciarTratamentos" component={ManageTreatmentsScreen} />
        <Stack.Screen name="CadastrarTratamento" component={AddTreatmentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
