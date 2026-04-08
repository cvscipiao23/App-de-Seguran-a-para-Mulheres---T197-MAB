import React, { useState } from 'react';
import { View, TextInput, Text, Button, ScrollView, TouchableOpacity } from
'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons' ;
import styles from './Styles'
function TelaContato({navigation}){
  const [text_nome, setText_nome] = useState('');
  const [text_email, setText_email]= useState('');
  const [message, setMessage] =
useState('');
return (
  <View  style={styles.container_contato}> 
<View style={styles.container_icone_voltar_contato}>

<TouchableOpacity onPress={() => navigation.goBack()}>
<MaterialCommunityIcons name='keyboard-backspace' size={40}
color='red'/>
</TouchableOpacity>
</View>

<View style={styles.view_texto_contato}>
<Text style={styles.texto_contato}>  enter your email and password </Text>

</View>

<View>
<TextInput
style={styles.input_contato}
placeholder=" enter your email..."
placeholderTextColor = 'gray'
value={text_email}
onChangeText={setText_email}
/>


</View>
<TextInput
style={styles.input_contato}
placeholder="enter password..."
placeholderTextColor = 'gray'
value={text_nome}
onChangeText={setText_nome}
/>



<View>
<Button title="sign in" onPress={() => {alert ('')}}  />
</View>
</View>
);
}
export default TelaContato;