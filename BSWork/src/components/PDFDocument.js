// PDFDocument.js
import React from 'react';
import { Document, Page, Text, View, StyleSheet, render } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import PDFText from '../pdf/pdfText';
import CertificateTemplate from '../pdf/certificateTemplate';
import logo from "../logo.png";
import certificateJsonData from "../data/certificate.json";
import { useAuth } from './AuthContext';
//import { GetUserData } from '../core/fetchData';

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

export const PDF = (props) =>{

  const { isAuthenticated, login, logout, username, SetUName } = useAuth();
  //alert(isAuthenticated);
  //alert(username);

  //const userData = GetUserData(props,username);
  //console.log(userData[0].title);

    const content = "This is to certify that Raman Sehgal has participated in "+certificateJsonData[0].conferenceName
                    +", Organized by "+ certificateJsonData[0].organizer
                    +", Sponsored by "+ certificateJsonData[0].sponsor
                    +" at "+
    certificateJsonData[0].venue+".";
    return (
    <PDFViewer width="100%" height="800px">
    <CertificateTemplate conferenceName={certificateJsonData[0].conferenceName}
                         leftLogo={logo} 
                         rightLogo={logo} 
                         convenerSignature={logo} 
                         secretarySignature={logo}
                         content={content}
                         certificate
                         />
  </PDFViewer>
    );
}
//export default PDFDocument;
