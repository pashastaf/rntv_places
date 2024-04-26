import { ActivityIndicator, FlatList } from 'react-native';
import EditScreenInfo from '@/src/components/EditScreenInfo';
import { Text, View } from '@/src/components/Themed';
import destinations from '@/assets/data/destiantions';
import DestinationListItem from '@/src/components/DestinationListItem';
import { useDispatch, useSelector } from 'react-redux';
import { useDestinationList } from '@/src/api/destinations';


export default function DestinationScreen() {

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
