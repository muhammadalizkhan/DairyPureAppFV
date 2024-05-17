import React from 'react';
import { StyleSheet, View, Image, Text, FlatList, Dimensions, Animated } from 'react-native';
import { CattleFarm, cattleFarms } from '../Data/data';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLocationCrosshairs, faMoneyBill, faMotorcycle, faStar } from '@fortawesome/free-solid-svg-icons';

const { width } = Dimensions.get('window');

const FarmList = () => {
    const scrollY = React.useRef(new Animated.Value(0)).current;

    const renderItem = ({ item }: { item: CattleFarm }) => (
        <View style={styles.slide}>
            <Image style={styles.img} source={item.image} />
            <View style={styles.titleBody}>
                <Text style={styles.name}>{item.name}</Text>
                <View style={styles.ratingContainer}>
                    <FontAwesomeIcon
                        color='#49243E'
                        size={18}
                        style={styles.icon}
                        icon={faStar}
                    />
                    <Text style={styles.rating}>{item.rating}</Text>
                </View>
            </View>
            <View style={styles.details}>
                <View style={styles.delivery}>
                    <FontAwesomeIcon
                        icon={faMoneyBill}
                        color='#49243E'
                        size={18}
                    />
                    <Text style={styles.detailText}>{item.deliveryPrice}</Text>
                </View>
                <View style={styles.delivery}>
                    <FontAwesomeIcon
                        icon={faMotorcycle}
                        color='#49243E'
                        size={18}
                    />
                    <Text style={styles.detailText}>{item.deliveryTime} | </Text>
                    <FontAwesomeIcon
                        icon={faLocationCrosshairs}
                        color='#49243E'
                        size={18}
                    />
                    <Text style={styles.detailText}>{item.location}</Text>
                </View>
            </View>
        </View>
    )

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Farms Production</Text>
            </View>
            <FlatList
                data={cattleFarms}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.flatListContent}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: false }
                )}
                pagingEnabled
                snapToInterval={280}
                decelerationRate="fast"
            />
        </View>
    )
}

export default FarmList

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flex: 1,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#49243E',
        marginLeft: 10,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        flex: 1, // Take as much space as available
    },
    titleBody: {
        flexDirection: 'row',
        alignItems: 'center', // Center vertically
        paddingHorizontal: 10, // Add padding for spacing
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center', // Center vertically
    },
    icon: {
        marginRight: 5,
    },
    delivery: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    slide: {
        width: width * 0.9,
        backgroundColor: 'white',
        marginHorizontal: 20,
        marginBottom: 20,
        borderRadius: 10,
        marginTop:10,
        elevation: 5,
    },
    img: {
        width: '100%',
        height: 180,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    details: {
        paddingHorizontal: 10,
        paddingBottom: 10,
    },
    detailText: {
        fontSize: 14,
        color: 'black',
        marginLeft: 10,
    },
    flatListContent: {
        alignItems: 'center',
    },
    rating: {
        color: 'green',
    },
})
