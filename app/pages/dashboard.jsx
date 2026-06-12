import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';

export default function Cadastro() {
  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.container}
    >
      {/* Ícone */}
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>☁️</Text>
      </View>

      {/* Título */}
      <Text style={styles.titulo}>Cadastro de medição</Text>
      <Text style={styles.subtitulo}>
        Registre os dados climáticos
      </Text>

      {/* Card */}
      <View style={styles.card}>
        {/* Temperatura */}
        <Text style={styles.label}>Temperatura</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="0.0"
            placeholderTextColor="#1E88E5"
            keyboardType="numeric"
          />
          <Text style={styles.unidade}>°C</Text>
        </View>

        {/* Umidade */}
        <Text style={styles.label}>Umidade</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="0"
            placeholderTextColor="#1E88E5"
            keyboardType="numeric"
          />
          <Text style={styles.unidade}>%</Text>
        </View>

        {/* Velocidade do Vento */}
        <Text style={styles.label}>Velocidade do vento</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="0"
            placeholderTextColor="#1E88E5"
            keyboardType="numeric"
          />
          <Text style={styles.unidade}>km/h</Text>
        </View>

        <View style={styles.divisor} />

        {/* Botão */}
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}>
            Salvar medição
          </Text>
        </TouchableOpacity>

        <Text style={styles.aviso}>
          Todos os campos são obrigatórios
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: '#002B5B',
  },

  container: {
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 40,
    minHeight: '100%',
  },

  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#0A4A8A',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1E88E5',
    marginBottom: 20,
  },

  icon: {
    fontSize: 30,
  },

  titulo: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },

  subtitulo: {
    fontSize: 16,
    color: '#7FBFFF',
    marginTop: 5,
    marginBottom: 30,
    textAlign: 'center',
  },

  card: {
    width: '90%',
    backgroundColor: '#0A4A8A',
    borderRadius: 15,
    padding: 20,
    borderWidth: 1,
    borderColor: '#1E88E5',
  },

  label: {
    color: '#8BC4FF',
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 8,
    marginTop: 10,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#002B5B',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#1E88E5',
    paddingHorizontal: 15,
    marginBottom: 15,
  },

  input: {
    flex: 1,
    height: 50,
    color: '#FFFFFF',
    fontSize: 16,
  },

  unidade: {
    color: '#1E88E5',
    fontWeight: 'bold',
    fontSize: 15,
  },

  divisor: {
    height: 1,
    backgroundColor: '#1E88E5',
    opacity: 0.3,
    marginVertical: 20,
  },

  botao: {
    backgroundColor: '#4A90E2',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textoBotao: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

  aviso: {
    color: '#6FB5FF',
    textAlign: 'center',
    marginTop: 15,
    fontSize: 12,
  },
});