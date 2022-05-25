import { useEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootTabParamList } from "../types/typesindex";
import styles from "../../styles";
import * as React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { useForm, Controller } from "react-hook-form";
import InputSpinner from "react-native-input-spinner";
import firebase from "../../firebase";

function Additem({ navigation }: NativeStackScreenProps<RootTabParamList>) {
  const [name, setName] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      amount: 0,
    },
  });

  useEffect(() => {
    const getDatabase = async () => {
      const snapshot = await firebase.database().ref("/").once("value");
      const storages = snapshot.val();
      console.log(storages);
    };
    getDatabase();
  }, []);

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
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.nameinput}
            onChangeText={(name) => onChange(name)}
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
              maxWidth: 70,
            }}
            fontSize={40}
            prepend={<View style={{ width: 30 }} />}
            append={<View style={{ width: 30 }} />}
            buttonTextColor="black"
            value={value}
            onChange={(amount) => onChange(amount)}
          />
        )}
        name="amount"
      />
      <Text style={styles.devider} />
      <View style={styles.flexrow}>
        <Text style={styles.itemnumber}>3</Text>
        <Text style={styles.itemname}> Choose storage</Text>
      </View>
      <Text style={styles.devider} />
      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}
export default Additem;
