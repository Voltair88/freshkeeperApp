import styles from '../styles';
import { Text, View } from 'react-native';
import { RootTabScreenProps } from '../types';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { useRef, useState } from 'react';
//import firebase from '../firebase';
import { Dimensions, Platform, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import InputSpinner from 'react-native-input-spinner';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import moment from 'moment';
type Inputs = {
  name: string;
  amount: number;
  amountType: string;
  storage: string;
  expiration: string;
};
/**
 *  In this screen you can add a new item to your storage.
 *
 *  choose your products name, quantity, storage and expiration date.
 */
export function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);
  const [amountType, setAmountType] = useState('');
  const [storage, setStorage] = useState('');
  const [expiration, setExpiration] = useState('');
  const [show, setShow] = useState(false);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const pickerRef = useRef(null);

  function open(pickerRef: any) {
    pickerRef.current.focus();
  }

  function close(pickerRef: any) {
    pickerRef.current.blur();
  }
  /* React.useEffect(() => {
    const getDatabase = async () => {
      const snapshot = await firebase.database().ref('/').once('value');
      const storages = snapshot.val();
      console.log(storages);
    };
    getDatabase();
  }, []);
*/
  const onSubmit = (data: Inputs) => {
    console.log(data);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  const DaysLeft = (date: string) => {
    const expirationdate = new Date(date);
    const todaysdate = new Date();
    const diffTime = Math.abs(todaysdate.getTime() - expirationdate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };
  console.log(expiration);

  return (
    <ScrollView>
      <View>
        <Text style={styles.tabsubtitle}>choose your product, storage and expiration date.</Text>
        <Text style={styles.devider} />
        <View style={styles.flexrow}>
          <Text style={styles.itemnumber}>1</Text>
          <Text style={styles.itemname}>Add product name</Text>
        </View>
        <Controller
          control={control}
          rules={{
            maxLength: 100,
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder="Enter product name"
              style={styles.nameinput}
              onChangeText={(value) => {
                onChange(value);
                setName(value);
              }}
              value={value}
            />
          )}
          name="name"
        />
        {errors.name && <Text style={styles.error}>Enter a name</Text>}
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
                onChange={(value) => {
                  onChange(value);
                  setAmount(value as number);
                }}
              />
            )}
            name="amount"
          />
          <View style={styles.picker}>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, value } }) => (
                <Picker
                  ref={pickerRef}
                  selectedValue={amountType}
                  style={styles.amounttype}
                  dropdownIconColor="white"
                  onValueChange={(value, itemIndex) => {
                    onChange(value);
                    setAmountType(value);
                  }}
                >
                  <Picker.Item label="L" value="L" />
                  <Picker.Item label="ml" value="ml" />
                  <Picker.Item label="Kg" value="Kg" />
                  <Picker.Item label="g" value="g" />
                  <Picker.Item label="pcs" value="pcs" />
                </Picker>
              )}
              name="amountType"
            />
            <View style={styles.amountTypeLabelContainer} pointerEvents="none">
              <Text style={styles.amountTypeLabel}>{amountType}</Text>
            </View>
          </View>
        </View>
        {errors.amount && <Text style={styles.error}>Enter a amount</Text>}
        {errors.amountType && <Text style={styles.error}>Enter a amount type</Text>}
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
            showDatepicker();
          }}
        >
          <Text style={styles.datetext}>{expiration ? moment(expiration).format('DD/MM/YYYY') : 'Choose date'}</Text>
        </TouchableOpacity>
        {show && (
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            {...register('expiration')}
            render={({ field: { onChange, value } }) => (
              <RNDateTimePicker
                testID="dateTimePicker"
                value={new Date()}
                mode={'date'}
                minimumDate={new Date()}
                is24Hour={true}
                display="default"
                onChange={(event, selectedDate) => {
                  const currentDate = selectedDate as Date;
                  setShow(Platform.OS === 'ios');
                  onChange(currentDate.toISOString());
                  setExpiration(currentDate.toISOString());
                }}
              />
            )}
            name="expiration"
          />
        )}
        {errors.expiration && <Text style={styles.error}>Enter a expiration date</Text>}
        <Text style={styles.devider} />
        <View>
          <View style={styles.summary}>
            <View>
              <Text style={styles.summarytext}> Product</Text>
              <Text style={styles.summarysubtext}>{name}</Text>
            </View>
            <View>
              <Text style={styles.summarytext}> Quantity</Text>
              <Text style={styles.summarysubtext}>{amount + ' ' + amountType}</Text>
            </View>
            <View>
              <Text style={styles.summarytext}> Storage</Text>
              <Text style={styles.summarysubtext}>{storage}</Text>
            </View>
            <View>
              <Text style={styles.summarytext}> Expiration date</Text>
              <Text style={styles.summarysubtext}>
                {expiration ? DaysLeft(expiration) + ' days left' : 'Choose date'}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.devider} />
        <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
