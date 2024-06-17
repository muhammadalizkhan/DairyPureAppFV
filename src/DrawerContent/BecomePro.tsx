import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faTruck, faPercent, faUnlock, faCommentsDollar, faShippingFast, faCashRegister } from '@fortawesome/free-solid-svg-icons';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import UserSupport from '../Components/UserSupport';
import EditCardDetails from '../Components/EditCardDetails';

const BecomePro = () => {
  const userData = {
    name: 'Muhammad Ali Tax Mafia',
    email: 'malikhandev@outlook.com',
    bankCard: '**** **** **** 1234',
    profileImage: require('../assets/Images/Profile.jpg'),
  };

  const membershipPlans = [
    {
      name: 'Pure Pro',
      benefits: [
        { text: 'First 5 Deliveries Free', icon: faTruck },
        { text: '5% Discount', icon: faPercent },
        { text: 'Unlock All Features', icon: faUnlock },
        { text: 'Request Chat with Farmer', icon: faCommentsDollar },
      ],
      price: '10$ 6 Months',
    },
    {
      name: 'Pure Premium',
      benefits: [
        { text: 'First 5 Deliveries Free', icon: faTruck },
        { text: '15% Discount', icon: faPercent },
        { text: 'Chat with Farmer', icon: faCommentsDollar },
        { text: 'Free CashBack', icon: faCashRegister },
      ],
      price: '10$ 6 Months',
    },
    {
      name: 'Pure Exclusive',
      benefits: [
        { text: 'First 5 Deliveries Free', icon: faTruck },
        { text: '25% Discount', icon: faPercent },
        { text: 'Free Delivery', icon: faShippingFast },
        { text: 'Unlock All Pro Features', icon: faUnlock },
        { text: 'Chat with Farmer', icon: faCommentsDollar },
        { text: 'Free CashBack', icon: faCashRegister },
      ],
      price: '10$ 6 Months',
    },
  ];

  const navigation = useNavigation();
  const translateX = useSharedValue(0);

  const gestureHandler = () => ({
    onGestureEvent: (event: { nativeEvent: { translationX: number; }; }) => {
      translateX.value = event.nativeEvent.translationX;
    },
    onEnd: (_event: any, ctx: any) => {
      const SWIPE_THRESHOLD = 0.25 * Dimensions.get('window').width;
      if (Math.abs(translateX.value) > SWIPE_THRESHOLD) {
        translateX.value = withSpring(
          Math.sign(translateX.value) * Dimensions.get('window').width,
          { damping: 10, stiffness: 100, overshootClamping: true }
        );
      } else {
        translateX.value = withSpring(0, { damping: 10, stiffness: 100, overshootClamping: true });
      }
    },
  });

  const cardStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesomeIcon icon={faChevronLeft} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Become a Pro Member</Text>
      </View>
      
      <View style={styles.profileContainer}>
        <Image source={userData.profileImage} style={styles.profileImage} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{userData.name}</Text>
          <Text style={styles.userEmail}>{userData.email}</Text>
          <Text style={styles.userDetails}>Bank Card: {userData.bankCard}</Text>
        </View>
      </View>
      
      <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
        {membershipPlans.map((plan, index) => (
          <PanGestureHandler key={index} {...gestureHandler()}>
            <Animated.View style={[styles.planCard, cardStyles]}>
              <Text style={styles.planName}>{plan.name}</Text>
              <View style={styles.planBenefits}>
                {plan.benefits.map((benefit, idx) => (
                  <View key={idx} style={styles.benefitContainer}>
                    <FontAwesomeIcon icon={benefit.icon} style={styles.benefitIcon} />
                    <Text style={styles.planBenefit}>{benefit.text}</Text>
                  </View>
                ))}
              </View>
              <Text style={styles.planPrice}>{plan.price}</Text>
              <TouchableOpacity style={styles.selectButton}>
                <Text style={styles.buttonText}>Select Plan</Text>
              </TouchableOpacity>
            </Animated.View>
          </PanGestureHandler>
        ))}
      </ScrollView>
      
      <UserSupport />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 10,
    paddingTop: 20, // Adjust as needed for status bar height
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backIcon: {
    color: '#007bff',
    fontSize: 24,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  userInfo: {
    marginLeft: 20,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 16,
    color: '#666',
  },
  userDetails: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  planCard: {
    width: Dimensions.get('window').width * 0.8,
    height: 250,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    marginHorizontal: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  planName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  planBenefits: {
    marginBottom: 10,
  },
  benefitContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  benefitIcon: {
    color: '#007bff',
    marginRight: 10,
  },
  planBenefit: {
    fontSize: 14,
    color: '#666',
  },
  planPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007bff',
    textAlign: 'center',
    marginBottom: 10,
  },
  selectButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BecomePro;
