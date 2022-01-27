import React, {useState, useEffect, useContext, useCallback} from 'react'
import { StyleSheet, View, FlatList, Image, Dimensions } from 'react-native'
import { AddTodo } from '../components/AddTodo'
import { AppLoader } from '../components/AppLoader'
import { Todo } from '../components/Todo'
import { AppButton } from '../components/ui/AppButton'
import { AppText } from '../components/ui/AppText'
import { ScreenContext } from '../context/screen/screenContext'
import { TodoContext } from '../context/todo/todoContext'
import { THEME } from '../theme'

export const MainScreen = () => {
    const { addTodo, todos, removeTodo, fetchTodos, loading, error } = useContext(TodoContext) 
    const { changeScreen } = useContext(ScreenContext)
    const [deviceWidth, setDeviceWidth] = useState(Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2)
    
    const loadTodos = useCallback(async() => await fetchTodos(), [fetchTodos])
    useEffect(() => {
        loadTodos()
    }, [])
    useEffect(() => {
        const update = () => {
            const width = Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2
            setDeviceWidth(width)
        }
        Dimensions.addEventListener('change', update)

        return () => {
            Dimensions.removeEventListener('change', update)
        }
    })

    if(loading) {
        return <AppLoader/>
    }

    if(error) {
        return (
            <View style={styles.center}>
                <AppText style={styles.error}>{error}</AppText>
                <AppButton onPress={loadTodos}>Повторить</AppButton>
            </View>)
    }
    let content = (
        <View style={{width: deviceWidth}}>
        <FlatList 
            keyExtractor={item => item.id.toString()}
            data={todos}
            renderItem={({item}) => <Todo todo={item} onRemove={removeTodo} onOpen={changeScreen} /> }
        />
        </View>
    )

    if(todos.length === 0) {
       content = <View style={styles.imageWrap}><Image style={styles.image} source={require('../../assets/no-items.png')}/></View>
    }
    return (
        <View>
            <AddTodo onSubmit={addTodo}/>
            {content}
        </View>
    )
}

const styles = StyleSheet.create({
    imageWrap: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        height: 300
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    error: {
        fontSize: 20,
        color: THEME.RED_COLOR
    }
})