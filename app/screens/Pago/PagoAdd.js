import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "react-native-elements"

export default function PagoAdd(){
    const [txtMonto, setMonto] = useState('Monto ...')
    const [txtUsuario, setUsuario] = useState('Usuario ...')
    const [txtServicio, setServicio] = useState('Servicio ...')
    const [btnEnviar, setEnviar] = useState('')
    return (
        <ScrollView centerContent={true} style={styles.viewBody}>
            <View>
                <Text style={styles.textTitle}>Agregar pago ...</Text>
                <Text>Monto</Text>
                <TextInput
                    style={styles.input}
                    placeholder={txtMonto}
                    onChangeText={m => setMonto(m)}
                />
                <Text>Usuario</Text>
                <TextInput
                    style={styles.input}
                    placeholder={txtUsuario}
                    onChangeText={u => setUsuario(u)}
                />
                <Text>Servicio</Text>
                <TextInput
                    style={styles.input}
                    placeholder={txtServicio}
                    onChangeText={s => setServicio(s)}
                />
                <Button
                    title="Agregar pago"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => {
                        setEnviar(txtMonto)
                    }}
                />
                <Text style={styles.textTitle}>DATOS DEL PAGO</Text>
                <Text>MONTO: {txtMonto}</Text>
                <Text>USUARIO: {txtUsuario}</Text>
                <Text>SERVICIO: {txtServicio}</Text>
                <Text>PAGO {btnEnviar}</Text>
            </View>
        </ScrollView>
    );

}