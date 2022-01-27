import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { AppText } from '../components/ui/AppText'

export const Todo = ({ todo, onRemove, onOpen }) => {
    // const presshandler = () => {
    //     onSubmit('test')
    // }

    // const onLongPressHandler = () => {
    //     onRemove(todo.id)
    // } // add  onLongPress={onLongPressHandler}
    return (
        <TouchableOpacity 
            onPress={() => onOpen(todo.id)}
            onLongPress={onRemove.bind(null, todo.id)}
        >
            <View style={styles.todo}>
                <AppText key={todo.id}>
                    {todo.title.trim()
                    //console.log(todo)
                    }
                </AppText>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
   todo: {
       flexDirection: 'row',
       alignItems: 'center',
       padding: 10,
       borderWidth: 1,
       borderColor: '#eeeeee',
       borderRadius: 5,
       marginBottom: 10
   }
   
})