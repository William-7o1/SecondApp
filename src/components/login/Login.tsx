// src/components/login/Login.js

import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Modal,
  View,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { CometChat } from "@cometchat/chat-sdk-react-native";
import { AppConstants } from "../../../AppConstant"; // Ensure this points to your constants file
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { styles } from "../../styles/LoginStyles";

// Define your navigation stack parameters
type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  // Add other routes and their params here if needed
};

const Login: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList, "Login">>();
  const [loading, setLoading] = useState<boolean>(false);
  const [uid, setUid] = useState<string>(""); // Start with an empty UID
  const [newUser, setNewUser] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [showAddUserModal, setShowAddUserModal] = useState<boolean>(false);

  // Handle user login
  const handleLogin = async () => {
    if (!uid.trim()) {
      Alert.alert("Validation Error", "Please enter a UID to login.");
      return;
    }

    setLoading(true);
    try {
      const user = await CometChat.login(uid, AppConstants.AUTH_KEY);
      console.log("Login successful:", user);
      setIsLoggedIn(true);
      AppConstants.UID = uid; // Update AppConstants with the new UID
      navigation.navigate("Home");
    } catch (error) {
      console.error("Login failed:", error);
      Alert.alert("Login Error", "Failed to login. Please check your UID and try again.");
    } finally {
      setLoading(false);
    }
  };

  // Handle new user sign up
  const handleSignUp = async () => {
    if (!newUser.trim()) {
      Alert.alert("Validation Error", "Please enter a UID for the new user.");
      return;
    }

    setLoading(true);
    const user = new CometChat.User(newUser);
    user.setName(newUser); // You can set more user details if needed

    try {
      const createdUser = await CometChat.createUser(user, AppConstants.AUTH_KEY);
      console.log("User created successfully:", createdUser);
      Alert.alert("Success", "User created successfully! You can now login with your UID.");
      setShowAddUserModal(false);
      setUid(newUser);
    } catch (error) {
      console.error("User creation failed:", error);
      Alert.alert("Sign Up Error", "Failed to create user. The UID might already be taken.");
    } finally {
      setLoading(false);
    }
  };

  // Handle user logout (optional, based on your app flow)
  const handleLogout = async () => {
    try {
      await CometChat.logout();
      console.log("Logout successful");
      setIsLoggedIn(false);
      AppConstants.UID = ""; // Clear the UID on logout
      Alert.alert("Logged Out", "You have been successfully logged out.");
    } catch (error) {
      console.error("Logout failed:", error);
      Alert.alert("Logout Failed", "Unable to logout. Please try again.");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.keyboardAvoidingView}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
          {/* Logo Section */}
          <View style={styles.logoContainer}>
            <Image
              source={require("../../assets/logo.png")} // Ensure the path is correct
              style={styles.logo}
            />
          </View>

          {/* Title Section */}
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Welcome to ChatApp</Text>
            <Text style={styles.subtitle}>Login to continue</Text>
          </View>

          {/* Input Section */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter UID"
              placeholderTextColor="#999999"
              value={uid}
              onChangeText={setUid}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="default"
            />
          </View>

          {/* Button Section */}
          {loading ? (
            <ActivityIndicator size="large" color="#25D366" style={styles.loader} />
          ) : (
            <>
              <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>Login</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.signUpButton}
                onPress={() => setShowAddUserModal(true)}
              >
                <Text style={styles.signUpText}>New user? Sign Up</Text>
              </TouchableOpacity>
            </>
          )}

          {/* Logout Button (Optional) */}
          {/* {isLoggedIn && (
            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
              <Text style={styles.logoutButtonText}>Logout</Text>
            </TouchableOpacity>
          )} */}

          {/* Sign-Up Modal */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={showAddUserModal}
            onRequestClose={() => setShowAddUserModal(false)}
          >
            <View style={styles.modalOverlay}>
              <View style={styles.modalContainer}>
                <Text style={styles.modalTitle}>Create New Account</Text>
                <TextInput
                  style={styles.modalInput}
                  placeholder="Enter UID"
                  placeholderTextColor="#999999"
                  value={newUser}
                  onChangeText={setNewUser}
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="default"
                />
                <TouchableOpacity style={styles.modalButton} onPress={handleSignUp}>
                  <Text style={styles.modalButtonText}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.modalCancelButton}
                  onPress={() => setShowAddUserModal(false)}
                >
                  <Text style={styles.modalCancelText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Login;
