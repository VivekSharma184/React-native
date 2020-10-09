import React , {useState} from 'react';
import {View , Text , StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const SquareScreen = () => {

const [red , setRed] = useState(0);
const [green , setGreen ] = useState(0);
const [blue , setBlue ] = useState(0);

const COLOR_INCREAMENT = 15;

return <View>
    <ColorCounter 
    onIncrease = {()=> setRed(red + COLOR_INCREAMENT )}
    onDecrease = {() => setRed(red - COLOR_INCREAMENT )}
    color='RED'
    />
    <ColorCounter 
    onIncrease = {()  => setGreen(green + COLOR_INCREAMENT)}
    onDecrease = {()=> setGreen(green - COLOR_INCREAMENT )}
    color='Green' 
    />
    <ColorCounter 
    onIncrease = {() => setBlue(blue + COLOR_INCREAMENT)}
    onDecrease = {()=> setBlue(blue - COLOR_INCREAMENT )}
    color ='Blue' 
    />

    <View style={{width:100 , height:100,  backgroundColor:`rgb(${red} , ${green} , ${blue}  )` }} />
</View>

}
 
const styles = StyleSheet.create({});

export default SquareScreen ;