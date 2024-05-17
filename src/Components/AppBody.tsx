import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AppBody = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate('Farm')}>
        <View style={[styles.box, styles.box1]}>
          <Text style={styles.label}>Cattle Farms</Text>
        </View>
      </Pressable>
      <View style={styles.column}>
        <Pressable
          onPress={() => navigation.navigate('Products')}
        >
          <View style={[styles.box, styles.box2]}>
            <Text style={styles.label}>Dairy Product</Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('Bakery')}
        >
          <View style={[styles.box, styles.box3]}>
            <Text style={styles.label}>Bakeries</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
  },
  Image: {
    fontSize: 10,
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 10,
  },
  box: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  box1: {
    height: 200,
    width: 180,
    borderRadius: 10,
    marginLeft: 10,
    marginTop: 10,
    backgroundColor: '#E9B0DF',
  },
  box2: {
    height: 90,
    width: 200,
    backgroundColor: '#E9B0DF',
    borderRadius: 10,
  },
  box3: {
    height: 100,
    marginTop: 10,
    backgroundColor: '#E9B0DF',
    borderRadius: 10,
  },
  label: {
    fontSize: 23,
    color: 'black',
    fontWeight: '700',
    position: 'absolute',
    top: 10, // Adjust this value to position the text vertically
    alignSelf: "flex-start",
    fontFamily: 'sans-serif',
    marginLeft: 10,
  },
});

export default AppBody
