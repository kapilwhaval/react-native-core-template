import React, { useState } from 'react';
import { TouchableWithoutFeedback, KeyboardAvoidingView, View } from 'react-native';
import { Layout, Text, Input, Icon, Button, Toggle } from "@ui-kitten/components";
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../../redux/actions/app';

export default () => {

    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({ email: '', password: '' });
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const { isDarkMode } = useSelector(state => state.appDetails);
    const dispatch = useDispatch();

    const renderEyeIcon = (props) => (
        <TouchableWithoutFeedback onPress={() => setSecureTextEntry(!secureTextEntry)}>
            <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
        </TouchableWithoutFeedback>
    );

    const renderCaption = (message) => <Text style={{ color: 'red', fontSize: 11 }}>{message}</Text>

    return (
        <Layout style={{ flex: 1, paddingTop: 60, paddingLeft: 10, paddingRight: 10 }}>
            <Text category="h5">LOGIN</Text>
            <Toggle status='primary' checked={isDarkMode} onChange={() => dispatch(toggleDarkMode())}>Dark Mode</Toggle>
            <Layout style={{ flex: 1, alignItems: 'center', marginTop: 20 }}>
                <Input
                    value={credentials.email}
                    label='EMAIL'
                    placeholder='Email'
                    caption={() => renderCaption(errors.email)}
                    onChangeText={(nextValue) => setCredentials({ ...credentials, email: nextValue })}
                />
                <Input
                    style={{ marginTop: 10 }}
                    value={credentials.password}
                    label='PASSWORD'
                    placeholder='Password'
                    caption={() => renderCaption(errors.password)}
                    accessoryRight={renderEyeIcon}
                    secureTextEntry={secureTextEntry}
                    onChangeText={(nextValue) => setCredentials({ ...credentials, password: nextValue })}
                />
            </Layout>
            <KeyboardAvoidingView style={{ marginBottom: 20 }} behavior={"height"}>
                <Button style={{ backgroundColor: '#FC8019', borderColor: '#FC8019' }} >LOGIN</Button>
                <Text style={{ marginTop: 20, marginBottom: 20, textAlign: "center" }} category="h6">OR</Text>
                <Button style={{ marginBottom: 10, backgroundColor: '#EA4335', borderColor: '#EA4335' }} accessoryLeft={(props) => <Icon name='google' {...props} />}>Login with Google</Button>
                <Button style={{ backgroundColor: '#3B5998', borderColor: '#3B5998' }} accessoryLeft={(props) => <Icon name='facebook' {...props} />}>Login with Facebook</Button>
            </KeyboardAvoidingView>
        </Layout>
    );
}