import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Modalize } from 'react-native-modalize';

const GetRegister = () => {
    const modalizeRef = useRef<Modalize>(null);
    const [name, setName] = useState('');
    const [farmName, setFarmName] = useState('');
    const [location, setLocation] = useState('');
    const [totalArea, setTotalArea] = useState('');
    const [numberOfAnimals, setNumberOfAnimals] = useState('');
    const [email, setEmail] = useState('');
    const [cnic, setCnic] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [productionType, setProductionType] = useState('');
    const [numberOfProducts, setNumberOfProducts] = useState('');

    const onOpen = () => {
        modalizeRef.current?.open();
    };

    return (
        <View style={styles.outerContainer}>
            <View style={styles.container}>
                <Text style={styles.title}>Are you a Cattle Farmer?</Text>
                <TouchableOpacity style={styles.button} onPress={onOpen}>
                    <Text style={styles.buttonText}>Get Register</Text>
                </TouchableOpacity>
            </View>

            <Modalize ref={modalizeRef} adjustToContentHeight={true}>
                <ScrollView contentContainerStyle={styles.modalContent}>
                    <Text style={styles.modalTitle}>Register Your Farm</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Your Name"
                        value={name}
                        onChangeText={setName}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Farm Name"
                        value={farmName}
                        onChangeText={setFarmName}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Location"
                        value={location}
                        onChangeText={setLocation}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Total Area (sq ft)"
                        keyboardType="numeric"
                        value={totalArea}
                        onChangeText={setTotalArea}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Number of Animals"
                        keyboardType="numeric"
                        value={numberOfAnimals}
                        onChangeText={setNumberOfAnimals}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="CNIC"
                        value={cnic}
                        onChangeText={setCnic}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Phone Number"
                        keyboardType="phone-pad"
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Production Type (Large/Small)"
                        value={productionType}
                        onChangeText={setProductionType}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Number of Products"
                        keyboardType="numeric"
                        value={numberOfProducts}
                        onChangeText={setNumberOfProducts}
                    />
                    <TouchableOpacity style={styles.submitButton}>
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                </ScrollView>
            </Modalize>
        </View>
    );
};

export default GetRegister;

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    container: {
        width: '90%',
        backgroundColor: '#E9B0DF',
        padding: 20,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#49243E',
        marginBottom: 15,
    },
    button: {
        backgroundColor: '#49243E',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
    },
    modalContent: {
        padding: 20,
    },
    modalTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#49243E',
        marginBottom: 20,
        alignSelf: 'center',
    },
    input: {
        width: '100%',
        backgroundColor: '#fff',
        padding: 15,
        marginVertical: 8,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    },
    submitButton: {
        backgroundColor: '#49243E',
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
        marginTop: 20,
        alignSelf: 'center',
    },
});
