import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor:'pink',
justifyContent: 'center',
alignItems: 'center',
},
texto: {
fontSize: 29,
color : 'white',
fontWeight : 'bold',

},
nome: {
  fontSize: 15,
  color: 'white',
  alignItems: 'center'
},
imagem: {
width: 150,
height: 150,
resizeMode: 'cover',
borderRadius: 150,
borderWidth: 3,
borderColor:'white',
alignSelf: 'center',
},
botao:{
backgroundColor: 'purple',
width: 100,
height: 40,
alignItems: 'center',
justifyContent: 'center',
borderRadius: 10,
},
botao2:{
backgroundColor: 'purple',
width: 100,
height: 40,
alignItems: 'center',
justifyContent: 'center',
borderRadius: 10,
},
texto_instituicao:{
color:'white',
textDecorationLine:'underline',
},
idade: {
  fontSize: 12,
  color: 'white'
},
container_contato:{
flex: 1,
padding: 20,
backgroundColor: 'black',
},
container_icone_voltar_contato:{
alignItems:'flex-start',
},
view_texto_contato:{
alignItems: 'center',
},
texto_contato:{
color:'red',
fontWeight: 'bold',
padding: 10,
fontSize: 25,
},
input_contato:{
height: 40,
borderColor: 'white',
borderWidth: 1,
marginBottom: 20,
paddingLeft: 10,
},
input_contato_scrowlView:{
borderColor: 'white',
borderWidth: 1,
marginBottom: 20,
paddingLeft: 10,
},
textarea: {
height: 150,
textAlignVertical: 'top',
marginBottom: 15,
},


});
export default styles;