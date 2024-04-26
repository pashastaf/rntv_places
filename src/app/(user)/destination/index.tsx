import { ActivityIndicator, FlatList } from 'react-native';
import { Text, View } from '@/src/components/Themed';
import DestinationListItem from '@/src/components/DestinationListItem';
import { useDestinationList } from '@/src/api/destinations/index';

export default function DistinationScreen() {

  const {data: destination, error, isLoading  } = useDestinationList();

  if (isLoading) {
    return <ActivityIndicator />
  }

  if (error) {
    return <Text> Failed to fetch product </Text>
  }

  return (
      <FlatList
        data={destination}
        renderItem={({ item }) => <DestinationListItem destination={item} />}
        numColumns={1}
        contentContainerStyle={{ gap: 10, padding: 10}}
        //columnWrapperStyle= {{ gap: 10}}
    />
  );
}
