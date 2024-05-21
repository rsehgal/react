// src/CertificateHeader.js
import React from 'react';
import { View, Text, Image, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  conferenceName: {
    fontSize: 26,
    textAlign: 'center',
    flex: 1,
    fontWeight: 'bold',
  },
});

const CertificateHeader = ({ leftLogo, rightLogo, conferenceName }) => (
  <View style={styles.header}>
    {leftLogo && <Image style={styles.logo} src={leftLogo} />}
    <Text style={styles.conferenceName}>{conferenceName}</Text>
    {rightLogo && <Image style={styles.logo} src={rightLogo} />}
  </View>
);

export default CertificateHeader;
