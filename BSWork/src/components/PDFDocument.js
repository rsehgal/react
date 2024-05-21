// PDFDocument.js
import React from 'react';
import { Document, Page, Text, View, StyleSheet, render } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import PDFText from '../pdf/pdfText';
import CertificateTemplate from '../pdf/certificateTemplate';
import logo from "../logo.png";

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 50,
  },
  pageRow: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 50,
  },
  pageCol: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 50,
  },
  section: {
    margin: 20,
    padding: 20,
    flexGrow: 1,
  },
});
/*
const PDFDocument = () => (
  <Document>
    <Page size="A4" style={styles.pageCol}>
    <View >
        <Text>This is the main heading of the page.</Text>
      </View>
      <View >
        <Text>Section #1</Text>
      </View>
      <View style={styles.pageRow}>
        <Text>Section #2</Text>
      </View>
      <View style={styles.pageRow}>
        <PDFText fontSize={23} fontStyle="italic">Raman Sehgal</PDFText>
      </View>
      
    </Page>
  </Document>
);
*/

export const PDF = () =>(
    <PDFViewer width="100%" height="800px">
    <CertificateTemplate conferenceName="DAE Symposium on Nuclear Physics" leftLogo={logo} rightLogo={logo} convenerSignature={logo} secretarySignature={logo}/>
  </PDFViewer>
);
//export default PDFDocument;
