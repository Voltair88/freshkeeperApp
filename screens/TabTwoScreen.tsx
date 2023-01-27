import styles from '../styles';
import { Text, View, useStorages, Item, DirectToLogin } from '../components';
import { RootTabScreenProps } from '../types';
import { ScrollView } from 'react-native';
import useCheckUserStatus from '../hooks/useCheckUserStatus';
import useGetItems from '../hooks/useGetItems';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

/**
 * This is the second tab of the app. It shows the items of the user.
 *
 * TODO: Add a way to edit the items
 */
export function TabTwoScreen({ navigation }: RootTabScreenProps<'TabTwo'>): JSX.Element {
  const user = useCheckUserStatus();
  const { items, isLoading } = useGetItems();
  const storages = useStorages();
  const colorScheme = useColorScheme();

  if (!user) {
    return <DirectToLogin navigation={navigation} />;
  }

  return (
    <ScrollView>
      <View style={styles.storageContainer} darkColor={Colors[colorScheme].background}>
        <Text style={styles.tabsubtitle} darkColor={Colors[colorScheme].text}>
          Items
        </Text>
        {storages.map((storage) => (
          <View key={storage.name}>
            <Text
              style={{
                ...styles.storageLabel,
                backgroundColor: storage.backgroundColor,
              }}
            >
              {storage.name}
            </Text>
            {isLoading ? (
              <Text>Loading...</Text>
            ) : (
              items.filter((item) => item.storage === storage.name).map((item) => <Item item={item} key={item.id} />)
            )}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
