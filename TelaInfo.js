import React from 'react';
import { View, Text,TextInput, Image, Linking, TouchableOpacity }from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import styles from './Styles';


export default function TelaInfo({navigation}){
  return(
    
  
    <View style={styles.container}> 
    <View>
    <Image style={styles.imagem}
    
source={require('./assets/image.png')}
/>
<Text style={styles.texto}> login to your account</Text>
<TouchableOpacity style={styles.botao}


onPress={() => navigation.navigate('Contato')}>
<Text style={styles.texto_botao}>
log in </Text>
</TouchableOpacity>

 

 <Text style={styles.idade}> don't have an account? sign in </Text> 
 <TouchableOpacity style={styles.botao2}


onPress={() => navigation.navigate('Contato')}>
<Text style={styles.texto_botao}>
sign in </Text>

</TouchableOpacity>
 
 
 <Text style={styles.texto_instituicao} onPress={() =>
Linking.openURL('https://help.netflix')}> help </Text> 

<View>
<TouchableOpacity >
<MaterialCommunityIcons name="facebook" size={50}
color="white"/>

</TouchableOpacity>
</View>


<View>

</View>
</View>



    </View>
  );
}
