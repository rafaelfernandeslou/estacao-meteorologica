import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const medicoes = [
  {
    id: 1,
    temp: 30,
    hum: 50,
    vento: 20,
    mes: 'Jan',
  },
  {
    id: 2,
    temp: 32,
    hum: 50,
    vento: 15,
    mes: 'Fev',
  },
  {
    id: 3,
    temp: 24,
    hum: 70,
    vento: 5,
    mes: 'Mar',
  },
  {
    id: 4,
    temp: 37,
    hum: 10,
    vento: 2,
    mes: 'Abr',
  },
];

function ItemLista({ item }) {
  return (
    <View style={styles.card}>
      <Text style={styles.mes}>Mês: {item.mes}</Text>
      <Text>Temperatura: {item.temp}°C</Text>
      <Text>Umidade: {item.hum}%</Text>
      <Text>Vento: {item.vento} km/h</Text>
    </View>
  );
}

export default function Relatorio() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Relatório de Medições Meteorológicas
      </Text>

      <FlatList
        data={medicoes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ItemLista item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#042C53',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#0C447C',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 3,
  },
  mes: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});