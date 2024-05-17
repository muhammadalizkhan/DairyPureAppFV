import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faClockRotateLeft, faHeart, faMagnifyingGlass, faStar } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';

const FarmInfo = () => {
  return (
    <View style={styles.container} >
     <View style={styles.header}>
       <FontAwesomeIcon icon={faChevronLeft} size={25} style={styles.icon} />
       <View style={styles.rightIcons}>
         <FontAwesomeIcon icon={faMagnifyingGlass} size={25} style={styles.icon} />
         <FontAwesomeIcon icon={faHeart} size={25} style={styles.icon} />
       </View>
     </View>
     <View style={styles.headerBanner}>
       <Text style={styles.headerTitle}>Escha Verzo Farm - Lahore</Text>
     </View>
     <View style={styles.headerContent}>
       <Text style={styles.headerText}>2.7km Away | PKR 129.00 Delivery</Text>
       <Text style={styles.info}>More info</Text>
     </View>
     <View style={styles.leftTexts}>
       <Text>Rs. 500.00 Minimum | Service fee applies</Text>
     </View>
     <View style={styles.rating}> 
       <View style={styles.review}>
         <Text>500+ Rating 4.5 </Text>
         <FontAwesomeIcon  icon={faStar} />
       </View>
       <Text style={styles.info}>See All Reviews</Text>
     </View>
     <View style={styles.deliverytime}>
      <FontAwesomeIcon style={styles.deliveryicon} icon={faClockRotateLeft} />
      <Text style={styles.deliverytext} >Delivery: 45-65 min</Text>
     </View>
   </View>
  )
}

export default FarmInfo

const styles = StyleSheet.create({
    container: {
      width: '100%',
      paddingHorizontal: 7,
      marginTop: 5,
      backgroundColor: '#f3f3f3',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 10,
    },
    headerBanner: {
      paddingHorizontal: 10,
      paddingVertical: 10,
    },
    headerContent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      color: '#49243E',
    },
    leftTexts: {
      marginLeft: 20,
    },
    headerText:{
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 20,
    },
    info: {
      color: '#49243E',
      fontWeight: 'bold',
    },
    rightIcons: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      color: '#49243E',
      marginHorizontal: 10,
    },
    headerTitle: {
      fontSize: 20,
      color: '#49243E',
      marginLeft: 10,
    },
    review: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 20,
    },
    rating: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      color: '#49243E',
      marginTop: 10,
    },
    deliverytime: {
      width: '90%',
      margin: 'auto',
      display: 'flex',
      flexDirection: 'row',
      marginTop: 10,
    },
    deliveryicon: {
      color: '#49243E',
    },
    deliverytext: {
      marginLeft: 10,
    }
  });
  