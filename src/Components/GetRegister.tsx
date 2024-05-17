import { StyleSheet, Text, Button, View, TouchableOpacity } from 'react-native';
import React from 'react';

const GetRegister = () => {
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.Title} >Are you a Cattle Farmer? </Text>
                <TouchableOpacity
                    style={styles.Button}
                > 
                    <Text style={styles.Text}>
                        Get Register
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default GetRegister;

const styles = StyleSheet.create({
    container: {
        width: '90%',
        margin: 'auto',
        backgroundColor: 'pink',
        padding: 15,
        borderRadius: 10,
        elevation: 8,
        marginTop: 10,
        marginBottom: 10,
    },
    Title:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#49243E',
    },
    Button:{
        backgroundColor: '#49243E',
        padding: 10,
        width: 100,
        borderRadius: 8,
        marginTop: 2,
        elevation: 5,
    },
    Text:{
        color: 'white',
    },
});
