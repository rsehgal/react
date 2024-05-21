import React from 'react';
import { Text } from '@react-pdf/renderer';

function PDFText(props) {
    const { fontFamily='Helvetica', fontSize=25, fontStyle="italic", fontWeight='bold', children } = props;
    //alert(fontStyle);
    return (
        <Text style={{ fontFamily, fontSize, fontStyle, fontWeight }}>
            {children}
        </Text>
    )
};

export default PDFText;