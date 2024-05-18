import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';
import { useAuth } from '../Contexts/AuthContext';

export function Routes() {

    const { user } = useAuth();

    return (
        <NavigationContainer>
            {user.name ? <AppRoutes /> : <AuthRoutes />}
        </NavigationContainer>

    );
}


