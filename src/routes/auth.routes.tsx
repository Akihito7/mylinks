import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Signln } from "../screens/Signln";
import { Signup } from "../screens/Signup";

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
    return (
        <Navigator screenOptions={{
            headerShown: false,
        }}>
            <Screen
                name="signln"
                component={Signln}
            />

            <Screen
                name="signup"
                component={Signup}
            />
        </Navigator>
    )
}