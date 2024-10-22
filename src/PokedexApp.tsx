import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'react-native-gesture-handler';
import { ThemeContextProvider } from "./presentetation/context/ThemeContext";
import { StackNavigaror } from "./presentetation/navigator/StackNavigator";

const queryClient = new QueryClient()

export const PokedexApp = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeContextProvider>
                <StackNavigaror />
            </ThemeContextProvider>
        </QueryClientProvider>)
}