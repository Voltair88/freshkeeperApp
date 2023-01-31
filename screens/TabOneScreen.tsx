import styles from '../styles';
import { Text, View, TextInput } from '../components';
import { RootTabScreenProps, FormInputs, Inputs } from '../types';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { useRef, useState, useEffect } from 'react';
import { Platform, ScrollView, TouchableOpacity } from 'react-native';
import InputSpinner from 'react-native-input-spinner';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import useCheckUserStatus from '../hooks/useCheckUserStatus';
import { DirectToLogin } from '../components';
import { useSendItem } from '../hooks/useSendItem';
import { Snackbar } from 'react-native-paper';
/**
 *  In this screen you can add a new item to your storage.
 *
 *  choose your products name, quantity, storage and expiration date.
 * TODO: Add a picture of the product
 * TODO: Add a barcode scanner
 * TODO: fix the date picker
 */
export function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>): JSX.Element {
  const user = useCheckUserStatus();
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);
  const [amountType, setAmountType] = useState('');
  const [storage, setStorage] = useState('');
  const [expiration, setExpiration] = useState('');
  const [showDateWarning, setShowDateWarning] = useState(false);
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(false);
  const {
    reset,
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<Inputs>();

  /**
   * Reset states to empty
   * @returns void
   *
   */
  const resetStates = () => {
    setName('');
    setAmount(0);
    setAmountType('');
    setStorage('');
    setExpiration('');
  };

  // Refs for the pickers
  const amountTypeRef = useRef(null);
  const storageRef = useRef(null);
  const showDatepicker = () => {
    setShow(true);
  };

  // Send item to firebase

  const sendItem = useSendItem();

  // open amount type picker

  function open(amountTypeRef: any) {
    amountTypeRef.current.focus();
  }

  useEffect(() => {
    // Register form fields with React Hook Form
    register('name');
    register('amount');
    register('amountType');
    register('storage');
    register('expiration');
    // Reset form fields to empty
  }, [register, reset, isSubmitSuccessful]);

  /**
   * submit form data
   * @param data submit data
   */
  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    if (expiration === '') {
      setShowDateWarning(true);
    } else {
      setVisible(true);
      sendItem.sendItem({
        ...data,
        id: uuidv4(),
        dateCreated: moment().format('YYYY-MM-DD'),
        user: user?.uid as string,
      });
      reset();
      resetStates();
    }
  };

  function showDateWarningText() {
    if (showDateWarning) {
      return <Text style={styles.error}>Enter an expiration date</Text>;
    } else {
      return null;
    }
  }

  // eslint-disable-next-line no-unused-vars
  function datePicker(value: string, onChange: (...event: any[]) => void) {
    return (
      <RNDateTimePicker
        testID="dateTimePicker"
        value={value ? new Date(value) : new Date()}
        mode={'date'}
        minimumDate={new Date()}
        is24Hour={true}
        display="default"
        onChange={(_event, selectedDate) => {
          const currentDate = selectedDate as Date;
          setShow(Platform.OS === 'ios');
          onChange(currentDate.toISOString());
          setExpiration(currentDate.toISOString());
        }}
      />
    );
  }

  function daysLeftSummary(expirationDate: string): number {
    if (expirationDate === '') {
      return 0;
    }
    const expiration = new Date(expirationDate);
    const today = new Date();
    const diff = Math.abs(today.getTime() - expiration.getTime());
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return days;
  }

  function daysLeftText(expirationDate: string): string {
    const daysLeft = daysLeftSummary(expirationDate);
    if (daysLeft === 0) {
      return '';
    } else if (daysLeft === 1) {
      return 'Tomorrow';
    } else {
      return `${daysLeft} days left`;
    }
  }

  if (!user) {
    return <DirectToLogin navigation={navigation} />;
  }

  return (
    <View>
      <ScrollView>
        <View>
          <Text style={styles.tabsubtitle}>choose your product, storage and expiration date.</Text>
          <Text style={styles.devider} />
          <View style={styles.flexrow}>
            <Text style={styles.itemnumber}>1</Text>
            <Text style={styles.itemname}>Add product name</Text>
          </View>
          <Controller
            name="name"
            control={control}
            rules={{ required: true }}
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
          />
          {errors.name && <Text style={styles.error}>Enter a name</Text>}
          <Text style={styles.devider} />
          <View style={styles.flexrow}>
            <Text style={styles.itemnumber}>2</Text>
            <Text style={styles.itemname}> Choose quantity</Text>
          </View>
          <View style={styles.flexrow}>
            <Controller
              name="amount"
              control={control}
              rules={{
                required: true,
                min: {
                  value: 1,
                  message: 'Enter an amount',
                },
              }}
              render={({ field: { onChange, value } }) => (
                <InputSpinner
                  type="real"
                  placeholder="0"
                  style={styles.numberinput}
                  rounded={true}
                  colorPress={'#49BEFF'}
                  precision={2}
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
            />
            <View style={styles.picker}>
              <Controller
                name="amountType"
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange } }) => (
                  <TouchableOpacity
                    style={{
                      height: 48,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    onPress={() => {
                      open(amountTypeRef);
                    }}
                  >
                    <Text style={{ fontSize: 20, color: 'black' }}>{amountType ? '' : '...'}</Text>
                    <Picker
                      ref={amountTypeRef}
                      selectedValue={amountType}
                      style={{ display: 'none', opacity: 0, height: 0, width: 0 }}
                      onValueChange={(value) => {
                        onChange(value);
                        setAmountType(value);
                      }}
                    >
                      <Picker.Item label="Options" enabled={false} />
                      <Picker.Item label="L" value="L" />
                      <Picker.Item label="ml" value="ml" />
                      <Picker.Item label="Kg" value="Kg" />
                      <Picker.Item label="g" value="g" />
                      <Picker.Item label="pcs" value="pcs" />
                    </Picker>
                  </TouchableOpacity>
                )}
              />
              <View style={styles.amountTypeLabelContainer} pointerEvents="none">
                <Text style={styles.amountTypeLabel}>{amountType}</Text>
              </View>
            </View>
          </View>
          {errors.amount && <Text style={styles.error}>{errors.amount.message}</Text>}
          {errors.amountType && <Text style={styles.error}>Enter a amount type</Text>}
          <Text style={styles.devider} />
          <View style={styles.flexrow}>
            <Text style={styles.itemnumber}>4</Text>
            <Text style={styles.itemname}> Choose storage</Text>
          </View>
          <View style={styles.storage}>
            <Controller
              name="storage"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange } }) => (
                <TouchableOpacity
                  style={styles.storageinput}
                  onPress={() => {
                    open(storageRef);
                  }}
                >
                  <Text style={styles.amountTypeLabel}>{storage ? storage : 'Choose storage'}</Text>
                  <Picker
                    ref={storageRef}
                    selectedValue={storage}
                    style={{ display: 'none', opacity: 0, height: 0, width: 0 }}
                    onValueChange={(value) => {
                      onChange(value);
                      setStorage(value);
                    }}
                  >
                    <Picker.Item label="Options" enabled={false} />
                    <Picker.Item label="Fridge" value="Fridge" />
                    <Picker.Item label="Freezer" value="Freezer" />
                    <Picker.Item label="Pantry" value="Pantry" />
                    <Picker.Item label="Other" value="Other" />
                  </Picker>
                </TouchableOpacity>
              )}
            />
          </View>
          {errors.storage && <Text style={styles.error}>Enter a storage</Text>}
          <Text style={styles.devider} />
          <View style={styles.flexrow}>
            <Text style={styles.itemnumber}>3</Text>
            <Text style={styles.itemname}> Choose expiration date</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.dateinput} onPress={showDatepicker}>
              <Text style={styles.datetext}>
                {expiration ? moment(expiration).format('DD/MM/YYYY') : 'Choose date'}
              </Text>
            </TouchableOpacity>
            {show && (
              <Controller
                name="expiration"
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => datePicker(value, onChange)}
              />
            )}
          </View>
          {errors.expiration && <Text style={styles.error}>{errors.expiration.message}</Text>}
          {showDateWarningText()}
          <Text style={styles.devider} />
          <View>
            <View style={styles.summary}>
              <View>
                <Text style={styles.summarytext}>Product</Text>
                <Text style={styles.summarysubtext}>{name}</Text>
              </View>
              <View>
                <Text style={styles.summarytext}>Quantity</Text>
                <Text style={styles.summarysubtext}>{amount === 0 ? '' : amount + ' ' + amountType} </Text>
              </View>
              <View>
                <Text style={styles.summarytext}>Storage</Text>
                <Text style={styles.summarysubtext}>{storage}</Text>
              </View>
              <View>
                <Text style={styles.summarytext}>Expiration date</Text>
                <Text style={styles.summarysubtext}>{daysLeftText(expiration)}</Text>
              </View>
            </View>
          </View>
          <View style={styles.devider} />
          <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
            <Text style={styles.buttonText}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Snackbar
        style={styles.snackbar}
        visible={visible}
        duration={3000}
        onDismiss={() => setVisible(false)}
        action={{ label: 'Ok', buttonColor: '#e4e4e4', textColor: 'black', onPress: () => setVisible(false) }}
      >
        <Text style={styles.snackbartext}>Item added to your Storage</Text>
      </Snackbar>
    </View>
  );
}
