import React , {useState} from 'react';
import {Text,  View , StyleSheet , TextInput } from 'react-native';


const TextScreen = () => {
 const [mytext , setMyText] = useState('');
    return <View>
<Text style={styles.text}>Enter Password </Text>
<TextInput 
style={styles.input}
autoCapitalize="none"
autoCorrect={false}
value={mytext}
onChangeText ={(newValue)=> setMyText(newValue) }
/>

{mytext.length  < 4 ? <Text>Password should be greater then 4 characters </Text>  : null }

    </View>

};

const styles = StyleSheet.create({
    input  : {
        margin:15,
        borderColor: 'black',
        borderWidth:1
    },
    text: {
        fontSize:20,
        textAlign: 'center'
    }
});

export default TextScreen ;  

