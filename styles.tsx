import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Dimensions } from 'react-native';
const styles = StyleSheet.create({
  // Header
  header: {
    flex: 1,
    backgroundColor: '#0E4462',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
  },
  headertitle: {
    color: '#49BEFF',
    fontSize: 20,
    fontFamily: 'pacifico-regular',
  },

  // Tabbars
  tabtitle: {
    fontFamily: 'inter-regular',
    fontWeight: '700',
    fontSize: 26,
    textAlign: 'center',
    marginLeft: 20,
    marginRight: 20,
    paddingVertical: 5,
  },
  tabsubtitle: {
    borderBottomColor: '#6363637f',
    fontFamily: 'inter-light',
    fontSize: 12,
    fontStyle: 'italic',
    textAlign: 'center',
  },

  // App
  body: {
    flex: 10,
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
    justifyContent: 'space-around',
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
    textAlign: 'center',
    paddingVertical: 5,
    left: Dimensions.get('window').width * 0.03,
    marginTop: 10,
    position: 'absolute',
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
  },
  amounttype: {
    fontSize: 12,
    height: 50,
  },
  amountTypeLabel: {
    position: 'absolute',
    fontSize: 26,
    textAlign: 'center',
    marginTop: 5,
    marginLeft: 5,
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
    fontSize: 16,
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
