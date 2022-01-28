import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootTabParamList } from "../types/typesindex";
import styles from "../../styles";
import * as React from "react";
import { Text, View, Button, TextInput } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useForm, Controller } from "react-hook-form";
import InputSpinner from "react-native-input-spinner";

function Additem({ navigation }: NativeStackScreenProps<RootTabParamList>) {
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
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="name"
      />
      {errors.name && <Text>This is required.</Text>}
      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, value } }) => (
          <InputSpinner
            max={100}
            min={0}
            step={1}
            colorMax={"#f04048"}
            colorMin={"#40c5f4"}
            value={value}
            onChange={(number) => onChange(number)}
          />
        )}
        name="number"
      />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}
export default Additem;
function setState(arg0: { value: number }): void {
  throw new Error("Function not implemented.");
}
