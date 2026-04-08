import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Styles';

function TelaContato({ navigation }) {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <View style={styles.container_contato}>

      <View style={styles.card}>

        {/* Logo */}
        <View style={styles.logoContainer}>
          <MaterialCommunityIcons 
            name="map-marker" 
            size={40} 
            color="#8e2de2" 
          />
          <Text style={styles.logoText}>SafeHer</Text>
        </View>

        {/* Input Email */}
        <TextInput
          style={styles.input_contato}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
        />

        {/* Input Senha */}
        <TextInput
          style={styles.input_contato}
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />

        {/* Botão */}
        <TouchableOpacity 
          style={styles.botao}
          onPress={() => alert('Entrou')}
        >
          <Text style={styles.texto_botao}>Entrar</Text>
        </TouchableOpacity>

        {/* Criar conta */}
        <TouchableOpacity style={styles.criarConta}>
          <Text style={styles.texto_criar}>Criar conta</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

export default TelaContato;