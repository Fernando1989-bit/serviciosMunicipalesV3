import React from "react";
import { StyleSheet } from "react-native"
import { createStackNavigator } from "@react-navigation/stack";
import Pagos from "../screens/Pago/Pago";
import PagosAdd from "../screens/Pago/PagoAdd";
//import PagosByUser from "../screens/Pago/PagoByUser";
import PagosInfo from "../screens/Pago/PagoInfo";
import PagosJson from "../screens/Pago/PagoJson";
import PagosList from "../screens/Pago/PagoList";


const Stack = createStackNavigator();

export default function PagoStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="pagos"
        component={Pagos}
        options={{ 
          title: "Pagos",
        headerStyle:{
          backgroundColor:'#00a680',
        } }}
        navigationOptions={
          {headerStyle:styles.headStyle}
        }
      />
       <Stack.Screen
        name="pagos-add"
        component={PagosAdd}
        options={{ title: "Agregar Pago" }}
      />
     
      
       <Stack.Screen
        name="pagos-info"
        component={PagosInfo}
        options={{ title: "Info de pagos" }}
      />
    
       <Stack.Screen
        name="pagos-json"
        component={PagosJson}
        options={{ title: "Pagos Json" }}
      />
       <Stack.Screen
        name="pagos-list"
        component={PagosList}
        options={{ title: "Lista de pagos" }}
      />
    </Stack.Navigator>
  );
}
const styles = StyleSheet.create({
  headStyle: {
    backgroundColor: "#ccc"
  }
})