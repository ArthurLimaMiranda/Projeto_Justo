import { createNativeStackNavigator } from '@react-navigation/native-stack' 

import Welcome from '../pages/Login/Welcome'
import SignIn from '../pages/Login/SignIn'

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
             name="Welcome"
             component={Welcome}
             option={{ headershown: false }}
            />

            <Stack.Screen
             name="SignIn"
             component={SignIn}
             option={{ headershown: false }}
            />

            <Stack.Screen
             name="Create"
             component={Create}
             option={{ headershown: false }}
            />
       </Stack.Navigator>
    )
}