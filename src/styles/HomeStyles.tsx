// import { StyleSheet } from "react-native";

// export const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: "#ECE5DD", // Consistent with Login screen
//     },
//     header: {
//       height: 60,
//       backgroundColor: "#075E54", // WhatsApp dark green
//       flexDirection: "row",
//       alignItems: "center",
//       justifyContent: "space-between",
//       paddingHorizontal: 15,
//       elevation: 4, // Adds shadow for Android
//       shadowColor: "#000", // Adds shadow for iOS
//       shadowOffset: { width: 0, height: 2 }, // Shadow position
//       shadowOpacity: 0.3, // Shadow transparency
//       shadowRadius: 3, // Shadow blur
//     },
//     headerTitle: {
//       color: "#ffffff",
//       fontSize: 20,
//       fontWeight: "bold",
//     },
//     logoutIcon: {
//       padding: 5,
//     },
//     conversationsComponent: {
//       flex: 1,
//       // Additional styling if needed
//     },
//   });
  

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECE5DD", // WhatsApp-like light gray
  },
  header: {
    height: 60,
    backgroundColor: "#075E54", // WhatsApp-like dark green
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  logoutIcon: {
    padding: 10,
  },
  chatContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
});
