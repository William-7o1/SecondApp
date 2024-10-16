// src/components/styles/LoginStyle.js

import { StyleSheet, Dimensions } from "react-native";

// Get device dimensions for responsive design
const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#ECE5DD", // Light WhatsApp background
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  logoContainer: {
    marginBottom: 30,
    alignItems: "center",
  },
  logo: {
    width: width * 0.4, // Responsive width
    height: width * 0.4,
    resizeMode: "contain",
  },
  titleContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#075E54", // Dark green
  },
  subtitle: {
    marginTop:20,
    fontSize: 16,
    color: "#555555",
  },
  inputContainer: {
    width: "90%",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderColor: "#25D366",
    borderWidth: 1,
    borderRadius: 30,
    backgroundColor: "#ffffff",
    fontSize: 16,
    color: "#000000",
  },
  loginButton: {
    backgroundColor: "#25D366", // WhatsApp green
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
    width: "90%",
    shadowColor: "#25D366",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
    marginBottom: 15,
  },
  loginButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
  },
  signUpButton: {
    alignItems: "center",
    marginTop: 15,
    width: "100%",
  },
  signUpText: {
    color: "#075E54",
    fontSize: 16,
    textDecorationLine: "underline",
  },
  logoutButton: {
    backgroundColor: "#ff5252",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 20,
    position: "absolute",
    bottom: 20,
    shadowColor: "#ff5252",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
  },
  logoutButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  loader: {
    marginVertical: 20,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)", // Semi-transparent background
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  modalContainer: {
    width: "90%",
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#075E54",
    marginBottom: 20,
    textAlign: "center",
  },
  modalInput: {
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderColor: "#25D366",
    borderWidth: 1,
    borderRadius: 25,
    backgroundColor: "#f9f9f9",
    fontSize: 16,
    color: "#000000",
    marginBottom: 15,
  },
  modalButton: {
    backgroundColor: "#25D366",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    alignItems: "center",
    width: "100%",
    shadowColor: "#25D366",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
    marginBottom: 10,
  },
  modalButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  modalCancelButton: {
    backgroundColor: "#cccccc",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    alignItems: "center",
    width: "100%",
  },
  modalCancelText: {
    color: "#333333",
    fontSize: 16,
    fontWeight: "600",
  },
});
