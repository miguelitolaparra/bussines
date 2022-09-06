import { StyleSheet } from "react-native"

const Styles = StyleSheet.create({
  // Loading Styles
  contentLoading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textLoading: {
    color: "#04ccf4",
    textTransform: "uppercase",
    marginTop: 10,
  },
  // LoadingModal
  overlayModal: {
    height: "auto",
    width: "90%",
    backgroundColor: "#fff",
  },
  overlay: {
    height: 100,
    width: 200,
    backgroundColor: "#fff",
    borderColor: "#04ccf4",
    borderWidth: 2,
    borderRadius: 10,
  },
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#04ccf4",
    textTransform: "uppercase",
    marginTop: 10,
    textAlign: "center"
  },

  // Carrousel Styles 
  contentCarrousel: {
    position: "relative"
  },
  dotsContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: 70,
    paddingBottom: 0,
  },
  dot: {
    backgroundColor: "#04ccf4",
  },

  // Map Styles
  contentMap: {
    height: 130,
    width: "100%",
  },
})

export default Styles