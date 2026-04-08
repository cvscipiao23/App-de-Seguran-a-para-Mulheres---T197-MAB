import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

container_contato: {
  flex: 1,
  backgroundColor: 'pink',
  justifyContent: 'center',
  alignItems: 'center',
},

card: {
  width: '85%',
  backgroundColor: 'pink',
  borderRadius: 25,
  padding: 20,
  elevation: 5,
},

logoContainer: {
  alignItems: 'center',
  marginBottom: 20,
},

logoText: {
  fontSize: 28,
  fontWeight: 'bold',
  color: '#8e2de2',
},

input_contato: {
  height: 50,
  backgroundColor: '#eee',
  borderRadius: 10,
  marginBottom: 15,
  paddingHorizontal: 15,
},

botao: {
  backgroundColor: '#8e2de2',
  height: 50,
  borderRadius: 10,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 10,
},

texto_botao: {
  color: 'white',
  fontWeight: 'bold',
  fontSize: 16,
},

criarConta: {
  marginTop: 15,
  alignItems: 'center',
},

texto_criar: {
  color: '#6a1b9a',
  textDecorationLine: 'underline',
},

});

export default styles;