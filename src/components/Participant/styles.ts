import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1F1E25',
    width: '100%',
    flexDirection: "row",
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },

  name: {
    color: '#FFF',
    flex: 1,
    fontSize: 16,
    marginLeft: 16,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 24,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#E23C44",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",

  },
})