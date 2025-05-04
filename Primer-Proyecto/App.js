import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);

  const aumentarContador = () => {
    setContador(contador + 1);
  };

  return (
    <ImageBackground
      source={{ uri: 'https://fondosmil.co/fondo/54342.jpg' }} // Fondo con una imagen
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.titulo}>Bienvenido a mi contador</Text>

        <Text style={styles.contadorTexto}>Contador: {contador}</Text>

        <TouchableOpacity style={styles.boton} onPress={aumentarContador}>
          <Text style={styles.botonTexto}>Aumentar +1</Text>
        </TouchableOpacity>
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
    backgroundColor: 'rgba(0,0,0,0.4)', // Le da un fondo semitransparente al contenido
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
  boton: {
    backgroundColor: '#00BFFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  botonTexto: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
