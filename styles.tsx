import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Dimensions } from 'react-native';
const styles = StyleSheet.create({
  // Tabbars
  tabsubtitle: {
    borderBottomColor: '#6363637f',
    fontFamily: 'inter-light',
    fontSize: 12,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  // Additem
  error: {
    color: 'red',
    fontSize: 12,
    fontFamily: 'inter-regular',
    textAlign: 'center',
  },
  nameinput: {
    backgroundColor: '#11a9ff1e',
    borderColor: '#49beff',
    borderWidth: 1,
    height: Dimensions.get('window').height * 0.05,
    paddingHorizontal: 10,
    marginHorizontal: 40,
    marginVertical: 10,
    borderRadius: 4,
  },
  numberinput: {
    height: Dimensions.get('window').height * 0.1,
    borderRadius: 4,
    marginVertical: 3,
    borderColor: '#49BEFF',
  },
  devider: {
    borderBottomWidth: 1,
    borderBottomColor: '#6363637f',
    marginTop: 10,
    height: Dimensions.get('window').height * 0.01,
    marginHorizontal: 20,
  },
  flexrow: {
    height: Dimensions.get('window').height * 0.07,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemname: {
    fontSize: 16,
  },
  itemnumber: {
    backgroundColor: '#49BEFF',
    borderRadius: Dimensions.get('window').height * 0.08,
    color: 'white',
    width: Dimensions.get('window').width * 0.08,
    height: Dimensions.get('window').width * 0.08,
    left: Dimensions.get('window').width * 0.03,
    position: 'absolute',
    lineHeight: Dimensions.get('window').width * 0.08,
    textAlign: 'center',
    fontSize: Dimensions.get('window').width * 0.04,
    fontWeight: 'bold',
  },
  picker: {
    height: Dimensions.get('window').height * 0.08,
    width: Dimensions.get('window').width * 0.16,
    borderRadius: Dimensions.get('window').height * 0.08,
    borderColor: '#49BEFF',
    borderWidth: 2,
    backgroundColor: '#11a9ff1e',
    textAlign: 'center',
    justifyContent: 'center',
    left: Dimensions.get('window').width * 0.04,
    right: Dimensions.get('window').width * 0.04,
  },
  amounttype: {
    fontSize: Dimensions.get('window').width * 0.08,
    height: 50,
    color: '#11a9ff1e',
  },
  amountTypeLabel: {
    fontSize: Dimensions.get('window').width * 0.08,
  },
  amountTypeLabelContainer: {
    height: Dimensions.get('window').height * 0.08,
    width: Dimensions.get('window').width * 0.16,
    borderRadius: Dimensions.get('window').height * 0.08,
    backgroundColor: '#b6e4fe1e',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateinput: {
    height: Dimensions.get('window').height * 0.05,
    width: Dimensions.get('window').width * 0.5,
    margintop: 10,
    left: Dimensions.get('window').width * 0.25,
    borderRadius: 4,
    backgroundColor: '#11a9ff1e',
    borderColor: '#49beff',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  datetext: {
    color: 'black',
    fontSize: Dimensions.get('window').width * 0.04,
    fontWeight: 'bold',
  },
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: 45,
    marginTop: 10,
    marginHorizontal: 20,
  },
  summarytext: {
    flexDirection: 'column',
    fontSize: 14,
    fontFamily: 'inter-regular',
    fontWeight: '700',
  },
  summarysubtext: {
    fontSize: 18,
    fontFamily: 'inter-regular',
    fontWeight: '700',
    color: 'rgb(73, 190, 255)',
  },

  // Account

  // Login

  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  button: {
    backgroundColor: '#49BEFF',
    padding: 12,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: '#fff',
  },
  buttonText: {
    color: '#fff',
    fontSize: Dimensions.get('window').width * 0.05,
    fontWeight: 'bold',
  },
  logininput: {
    backgroundColor: 'white',
    height: Dimensions.get('window').height * 0.05,
    paddingHorizontal: 10,
    marginHorizontal: 40,
    marginVertical: 10,
    borderRadius: 4,
  },
});

export default styles;
