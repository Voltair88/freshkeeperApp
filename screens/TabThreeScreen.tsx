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

  /**
   * This code is a function that returns a list of recipes by using an API call to edamam.com.
   * The function takes the input of a string and uses that string to query the API.
   * The function uses the fetch() method to make an API call to the edamam.com API.
   * The API returns a list of recipes that match the query and the function stores the list in a variable called recipes.
   * The function also has a boolean variable called isLoading that is set to true while the API call is being made and false when the call is completed.
   */
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
