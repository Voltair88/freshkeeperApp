/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Freshkeeper: NavigatorScreenParams<RootTabParamList> | undefined;
  Signup: undefined;
  Login: undefined;
  Account: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
  TabThree: undefined;
  Signup: undefined;
  Login: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

export type item = {
  id: string | null;
  name: string;
  amount: number;
  amountType: string;
  storage: string;
  expiration: string;
  dateCreated: string;
  user: string | null;
};

export type ItemProps = {
  item: item;
};

export interface FormInputs {
  name: string;
  amount: number;
  amountType: string;
  storage: string;
  expiration: string;
}
export type Inputs = {
  name: string;
  amount: number;
  amountType: string;
  storage: string;
  expiration: string;
};

export type storages = {
  name: string;
  backgroundColor: string;
};
