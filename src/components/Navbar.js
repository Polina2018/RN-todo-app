import React from 'react'
import { StyleSheet, View, Platform } from 'react-native'
import { AppTextBold } from '../components/ui/AppTextBold'
import {THEME} from '../theme'

export const Navbar = props => {
    return (
        <View style={{...styles.navbar, ...Platform.select({
            ios: styles.navbarIos,
            android: styles.navbarAndroid
        })}}>
            <AppTextBold style={styles.text}>{props.title}</AppTextBold>
        </View>
    )

}

const styles = StyleSheet.create({
    navbar: {
        height: 80,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 10,
    },
    navbarAndroid: {
        backgroundColor: THEME.MAIN_COLOR,
    },
    navbarIos: {
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth: 1,
    },
    text: {
        fontSize: 20,
        color: Platform.OS === 'ios' ? THEME.MAIN_COLOR : '#fff',
        textAlign: 'center',
    }
})