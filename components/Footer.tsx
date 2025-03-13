import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>Todos os direitos reservados.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    bottom: 10,
    width: "100%",
    alignItems: "center",
  },
  text: {
    fontSize: 14,
    color: "#888",
  },
});
