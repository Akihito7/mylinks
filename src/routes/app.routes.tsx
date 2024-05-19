import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Home } from "../screens/Home";
import { AboutLink } from "../screens/AboutLink";
import { useTheme } from "native-base";
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const { Navigator, Screen } = createBottomTabNavigator<AuthStackParamList>();

export type AuthStackParamList = {
    aboutLink: { id?: string | null };
    home : undefined,

};

export function AppRoutes() {
    const { colors } = useTheme();

    return (
        <Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: colors.purple[500],
            tabBarInactiveTintColor: colors.gray[100],
            tabBarStyle: {
                backgroundColor: colors.gray[600],
                borderTopWidth: 0,
            }
        }}>
            <Screen
                name="home"
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo name="home" size={24} color={color} />
                    )
                }}
            />

            <Screen
                name="aboutLink"
                component={AboutLink}
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="addfile" size={24} color={color} />
                    )
                }}
            />

        </Navigator>
    )
}