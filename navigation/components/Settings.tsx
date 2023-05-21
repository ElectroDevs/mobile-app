import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Button, Icon } from 'react-native-elements';

const Settings: React.FC = () => {
  const [showPackageDetails, setShowPackageDetails] = useState(false);
  const [showTermsOfService, setShowTermsOfService] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showHelpAndSupport, setShowHelpAndSupport] = useState(false);

  const togglePackageDetails = () => {
    setShowPackageDetails(!showPackageDetails);
  };

  const toggleTermsOfService = () => {
    setShowTermsOfService(!showTermsOfService);
  };

  const togglePrivacyPolicy = () => {
    setShowPrivacyPolicy(!showPrivacyPolicy);
  };

  const toggleHelpAndSupport = () => {
    setShowHelpAndSupport(!showHelpAndSupport);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Settings</Text>
       <View style={styles.horizontalLine} />
      <TouchableOpacity style={styles.dropdownToggle} onPress={togglePackageDetails}>
        <Text style={styles.dropdownToggleText}>
          Subscription
          <Icon
            name={showPackageDetails ? 'chevron-up' : 'chevron-down'}
            type="font-awesome"
            size={18}
            color="#707070"
          />
        </Text>
      </TouchableOpacity>
      {showPackageDetails && (
        <View style={styles.dropdownDetails}>
          <Text>
            Product and Services availed:
          </Text>
          <Text>
            - Smoke and Fire Detector
          </Text>
          <Text>
            - Motion Detector
          </Text>
          <Text>
            - Alarm Systems
          </Text>
        </View>
      )}
      <TouchableOpacity style={styles.dropdownToggle} onPress={toggleTermsOfService}>
        <Text style={styles.dropdownToggleText}>
          Terms of Service
          <Icon
            name={showTermsOfService ? 'chevron-up' : 'chevron-down'}
            type="font-awesome"
            size={18}
            color="#707070"
          />
        </Text>
      </TouchableOpacity>
      {showTermsOfService && (
        <View style={styles.dropdownDetails}>
          {/* Render your Terms of Service content here */}
          <Text>Acceptance of Terms</Text>
<Text>1.1 Agreement: By using the App, you acknowledge that you have read, understood, and agree to be bound by these Terms, as well as our Privacy Policy.</Text>
<Text>1.2 Age Requirement: You must be at least 18 years old or have obtained the necessary consent from a legal guardian to use the App.</Text>

<Text>Use of the App</Text>
<Text>2.1 License: We grant you a limited, non-exclusive, non-transferable, revocable license to use the App for personal and non-commercial purposes in accordance with these Terms.</Text>
<Text>2.2 User Account: You may be required to create a user account to access certain features of the App. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</Text>
        </View>
      )}
      <TouchableOpacity style={styles.dropdownToggle} onPress={togglePrivacyPolicy}>
        <Text style={styles.dropdownToggleText}>
          Privacy Policy
          <Icon
            name={showPrivacyPolicy ? 'chevron-up' : 'chevron-down'}
            type="font-awesome"
            size={18}
            color="#707070"
          />
        </Text>
      </TouchableOpacity>
      {showPrivacyPolicy && (
        <View style={styles.dropdownDetails}>
          {/* Render your Privacy Policy content here */}
          <Text>Welcome to ElectroDevs! This Privacy Policy explains how we collect, use, and disclose personal information when you use our mobile application, including any updates, enhancements, and new features. By accessing or using the App, you agree to the collection, use, and disclosure of your personal information as described in this Policy.</Text>
          <Text>Information We Collect</Text>
          <Text>1.1 Personal Information: We may collect personal information that you provide to us when using the App, such as your name, email address, phone number, and home address. </Text>
          <Text>1.2 Device Information: We may collect information about the devices you use to access the App, including device type, operating system, unique device identifiers, and mobile network information. </Text>
          <Text>1.3 Usage Information: We may collect information about how you use the App, including the features you interact with, the settings you choose, and the actions you take.</Text>
          <Text>
            1.4 Location Information: With your consent, we may collect and process information about your precise location when you use certain features of the App that require location data.
          </Text>
          
        </View>
      )}
      <TouchableOpacity style={styles.dropdownToggle} onPress={toggleHelpAndSupport}>
        <Text style={styles.dropdownToggleText}>
          Help & Support
          <Icon
            name={showHelpAndSupport ? 'chevron-up' : 'chevron-down'}
            type="font-awesome"
            size={18}
            color="#707070"
          />
        </Text>
      </TouchableOpacity>
      {showHelpAndSupport && (
        <View style={styles.dropdownDetails}>
          {/* Render your Help & Support content here */}
          <Text>Send your concerns to: electrodevs@support@gmail.com</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: 'center',
  },
  dropdownToggle: {
    alignSelf: 'stretch',
    marginBottom: 10,
  },
  dropdownToggleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#707070',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dropdownDetails: {
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  dropdownDetailsText: {
    fontSize: 16,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#ADAEB3',
    borderRadius: 20,
    width: 300,
  },
  viewbutton: {
    marginTop: 20,
    marginBottom: 20, 
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'left',
    alignSelf: 'flex-start', // Aligns the heading text to the left
    color: '#8C6896'
  },
  horizontalLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#C1C1DE',
    marginBottom: 20,
    width: '100%',
  },
});

export default Settings;
