import styles from '../styles';
import { Text, View, TextInput } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { useRef, useState, useEffect } from 'react';
import { Button, Platform, ScrollView, TouchableOpacity } from 'react-native';
import InputSpinner from 'react-native-input-spinner';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import { collection, addDoc, updateDoc, setDoc } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { v4 as uuidv4 } from 'uuid';
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
  const [user, setUser] = useState(auth.currentUser);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);
  const [amountType, setAmountType] = useState('');
  const [storage, setStorage] = useState('');
  const [expiration, setExpiration] = useState('');
  const [show, setShow] = useState(false);
  const {
    reset,
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<Inputs>();

  const pickerRef = useRef(null);
  const pickerRef2 = useRef(null);

  function open(pickerRef: any) {
    pickerRef.current.focus();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    if (user === null) {
      navigation.navigate('Login');
    }
  }, [user]);

  useEffect(() => {
    register('name', { required: true });
    register('amount', { required: true });
    register('amountType', { required: true });
    register('storage', { required: true });
    register('expiration', { required: true });
  }, [register]);

  useEffect(() => {
    if (isSubmitSuccessful) {
      const getDatabase = async () => {
        const dateCreated = moment().format('YYYY-MM-DD');
        const user = auth.currentUser?.uid;
        const itemId = uuidv4();
        const docRef = collection(db, 'items');
        const docSnap = await addDoc(docRef, {
          name,
          amount,
          amountType,
          storage,
          expiration,
          dateCreated,
          user,
          id: itemId,
        });
        console.log('Document written with ID: ', docSnap.id);
      };
      getDatabase();
    }
  }, [isSubmitSuccessful, name, amount, amountType, storage, expiration, user]);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        name: '',
        amount: 0,
        amountType: '',
        storage: '',
        expiration: '',
      });
      setName('');
      setAmount(0);
      setAmountType('');
      setStorage('');
      setExpiration('');
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
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
              textContentType="name"
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
                <TouchableOpacity
                  style={{
                    height: 48,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => {
                    open(pickerRef);
                  }}
                >
                  <Picker
                    ref={pickerRef}
                    selectedValue={amountType}
                    style={{ display: 'none', opacity: 0, height: 0, width: 0 }}
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
                </TouchableOpacity>
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
        <View style={styles.storage}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <TouchableOpacity
                style={styles.storageinput}
                onPress={() => {
                  open(pickerRef2);
                }}
              >
                <Text style={styles.amountTypeLabel}>{storage}</Text>
                <Picker
                  ref={pickerRef2}
                  selectedValue={storage}
                  style={{ display: 'none', opacity: 0, height: 0, width: 0 }}
                  onValueChange={(value, itemIndex) => {
                    onChange(value);
                    setStorage(value);
                  }}
                >
                  <Picker.Item label="Fridge" value="Fridge" />
                  <Picker.Item label="Freezer" value="Freezer" />
                  <Picker.Item label="Pantry" value="Pantry" />
                  <Picker.Item label="Other" value="Other" />
                </Picker>
              </TouchableOpacity>
            )}
            name="storage"
          />
        </View>
        {errors.storage && <Text style={styles.error}>Enter a storage</Text>}
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
                value={value ? new Date(value) : new Date()}
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
        {DaysLeft(expiration) < 0 && <Text style={styles.error}>Enter a expiration date</Text>}
        <Text style={styles.devider} />
        <View>
          <View style={styles.summary}>
            <View>
              <Text style={styles.summarytext}>Product</Text>
              <Text style={styles.summarysubtext}>{name}</Text>
            </View>
            <View>
              <Text style={styles.summarytext}>Quantity</Text>
              <Text style={styles.summarysubtext}>{amount + ' ' + amountType}</Text>
            </View>
            <View>
              <Text style={styles.summarytext}>Storage</Text>
              <Text style={styles.summarysubtext}>{storage}</Text>
            </View>
            <View>
              <Text style={styles.summarytext}>Expiration date</Text>
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
