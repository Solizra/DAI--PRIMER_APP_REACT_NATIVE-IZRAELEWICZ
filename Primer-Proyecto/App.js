import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);

  const aumentarContador = () => {
    setContador(contador + 1);
  };

  return (
    <ImageBackground source={{ uri: 'https://i.pinimg.com/736x/04/35/ca/0435cad177fbb6224844f95bbf1ff855.jpg' }} style={styles.background}>
      <View style={styles.container}>

        <Text style={styles.titulo}>MI CONTADOR</Text>
        <Text style={styles.contadorTexto}>Contador: {contador}</Text>
        <Button title="Aumentar" onPress={aumentarContador} color="#43AAF1" />

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  contadorTexto: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 30,
  },
});
