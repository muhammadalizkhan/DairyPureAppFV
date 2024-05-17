import React, { useRef, useEffect, useState } from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View, Dimensions } from 'react-native'

const screenWidth = Dimensions.get('window').width;

const Discount = () => {
    const scrollViewRef = useRef<ScrollView>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        require('../assets/Images/DiscountImageOne.png'),
        require('../assets/Images/DiscountImageTwo.jpg'),
        require('../assets/Images/DiscountImageThree.jpg'),
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (currentIndex + 1) % images.length;
            scrollViewRef.current?.scrollTo({ x: nextIndex * screenWidth, animated: true });
            setCurrentIndex(nextIndex);
        }, 3000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <SafeAreaView>
           <ScrollView
                ref={scrollViewRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollViewContent}
                onContentSizeChange={() => scrollViewRef.current?.scrollTo({ x: currentIndex * screenWidth })}
            >
                {images.map((image, index) => (
                    <View key={index} style={styles.imageContainer}>
                        <Image
                            source={image}
                            style={styles.image}
                        />
                        <View style={styles.discountContainer}>
                            <Text style={styles.discountText}>Get 50% Discount</Text>
                        </View>
                        <View style={styles.CheckOutContainer}>
                            <Text style={styles.discountText}>Check Out</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}


export default Discount;

const styles = StyleSheet.create({
    imageContainer: {
        width: screenWidth * 0.9,
        height: 180,
        borderRadius: 20,
        marginHorizontal: screenWidth * 0.05,
        marginTop: 10,
    },
    ProductList: {
        marginTop: 30,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    discountContainer: {
        position: 'absolute',
        top: 10,
        left: 10,
        backgroundColor: '#f3f3f3',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 15,
    },
    discountText: {
        color: 'black',
        fontWeight: 'bold',
    },
    CheckOutContainer: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        backgroundColor: '#f3f3f3',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 15,
    },

    Header: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    scrollViewContent: {
        alignItems: 'center',
    },
    Image: {
        width: screenWidth * 0.9, // Set the width to 90% of the screen width
        height: 180,
        borderRadius: 10,
        marginHorizontal: screenWidth * 0.05, // Set horizontal margin to 5% of the screen width
    },
    FarmName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    NameIcon: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    FarmIcons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    icon: {
        color: 'black',
        marginHorizontal: 5,
    },
});