import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/login';
// import SignUp from '../screens/signup';
// import ForgotPassword from '../screens/forgot-password';

const Stack = createStackNavigator();

export default () => (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Login" component={Login} />
            {/* <Stack.Screen name="Sign Up" component={SignUp} /> */}
            {/* <Stack.Screen name="ForgotPassword" component={ForgotPassword} /> */}
        </Stack.Navigator>
);