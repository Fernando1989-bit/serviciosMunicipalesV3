import React from "react";
import {image, StyleSheet, View, Text } from "react-native";
import { Button, ListItem, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native"

export default function Pago() {
  const navigation = useNavigation();
  return (
    <View style={styles.viewBtn}>
    {/* source={require('./../../../assets/alumnos1.png')} */}
    {/* source={{ uri: 'https://picsum.photos/200/300' }} */}
    {/* source={{ uri: 'https://source.unsplash.com/daily' }} */}
    <Image
      style={styles.photo}
      source={{ uri: 'https://source.unsplash.com/featured/?{student}' }}
    />
    <Button
      title="Agregar pago"
      buttonStyle={styles.btnStyle}
      containerStyle={styles.btnContainer}
      onPress={() => navigation.navigate("pagos-add")}
    />
    <Button
      title="Detalle de Pago"
      buttonStyle={styles.btnStyle}
      containerStyle={styles.btnContainer}
      onPress={() => navigation.navigate("pagos-det")}
    />
    <Button
      title="Lista de Pagos"
      buttonStyle={styles.btnStyle}
      containerStyle={styles.btnContainer}
      onPress={() => navigation.navigate("pagos-list")}
    />
    <Button
      title="Pagos por usuario"
      buttonStyle={styles.btnStyle}
      containerStyle={styles.btnContainer}
      onPress={() => navigation.navigate("pagos-by-user")}
    />
    <Button
      title="Pagos JSON"
      buttonStyle={styles.btnStyle}
      containerStyle={styles.btnContainer}
      onPress={() => navigation.navigate("pagos-json")}
    />
  </View>
  );
}
const styles = StyleSheet.create({

  textTitle: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  },
  listStyle: {
    marginTop: 0
  },
  btnStyle: {
    backgroundColor: "#00a680"
  },
  btnContainer: {
    width: "70%",
    marginBottom: 10
  },
  viewBtn: {
    flex: 6,
    alignItems: "center"
  },
  photo: {
    height: 240,
    width: 240,
    marginBottom: 20,
    marginTop: 20
  }
});

