import { FlatList } from 'react-native';
import EditScreenInfo from '@/src/components/EditScreenInfo';
import { Text, View } from '@/src/components/Themed';
import products from '@/assets/data/products';
import destinations from '@/assets/data/destiantions';
import DestinationListItem from '@/src/components/DestinationListItem';


export default function DistinationScreen() {
  return (
      <FlatList
        data={destinations}
        renderItem={({ item }) => <DestinationListItem destination={item} />}
        numColumns={1}
        contentContainerStyle={{ gap: 10, padding: 10}}
        //columnWrapperStyle= {{ gap: 10}}
    />
  );
}
