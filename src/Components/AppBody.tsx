import { Pressable, StyleSheet, Text, Image, View } from 'react-native'
import React from 'react'

const AppBody = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate('Farm')}>
        <View style={[styles.box, styles.box1]}>
          <Text style={styles.label}>Cattle Farms</Text>
          <Text style={[styles.Sublabel, { top: 40 }]}>Order Farm Prodcuts</Text>
        </View>
      </Pressable>
      <View style={styles.column}>
        <Pressable
          onPress={() => navigation.navigate('Products')}
        >
          <View style={[styles.box, styles.box2]}>
            <Text style={styles.label}>Dairy Product</Text>
            <Text style={styles.Sublabel}>Top Farm to your Door</Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('Bakery')}
        >
          <View style={[styles.box, styles.box3]}>
            <Text style={styles.label}>Bakeries</Text>
            <Text style={styles.Sublabel}>Love your Bake Items</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  CakeImage: {
    position: 'absolute',
    width: 80,
    height: 80,
    right: 10,
  },
  Sublabel: {
    color: 'black',
    fontSize: 14,
    position: 'absolute',
    top: 40,
    alignSelf: "flex-start",
    fontFamily: 'sans-serif',
    marginLeft: 10,
  },
  Logo: {
    position: 'absolute',
    width: 248,
    height: 250,
    borderRadius: 10,
    bottom: 1,
    right: 1,
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
    width: 160,
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 10,
    backgroundColor: '#E9B0DF',
    elevation: 1,
  },
  box2: {
    height: 120,
    width: 200,
    backgroundColor: '#E9B0DF',
    borderRadius: 10,
    elevation: 1,
  },
  DPImage: {
    position: 'absolute',
    width: '75%',
    height: '75%',
    top: 26,
    left: 65,
  },
  box3: {
    height: 70,
    marginTop: 10,
    backgroundColor: '#E9B0DF',
    borderRadius: 10,
    elevation: 1,
  },
  DPBK: {
    position: 'absolute',
    width: 65,
    height: 65,
    top: 2.5,
    left: 150,
  },
  label: {
    fontSize: 23,
    color: 'black',
    fontWeight: '700',
    position: 'absolute',
    top: 10,
    alignSelf: "flex-start",
    fontFamily: 'sans-serif',
    marginLeft: 10,
  },
});

export default AppBody
