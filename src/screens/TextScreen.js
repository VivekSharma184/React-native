import React , {useState} from 'react';
import {Text,  View , StyleSheet , TextInput } from 'react-native';


const TextScreen = () => {
 const [mytext , setMyText] = useState('');
    return <View>

<TextInput 
style={styles.input}
autoCapitalize="none"
autoCorrect={false}
value={mytext}
onChangeText ={(newValue)=> setMyText(newValue) }
/>

<Text>My text is {mytext}</Text>
    </View>

};

const styles = StyleSheet.create({
    input  : {
        margin:15,
        borderColor: 'black',
        borderWidth:1
    }
});

export default TextScreen ;  

