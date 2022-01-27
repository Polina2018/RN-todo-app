import React, {useState} from 'react'
import { StyleSheet, View, TextInput, Keyboard, Alert } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import {THEME} from '../theme'

export const AddTodo = ({ onSubmit }) => {
    const [value, setVlaue] = useState('')

    const presshandler = () => {
        if(value.trim()){
            onSubmit(value)
            setVlaue('')
            Keyboard.dismiss()
        }
        else {
            Alert.alert('Заполните поле ввода!')
        }
        
    }

    return (
        <View style={styles.block}>
            <TextInput 
                style={styles.input}
                onChangeText={setVlaue}
                value={value}
                placeholder={"Введите название дела..."}
                autoCorrect={false}
               // keyboardType={'numeric'}
            />
            <AntDesign.Button onPress={presshandler} name='pluscircleo'>Добавить</AntDesign.Button>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,

    },
    input: {
        padding: 10,
        width: '60%',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: THEME.MAIN_COLOR,
    },
    button: {

    }
   
})