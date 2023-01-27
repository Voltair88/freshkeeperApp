import { useCallback, useState } from 'react';
import { TextInput, View, Text, DirectToLogin } from '../components';
import styles from '../styles';
import { debounce } from 'lodash';
import { Button, FlatList, Image } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import useCheckUserStatus from '../hooks/useCheckUserStatus';
import { RootTabScreenProps } from '../types';

/**
 * This is the third tab of the app. It shows some recipes and stuff.
 *
 *
 */

export function TabThreeScreen({ navigation }: RootTabScreenProps<'TabThree'>): JSX.Element {
  const user = useCheckUserStatus();
  const [food, setFood] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [recipes, setRecipes] = useState([]);

  if (!user) {
    return <DirectToLogin navigation={navigation} />;
  }

  useFocusEffect(
    useCallback(() => {
      debouncedQuery(food);
    }, [])
  );

  const debouncedQuery = debounce(async (food: string) => {
    try {
      setIsLoading(true);
      await fetch(`https://api.edamam.com/search?q=${food}&app_id=47925dda&app_key=d42b30581e5287c723a76c8c6b585255`)
        .then((response) => response.json())
        .then((data) => {
          setRecipes(data.hits);
          console.log(data.hits);
        });
    } catch (err) {
      console.error(err);
    }
    setIsLoading(false);
  }, 500);

  return (
    <View style={styles.container}>
      <View lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <TextInput placeholder="Search for food" onChangeText={setFood} />
      <Button title="Search" onPress={() => debouncedQuery(food)} />
      <View style={{ height: 20 }} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {isLoading && <Text>Loading...</Text>}
      <FlatList
        data={recipes}
        renderItem={({ item }: any) => (
          <View style={styles.recipeContainer}>
            <Text style={styles.recipedevider} />
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <View
                style={{
                  width: 180,
                  height: 180,
                  aspectRatio: 1 * 1.4,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Image
                  source={{ uri: item.recipe.image }}
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                />
              </View>
              <Text style={styles.recipeLabel}>{item.recipe.label}</Text>
            </View>

            {item.recipe.ingredientLines.map((ingredient: string, index: number) => (
              <Text key={index}>{ingredient}</Text>
            ))}
          </View>
        )}
        keyExtractor={(item: any) => item.recipe.label}
      />
    </View>
  );
}
