import React from 'react';
import {View , Text ,StyleSheet  } from 'react-native';


const BoxScreen = () => {

    return <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>Box Screen 1 </Text>
        <Text style={styles.textStyle}>Box Screen 2 </Text>
        <Text style={styles.textStyle}>Box Screen 3 </Text>
    </View>
};

const styles = StyleSheet.create({

    viewStyle : {
        borderWidth : 2 , 
        borderColor : 'black',
        
        flexDirection: 'column',
        height: 200,
        justifyContent: 'space-around'
    },

    textStyle : {
        borderWidth : 3,
        borderColor : 'red',
        
        

    }

});

export default BoxScreen ; 
