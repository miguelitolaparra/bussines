import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create ({
  content: {
marginTop: 20
  },

  label: {
    textAlign:'center',
    textTransform: 'uppercase',
    fontSize: 16,
    marginVertical: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#F2F5FB'
  },
  text: {
    fontSize: 16,
    color: '#000'
  },
  picker: {
    marginVertical: 30,
    width: 300,
    padding: 10,
    borderWidth: 1,
    borderColor: "#fff",
    color:"#000"
  },
})

export default Styles
