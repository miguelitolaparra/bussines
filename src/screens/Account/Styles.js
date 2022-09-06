import { StyleSheet } from "react-native"

const Styles = StyleSheet.create({
  image: {
    resizeMode: "contain",
    width: "100%",
    height: 250,
    marginTop: 20,
  },
  content: {
    marginHorizontal: 24,
  },
  textRegister: {
    fontSize:20,
    marginTop: 15,
    marginHorizontal: 10,
    textAlign: "center"
  },
  btnRegister: {
    color: "#91c43e",
    fontWeight: "bold",
  },
  // UserGuestScreen Styles
  contentGuest: {
    marginHorizontal: 24,
  },
  imageGuest: {
    resizeMode: "contain",
    width: "100%",
    height: 250,
    marginVertical: 20
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    marginBottom: 20,
    fontSize: 18
  },
  btnStyle: {
    backgroundColor: "#5c8ca4",
    borderRadius: 8,
  },
  // UserLoggedScreen Styles
  contentLogged: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  btnStyles: {
    marginTop: 30,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: "#759892",
    borderTopWidth: 1,
    borderTopColor: "#e3e3e3",
    borderBottomWidth: 1,
    borderBottomColor: "#e3e3e3",
  },
  btnTextStyle: {
    color: "#FFFEFC",
    fontSize: 20,
  
  },
})

export default Styles
