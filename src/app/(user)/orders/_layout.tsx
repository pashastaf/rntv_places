import { Link, Stack } from "expo-router";


export default function DestinationStack() {
    return (
    <Stack>
        <Stack.Screen name="index" options={{ title: "Orders" }} />   
    </Stack>
    )
}