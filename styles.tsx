import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import Colors from './constants/Colors';

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
  storage: {
    height: Dimensions.get('window').height * 0.06,
    width: Dimensions.get('window').width * 0.8,
    borderColor: '#49BEFF',
    borderWidth: 2,
    backgroundColor: '#11a9ff1e',
    textAlign: 'center',
    justifyContent: 'center',
    marginHorizontal: 40,
  },
  storageinput: {
    height: Dimensions.get('window').height * 0.06,
    width: Dimensions.get('window').width * 0.8,
    position: 'absolute',
    textAlign: 'center',
    justifyContent: 'center',
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
    borderBottomColor: Colors.light.tint,
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
  },
  amountTypeLabel: {
    fontFamily: 'inter-regular',
    fontSize: Dimensions.get('window').width * 0.08,
    textAlign: 'center',
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
  snackbar: {
    color: 'white',
    fontSize: 16,
    backgroundColor: 'rgb(73, 190, 255)',
    borderColor: 'rgb(67, 129, 162)',
    borderWidth: 1,
  },
  snackbartext: {
    color: 'white',
    fontSize: 16,
  },

  // Storage Tab

  storageContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  storageLabel: {
    height: Dimensions.get('window').height * 0.06,
    lineHeight: Dimensions.get('window').height * 0.06,
    fontSize: Dimensions.get('window').width * 0.07,
    textAlign: 'left',
    justifyContent: 'center',
    marginVertical: 10,
    paddingLeft: 10,
  },

  itemContainer: {
    Flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  item: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  itemleftcollapsed: {
    fontSize: 16,
    width: Dimensions.get('window').width * 0.2,
    height: Dimensions.get('window').height * 0.06,
    lineHeight: Dimensions.get('window').height * 0.06,
    overflow: 'hidden',
  },
  itemleftexpanded: {
    fontSize: 16,
    width: Dimensions.get('window').width * 0.6,
    height: Dimensions.get('window').height * 0.06,
    lineHeight: Dimensions.get('window').height * 0.06,
    overflow: 'hidden',
  },
  itemheader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: Dimensions.get('window').height * 0.06,
    width: Dimensions.get('window').width * 0.9,
    marginHorizontal: 5,
  },
  itembody: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  itemtextbanner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    right: Dimensions.get('window').width * 0.1,
    position: 'absolute',
  },
  itemtextexpandedbanner: {
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'absolute',
    height: Dimensions.get('window').height * 0.1,
    width: Dimensions.get('window').width * 0.22,
    left: Dimensions.get('window').width * 0.01,
  },
  itemtext: {
    fontSize: 16,
    color: 'rgb(73, 190, 255)',
  },
  itemtextexpanded: {
    fontSize: 16,
    color: 'rgb(73, 190, 255)',
    lineHeight: Dimensions.get('window').height * 0.03,
  },
  verticaldevider: {
    height: Dimensions.get('window').height * 0.03,
    width: 1,
    backgroundColor: 'rgb(73, 190, 255)',
    marginHorizontal: 6,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  itembuttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height * 0.1,
    marginRight: 20,
  },
  deleteButton: {
    height: Dimensions.get('window').height * 0.1,
    width: Dimensions.get('window').width * 0.2,
    borderRadius: Dimensions.get('window').height * 0.06,
    borderColor: '#49BEFF',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  deleteButtonText: {
    color: 'black',
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
