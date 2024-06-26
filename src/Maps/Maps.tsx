import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import Mapbox from "@rnmapbox/maps";
import { NavigationProp } from "@react-navigation/native"; // Import NavigationProp if using React Navigation

interface Props {
  navigation: NavigationProp<any>; // Define the type for navigation prop
}

Mapbox.setAccessToken("pk.eyJ1IjoiaW5hYW1mbHV0dGVyZGV2IiwiYSI6ImNseHV3b2p5MTF1MzkybXF3NjNoYm41N2IifQ.sZIUOHUTsiFJMFqOSqZEaA");

const MapsScreen: React.FC<Props> = ({ navigation }) => {
  const handlePress = () => {
    // Navigate to Home screen or perform any navigation action here
    navigation.navigate('Home');
    console.log("Navigate to Home screen");
  };

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Mapbox.MapView style={styles.map} />
      </View>
      <View style={styles.button}>
        <Pressable style={styles.buttonContent} onPress={handlePress}>
          <Text style={styles.buttonText}>Home</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    height: '80%',
    width: '90%',
  },
  map: {
    flex: 1,
  },
  button: {
    marginTop: 10,
    width: '80%',
    height: '8%',
    backgroundColor: 'pink',
    borderRadius: 10,
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },
  buttonContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black'
  },
});

export default MapsScreen;
