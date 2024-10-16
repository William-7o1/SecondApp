// src/components/home/Home.js

import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
  Alert,
  View,
} from "react-native";
import { CometChatConversationsWithMessages, ConversationsConfigurationInterface } from "@cometchat/chat-uikit-react-native";
import { CometChat } from "@cometchat/chat-sdk-react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from "../../styles/HomeStyles";

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  // Add other routes and their params here if needed
};

const Home: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList, "Home">>();

  const handleLogout = async () => {
    try {
      await CometChat.logout();
      console.log("Logout successful");
      Alert.alert("Logged Out", "You have been successfully logged out.");
      navigation.reset({
        index: 0,
        routes: [{ name: "Login" }],
      });
    } catch (error) {
      console.error("Logout failed:", error);
      Alert.alert("Logout Failed", "Unable to logout. Please try again.");
    }
  };

  const conversationsConfiguration: ConversationsConfigurationInterface = {
    conversationsStyle: {
      width: '100%',
      height: '100%',
      backgroundColor: 'green',
      titleColor: 'red',
    },
    listItemStyle: {
     backgroundColor: 'green'
    }
 }

  return (
    <SafeAreaView style={styles.container}>
      
      {/* <View style={styles.header}>
        <Text style={styles.headerTitle}>ChatApp</Text>
        <TouchableOpacity
          onPress={handleLogout}
          style={styles.logoutIcon}
          accessibilityLabel="Logout Button"
        >
          <Icon name="sign-out" size={24} color={'#ffffff'} />
        </TouchableOpacity>
      </View> */}


      
      <CometChatConversationsWithMessages
      // conversationsConfiguration={conversationsConfiguration}
      />
    </SafeAreaView>
  );
};

export default Home;
