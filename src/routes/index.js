import * as React from 'react';
import 'react-native-gesture-handler';
import * as eva from '@eva-design/eva';
import { useSelector } from 'react-redux';
import { ApplicationProvider } from '@ui-kitten/components';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigations from './auth-routes';
// import AppNavigations from './app-routes';

export default () => {

    const { role } = useSelector(state => state.userDetails);
    const { isDarkMode } = useSelector(state => state.appDetails);

    return (
        <ApplicationProvider {...eva} theme={isDarkMode ? eva.dark : eva.light}>
            <NavigationContainer>
                {role ? null : <AuthNavigations />}
            </NavigationContainer>
        </ApplicationProvider>
    );
}