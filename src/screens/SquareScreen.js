import React , {useReducer} from 'react';
import {View , Text , StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREAMENT = 15;


const reducer = (state, action) => {

    switch (action.colorToChange) {
        case 'red':
            state.red +action.amount >255 || state.red + action.amount < 0 
             ? state :  {...state , red : state.red + action.amount };
           
            case 'green' :
                state.red +action.amount >255 || state.red + action.amount < 0 
                ? state : {...state , green : state.green + action.amount };
                case 'blue':
                    state.red +action.amount >255 || state.red + action.amount < 0 
                    ? state : {...state , blue : state.blue + action.amount };
                    default:
                        return state;
    }
}

const SquareScreen = () => {

    const [state , dispatch] = useReducer(reducer , {red:0 , green: 0 , blue: 0 });
    const {red , green , blue} = state;

return <View>
    <ColorCounter 
    onIncrease = {()=> dispatch({colorToChange : 'red' , amount: COLOR_INCREAMENT }) }
    onDecrease = {() =>  dispatch({colorToChange: 'red' , amount: -1* COLOR_INCREAMENT })}
    color='RED'
    />
    <ColorCounter 
    onIncrease = {()  => dispatch({colorToChange : 'green' , amount: COLOR_INCREAMENT }) }
    onDecrease = {()  =>  dispatch({colorToChange: 'green' , amount: -1* COLOR_INCREAMENT })}
    color='Green' 
    />
    <ColorCounter 
    onIncrease = {() => dispatch({colorToChange : 'blue' , amount: COLOR_INCREAMENT }) }
    onDecrease = {()=> dispatch({colorToChange: 'blue' , amount: -1* COLOR_INCREAMENT }) }
    color ='Blue' 
    />

    <View style={{width:100 , height:100,  backgroundColor:`rgb(${red} , ${green} , ${blue}  )` }} />
</View>

}
 
const styles = StyleSheet.create({});

export default SquareScreen ;