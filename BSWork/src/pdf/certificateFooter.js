import React from 'react';
import { View, Text, Image, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
    alignItems: 'center',
  },
  signatureBlock: {
    width: '40%',
    textAlign: 'center',
  },
  signatureImage: {
    width: 50,
    height: 50,
  },
  signatureText: {
    fontSize: 12,
    marginTop: 5,
  },
});

const CertificateFooter = ({ convenerSignature, secretarySignature }) => (
  <View style={styles.footer}>
    <View style={styles.signatureBlock ,{ marginLeft: 30 }}>
      <Image style={styles.signatureImage} src={convenerSignature} />
      <Text style={styles.signatureText}>Convener</Text>
    </View>
    <View style={styles.signatureBlock, { marginRight: 30 }}>
      <Image style={styles.signatureImage} src={secretarySignature} />
      <Text style={styles.signatureText}>Secretary</Text>
    </View>
  </View>
);

export default CertificateFooter;
