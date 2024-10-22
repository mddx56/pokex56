import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { PokemonScreen } from '../screens/pokemon/PokemonScreen';
import { SearchScreen } from '../screens/search/SearchScreen';

export type RootStackParams = {
    HomeScrean: undefined;
    PokemonScrean: { pokeId: number };
    SearchScreen: undefined;
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigaror = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="HomeScrean" component={HomeScreen} />
            <Stack.Screen name="PokemonScrean" component={PokemonScreen} />
            <Stack.Screen name="SearchScreen" component={SearchScreen} />
        </Stack.Navigator>
    );
}