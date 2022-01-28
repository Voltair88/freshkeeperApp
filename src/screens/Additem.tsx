import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootTabParamList } from "../types/typesindex";
import styles from "../../styles";
import * as React from "react";
import { Text, View, Button, TextInput } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useForm, Controller } from "react-hook-form";
import InputSpinner from "react-native-input-spinner";

function Additem({ navigation }: NativeStackScreenProps<RootTabParamList>) {
  /*   function setState(arg0: { value: number }): void {
    throw new Error("Function not implemented.");
  }
   */
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      number: 0,
    },
  });
  const onSubmit = (data: any) => console.log(data);
  return (
    <View>
      <Text style={styles.tabtitle}>Add item</Text>
      <Text style={styles.tabsubtitle}>
        choose your product, storage and expiration date.
      </Text>
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
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.nameinput}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="name"
      />
      <Text style={styles.devider} />
      <View style={styles.flexrow}>
        <Text style={styles.itemnumber}>2</Text>
        <Text style={styles.itemname}> Choose quantity</Text>
      </View>
      {errors.name && <Text>This is required.</Text>}
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
              backgroundColor: "white",
              borderColor: "#49BEFF",
              borderWidth: 2,
            }}
            inputStyle={{
              backgroundColor: "white",
              borderColor: "#49BEFF",
              borderWidth: 2,
              borderRadius: 70 / 2,
              height: 70,
            }}
            fontSize={40}
            prepend={<View style={{ width: 30 }} />}
            append={<View style={{ width: 30 }} />}
            buttonTextColor="black"
            value={value}
            onChange={(number) => onChange(number)}
          />
        )}
        name="number"
      />
      <Text style={styles.devider} />
      <View style={styles.flexrow}>
        <Text style={styles.itemnumber}>3</Text>
        <Text style={styles.itemname}> Choose storage</Text>
      </View>

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}
export default Additem;
