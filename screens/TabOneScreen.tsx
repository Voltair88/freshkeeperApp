import styles from '../styles';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { useForm, Controller } from 'react-hook-form';
import React from 'react';
import firebase from '../firebase';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native';
import InputSpinner from 'react-native-input-spinner';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';

export function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [name, setName] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const [amountType, setAmountType] = React.useState('');
  const [storage, setStorage] = React.useState('');
  const [expiration, setExpiration] = React.useState('');
  const [show, setShow] = React.useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      amount: 0,
      amountType: '',
      storage: '',
      expiration: '',
    },
  });

  /* React.useEffect(() => {
    const getDatabase = async () => {
      const snapshot = await firebase.database().ref('/').once('value');
      const storages = snapshot.val();
      console.log(storages);
    };
    getDatabase();
  }, []);
*/
  const onSubmit = (data: any) => console.log(data);

  return (
    <ScrollView>
      <View>
        <Text style={styles.tabtitle}>Add item</Text>
        <Text style={styles.tabsubtitle}>choose your product, storage and expiration date.</Text>
        <Text style={styles.devider} />
        <View style={styles.flexrow}>
          <Text style={styles.itemnumber}>1</Text>
          <Text style={styles.itemname}>Add product name</Text>
        </View>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <TextInput style={styles.nameinput} onChangeText={setName} value={name} />
          )}
          name="name"
        />
        {errors.name && <Text style={styles.error}>Please enter a name</Text>}
        <Text style={styles.devider} />
        <View style={styles.flexrow}>
          <Text style={styles.itemnumber}>2</Text>
          <Text style={styles.itemname}> Choose quantity</Text>
        </View>
        <View style={styles.flexrow}>
          <Controller
            control={control}
            rules={{
              maxLength: 100,
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <InputSpinner
                style={styles.numberinput}
                max={100}
                min={0}
                step={1}
                buttonStyle={{
                  backgroundColor: 'white',
                  borderColor: '#49BEFF',
                  borderWidth: 2,
                }}
                inputStyle={{
                  backgroundColor: 'white',
                  borderColor: '#49BEFF',
                  borderWidth: 2,
                  borderRadius: 70 / 2,
                  height: 70,
                  width: 70,
                }}
                fontSize={40}
                prepend={<View style={{ width: 30 }} />}
                append={<View style={{ width: 30 }} />}
                buttonTextColor="black"
                value={value}
                onChange={setAmount}
              />
            )}
            name="amount"
          />
          <View style={styles.picker}>
            <Picker
              selectedValue={amountType}
              style={styles.amounttype}
              dropdownIconColor="black"
              onValueChange={(itemValue, itemIndex) => setAmountType(itemValue)}
            >
              <Picker.Item label="L" value="L" />
              <Picker.Item label="ml" value="ml" />
              <Picker.Item label="Kg" value="Kg" />
              <Picker.Item label="g" value="g" />
              <Picker.Item label="pcs" value="pcs" />
            </Picker>
            <Text style={styles.amountTypeLabel}>{amountType}</Text>
          </View>
        </View>
        {errors.amount && <Text style={styles.error}>This is required.</Text>}
        {errors.amountType && <Text style={styles.error}>This is required.</Text>}
        <Text style={styles.devider} />
        <View style={styles.flexrow}>
          <Text style={styles.itemnumber}>4</Text>
          <Text style={styles.itemname}> Choose storage</Text>
        </View>
        <Text style={styles.devider} />
        <View style={styles.flexrow}>
          <Text style={styles.itemnumber}>3</Text>
          <Text style={styles.itemname}> Choose expiration date</Text>
        </View>
        <TouchableOpacity
          style={styles.dateinput}
          onPress={() => {
            setShow(true);
          }}
        >
          <Text style={styles.datetext}>{expiration}</Text>
        </TouchableOpacity>
        {show && (
          <RNDateTimePicker
            testID="dateTimePicker"
            value={new Date()}
            mode={'date'}
            is24Hour={true}
            display="default"
            onChange={(event, date) => {
              setShow(false);
              if (date) {
                setExpiration(date.toLocaleDateString());
              }
            }}
          />
        )}
        {errors.expiration && <Text style={styles.error}>This is required.</Text>}
        <Text style={styles.devider} />
        <View>
          <View style={styles.summary}>
            <View>
              <Text style={styles.summarytext}> Product</Text>
              <Text style={styles.summarysubtext}>{name}</Text>
            </View>
            <View>
              <Text style={styles.summarytext}> Quantity</Text>
              <Text style={styles.summarysubtext}>
                {amount} {amountType}
              </Text>
            </View>
            <View>
              <Text style={styles.summarytext}> Storage</Text>
              <Text style={styles.summarysubtext}>{storage}</Text>
            </View>
            <View>
              <Text style={styles.summarytext}> Expiration date</Text>
              <Text style={styles.summarysubtext}>{expiration}</Text>
            </View>
          </View>
        </View>
        <View style={styles.devider} />
        <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
