import { FlatList } from 'react-native';
import EditScreenInfo from '@/src/components/EditScreenInfo';
import { Text, View } from '@/src/components/Themed';
import destinations from '@/assets/data/destiantions';
import DestinationListItem from '@/src/components/DestinationListItem';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/src/lib/store';


export default function DestinationScreen() {
  const testStore = useSelector((state: RootState) => state.test)
  const dispatch = useDispatch<AppDispatch>();
  console.log(testStore.test)
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
