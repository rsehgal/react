// src/CertificateTemplate.js
import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font, Image } from '@react-pdf/renderer';
import CertificateHeader from './certificateHeader';
import CertificateFooter from './certificateFooter';

// Optionally register custom fonts
// Font.register({ family: 'CustomFont', src: 'path/to/font.ttf' });

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    padding: 30,
    fontFamily: 'Helvetica',
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 20,
    color: '#0e6251',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
  body: {
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 10,
  },
  image: {
    marginVertical: 15,
    alignSelf: 'center',
    width: 200,
    height: 200,
  },
  signatureContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
  },
  signature: {
    fontSize: 12,
    color: 'gray',
  },
});

const CertificateTemplate = ({ name, event, date, signature, logo, conferenceName , leftLogo,rightLogo, convenerSignature, secretarySignature}) => (
  <Document>
    <Page size="A4" style={styles.page}>
    <CertificateHeader leftLogo={leftLogo} rightLogo={rightLogo} conferenceName={conferenceName} />  
      <Text style={styles.title}>Certificate of Participation</Text>
      <Text style={styles.subtitle}>This is to certify that</Text>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.body}>has participated in the event</Text>
      <Text style={styles.title}>{event}</Text>
      <Text style={styles.body}>on</Text>
      <Text style={styles.title}>{date}</Text>
      {logo && <Image style={styles.image} src={logo} />}
      <CertificateFooter convenerSignature={convenerSignature} secretarySignature={secretarySignature} />
    </Page>
  </Document>
);

export default CertificateTemplate;
