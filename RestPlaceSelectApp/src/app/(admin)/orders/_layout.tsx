import { Link, Stack } from "expo-router";


export default function DestinationStack() {
    return (
    <Stack>
        <Stack.Screen name="list" options={{ headerShown: false }} />   
    </Stack>
    )
}