import { View, Text, Button } from 'react-native'
import React from 'react'
import useAuth from '../hooks/useAuth'

const LoginScreen = () => {
    const { user } = useAuth()

    return (
        <View>
            <Text>Login to the app</Text>
            <Button title="Login" onPress={user} />
        </View>
    )
}

export default LoginScreen