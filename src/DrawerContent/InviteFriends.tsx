import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Animated, Easing } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faTwitterSquare, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';

const InviteFriends = ({ navigation }) => {
  const [friendEmail, setFriendEmail] = useState('');
  const [buttonOpacity] = useState(new Animated.Value(1));

  const handleInviteFriend = () => {
    if (friendEmail.trim() === '') {
      alert('Please enter a valid email address.');
      return;
    }
    // Simulating invitation
    alert(`Inviting friend with email: ${friendEmail}`);
  };

  const animateButton = () => {
    Animated.timing(buttonOpacity, {
      toValue: 0.7,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <View style={styles.backgroundOverlay}></View>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <FontAwesomeIcon icon={faArrowLeft} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Invite Friends & Share</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.inviteText}>
          Invite your friend to join using their email address:
        </Text>
        <TextInput
          style={styles.emailInput}
          placeholder="Enter friend's email"
          value={friendEmail}
          onChangeText={setFriendEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TouchableOpacity
          style={[styles.inviteButton, { opacity: buttonOpacity }]}
          onPress={() => {
            animateButton();
            handleInviteFriend();
          }}
        >
          <FontAwesomeIcon icon={faUserPlus} style={styles.inviteIcon} />
          <Text style={styles.inviteButtonText}>Invite</Text>
        </TouchableOpacity>
        <View style={styles.socialIconsContainer}>
          <TouchableOpacity
            style={[styles.socialIcon, styles.facebookIcon]}
            onPress={() => alert('Share via Facebook')}
          >
            <FontAwesomeIcon icon={faFacebookSquare} style={styles.socialIconStyle} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.socialIcon, styles.twitterIcon]}
            onPress={() => alert('Share via Twitter')}
          >
            <FontAwesomeIcon icon={faTwitterSquare} style={styles.socialIconStyle} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.socialIcon, styles.whatsappIcon]}
            onPress={() => alert('Share via WhatsApp')}
          >
            <FontAwesomeIcon icon={faWhatsappSquare} style={styles.socialIconStyle} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 123, 255, 0.2)', // Semi-transparent blue overlay
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  backButton: {
    padding: 10,
    marginRight: 10,
  },
  backIcon: {
    fontSize: 24,
    color: '#007bff', // iOS-style blue color
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 50,
    justifyContent: 'center',
  },
  inviteText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  emailInput: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
    fontSize: 16,
    color: '#333',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  inviteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007bff',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 10,
  },
  inviteIcon: {
    color: '#fff',
    fontSize: 20,
    marginRight: 10,
  },
  inviteButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  socialIcon: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 50,
    marginHorizontal: 10,
  },
  socialIconStyle: {
    fontSize: 40,
    color: '#007bff', // iOS-style blue color
  },
});

export default InviteFriends;
