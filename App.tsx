// import React, { useEffect } from 'react';
// import { Platform, PermissionsAndroid, Alert } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { CometChatUIKit, UIKitSettings } from '@cometchat/chat-uikit-react-native';
// import Login from './src/components/login/Login';
// import Home from './src/components/home/Home';
// import { CometChat } from '@cometchat/chat-sdk-react-native';
// import { AppConstants } from './AppConstant';

// const Stack = createStackNavigator();

// const App = () => {

//   const getPermissions = () => {
//     if (Platform.OS == "android") {
//       PermissionsAndroid.requestMultiple([
//         PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//         PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
//         PermissionsAndroid.PERMISSIONS.CAMERA,
//         PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
//       ]);
//     }
// }


//   useEffect(() => {
//     getPermissions();
//     let uikitSettings : UIKitSettings= {
//       appId: AppConstants.APP_ID,
//       authKey: AppConstants.AUTH_KEY,
//       region: AppConstants.REGION,
//       subscriptionType: CometChat.AppSettings.SUBSCRIPTION_TYPE_ALL_USERS,
//     };

//     CometChatUIKit.init(uikitSettings)
//     .then(() => {
//         console.log("CometChatUiKit successfully initialized")
//     })
//     .catch((error) => {
//         console.log("Initialization failed with exception:", error)
//     })
//   },[]);

//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Login">
//         <Stack.Screen
//           name="Login"
//           component={Login}
//           options={{ headerShown: false }} 
//         />
//         <Stack.Screen
//           name="Home"
//           component={Home}
//           options={{ headerShown: false }} 
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;


import React, { useEffect } from 'react';
import { Platform, PermissionsAndroid } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { CometChatUIKit, UIKitSettings, CometChatTheme, CometChatContextProvider } from '@cometchat/chat-uikit-react-native';
import { CometChat } from '@cometchat/chat-sdk-react-native';

import Login from './src/components/login/Login';
import Home from './src/components/home/Home';
import { AppConstants } from './AppConstant';

const Stack = createStackNavigator();
// Create and customize the theme
const myTheme = new CometChatTheme({});

// Set the color mode
myTheme.palette.setMode('dark'); 
// myTheme.palette.setMode('light');
// Customize Palette to match WhatsApp colors

// Background color
myTheme.palette.setBackground({
  light: '#ECE5DD', // WhatsApp's background color in light mode
  dark: '#121B22',  // WhatsApp's background color in dark mode
});

// Primary color (App bar and buttons)
myTheme.palette.setPrimary({
  light: '#075E54', // WhatsApp's primary color in light mode
  dark: '#128C7E',  // WhatsApp's primary color in dark mode
});

// Secondary color (Floating action button)
myTheme.palette.setSecondary({
  light: '#25D366', // WhatsApp's secondary color
  dark: '#25D366',
});

// Accent colors (used for various UI elements)
myTheme.palette.setAccent({
  light: '#34B7F1', // Light blue accent color
  dark: '#34B7F1',
});

// Error color (for error messages)
myTheme.palette.setError({
  light: '#D32F2F', // Standard error color
  dark: '#EF5350',
});

// Additional accent colors
myTheme.palette.setAccent50({
  light: '#E0F2F1',
  dark: '#004D40',
});
myTheme.palette.setAccent100({
  light: '#B2DFDB',
  dark: '#00796B',
});
myTheme.palette.setAccent200({
  light: '#80CBC4',
  dark: '#009688',
});
myTheme.palette.setAccent300({
  light: '#4DB6AC',
  dark: '#26A69A',
});
myTheme.palette.setAccent400({
  light: '#26A69A',
  dark: '#4DB6AC',
});
myTheme.palette.setAccent500({
  light: '#009688',
  dark: '#80CBC4',
});
myTheme.palette.setAccent600({
  light: '#00897B',
  dark: '#B2DFDB',
});
myTheme.palette.setAccent700({
  light: '#00796B',
  dark: '#E0F2F1',
});
myTheme.palette.setAccent800({
  light: '#00695C',
  dark: '#E0F7FA',
});
myTheme.palette.setAccent900({
  light: '#004D40',
  dark: '#B2EBF2',
});

// Customize Typography to match WhatsApp style

// Name style (e.g., contact names)
myTheme.typography.setName({
  fontSize: 16,
  fontWeight: 'bold',
  color: {
    light: '#000000', // Black for light mode
    dark: '#FFFFFF',  // White for dark mode
  },
});

// Title1 style (e.g., message text)
myTheme.typography.setTitle1({
  fontSize: 15,
  fontWeight: 'normal',
  color: {
    light: '#000000',
    dark: '#EDEDED',
  },
});

// Subtitle1 style (e.g., timestamps)
myTheme.typography.setSubtitle1({
  fontSize: 12,
  fontWeight: 'normal',
  color: {
    light: '#999999', // Grey color for timestamps
    dark: '#B0B0B0',
  },
});

// Caption1 style (e.g., status messages)
myTheme.typography.setCaption1({
  fontSize: 13,
  fontWeight: 'normal',
  color: {
    light: '#777777',
    dark: '#CCCCCC',
  },
});

// Adjust other typography styles as needed



const App = () => {

  const getPermissions = () => {
    if (Platform.OS == "android") {
      PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      ]);
    }
  }

  useEffect(() => {
    getPermissions();
    let uikitSettings: UIKitSettings = {
      appId: AppConstants.APP_ID,
      authKey: AppConstants.AUTH_KEY,
      region: AppConstants.REGION,
      subscriptionType: CometChat.AppSettings.SUBSCRIPTION_TYPE_ALL_USERS,
    };

    CometChatUIKit.init(uikitSettings)
      .then(() => {
        console.log("CometChatUiKit successfully initialized");
      })
      .catch((error) => {
        console.log("Initialization failed with exception:", error);
      });
  }, []);

  return (
    <CometChatContextProvider theme={myTheme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }} 
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CometChatContextProvider>
  );
};

export default App;

